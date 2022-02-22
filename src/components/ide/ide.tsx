import { ReactElement, ReactNode, useEffect, useState } from 'react'
import clsx from 'clsx'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
// import 'highlight.js/styles/an-old-hope.css'
import 'highlight.js/styles/atom-one-dark.css'
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
import { ComponentProps } from '../../meta/component'

const START_DELAY = 1500
const CHAR_DELAY = 75
const SAVE_DELAY = 1000
const FINISH_DELAY = 3000

const htmlCode = [
  '<cmp-icon class="mdi/lock">Material Design Icons</cmp-icon>',
  '<cmp-icon class="fa/solid/car">FontAwesome</cmp-icon>',
  '<cmp-icon class="my/iconsauce">Custom Icon</cmp-icon>',
]

const cssCode = [
  [
    'A...+45...Z',
    'A...+167...Z',
    'A...+315...Z',
  ], [
    '[class^="mdi/"], [class*=" mdi/"]',
    '[class^="mdi/"], [class*=" mdi/"], [class^="fa/"], [class*=" fa/"]',
    '[class^="mdi/"], [class*=" mdi/"], [class^="fa/"], [class*=" fa/"], [class^="my/"], [class*=" my/"]',
  ],
]

const cssCodeClasses = [
  '.mdi\\/lock::before { content: "\\ea01" }',
  '.fa\\/solid\\/car::before { content: "\\ea02" }',
  '.my\\/iconsauce::before { content: "\\ea03" }',
]

interface IdeProps {
  children?: ReactNode|ReactNode[],
  className?: string,
}

interface TabProps {
  children?: ReactNode|ReactNode[]
  className?: string
  icon?: string
  status?: string
}

const statusDictionary: Map<string, string> = new Map()
statusDictionary.set('saved', 'miu/filled/close text-adjust-tone-06')
statusDictionary.set('unsaved', 'miu/filled/circle text-label-amaranth-06')

const Tab = ({
  children,
  className,
  icon,
  status = 'saved',
}: TabProps): ReactElement =>
  <div className={clsx('flex flex-grow-0 flex-shrink-0 relative', className)}>
    <div className='sticky left-0 inline-flex items-center gap-1 pt-2 px-4 bg-adjust-tone-01 border-t border-solid border-0 border-t-adjust-tone-05 rounded-t-lg'>
      { icon && <i className={icon}/> }
      <div>{ children }</div>
      <i className={clsx(statusDictionary.get(status), 'text-xs ml-2')}/>
    </div>
  </div>

const Column = ({ children }: ComponentProps): ReactElement =>
  <div className='flex'>
    { children }
  </div>

const File = ({ children }: ComponentProps): ReactElement =>
  <div className='flex flex-col grow'>
    { children }
  </div>

const getHtmlCode = (index:number, currentChar:number) => {
  let prevCode = ''
  if (index > 0) {
    prevCode = htmlCode.slice(0, index).join('\n')
    prevCode += '\n'
  }
  return {
    total: htmlCode[index].length,
    text: prevCode + htmlCode[index].substring(0, currentChar),
  }
}

const getCssCode = (index:number) => {
  let prevCode = ''
  if (index > 0) {
    prevCode = cssCodeClasses.slice(0, index).join('\n')
    prevCode += '\n'
  }
  return {
    font: cssCode[0][index],
    regexSelectors: cssCode[1][index],
    icons: prevCode + cssCodeClasses[index],
  }
}

type CodeType =
  | 'css'
  | 'html'

interface CodeProps {
  className?: string,
  code: string,
  language: CodeType,
}

const Code = ({
  className = 'rounded-tr-lg rounded-b-lg',
  code,
  language,
}: CodeProps): ReactElement =>
  <div className={clsx('grow flex text-mono-code bg-adjust-tone-01 p-4 text-adjust-tone-06 overflow-hidden', className)}>
    <pre className={clsx(className, 'm-0 text-mono-hack box-border')} dangerouslySetInnerHTML={{ __html: hljs.highlight(code.trim(), { language }).value }} />
  </div>

const Ide = ({
  className,
}: IdeProps): ReactElement => {

  const [started, setStarted] = useState(false)
  const [saveStatus, setSaveStatus] = useState('pause')
  const [textCode, setHtmlCode] = useState('')
  const [cssFont, setCssFont] = useState('')
  const [cssRegexSelectors, setRegexSelectors] = useState('')
  const [cssIcons, setIcons] = useState('')
  const [currentRow, setCurrentRow] = useState(0)

  // start
  useEffect(() => {
    if (!started) {
      const handle = window.setTimeout(() => {
        setStarted(true)
        setSaveStatus('writing')
      }, START_DELAY)
      return () => {
        window.clearTimeout(handle)
      }
    }
  })

  // write html code
  useEffect(() => {
    if (started) {
      let currentChar = 0
      const handle = window.setInterval(() => {
        if (saveStatus === 'writing') {
          const { text, total } = getHtmlCode(currentRow, currentChar)
          if (currentChar === total) {
            setSaveStatus('row-finished')
            setCurrentRow(currentRow + 1)
          } else {
            currentChar += 1
          }
          setHtmlCode(text)
        }
      }, CHAR_DELAY)
      return () => {
        window.clearTimeout(handle)
      }
    }
  }, [started, saveStatus])

  // CSS
  useEffect(() => {
    if (saveStatus === 'row-finished') {
      const handle = window.setInterval(() => {
        const { font, regexSelectors, icons } = getCssCode(currentRow)
        setCssFont(font)
        setIcons(icons)
        setRegexSelectors(regexSelectors)
        setSaveStatus('writing')
        if (currentRow >= htmlCode.length - 1) {
          setSaveStatus('all-finished')
        }
      }, SAVE_DELAY)
      return () => {
        window.clearTimeout(handle)
      }
    }
  }, [saveStatus])

  useEffect(() => {
    if (saveStatus === 'all-finished') {
      const handle = window.setInterval(() => {
        setSaveStatus('pause')
        setCssFont('')
        setIcons('')
        setHtmlCode('')
        setRegexSelectors('')
        setStarted(false)
        setCurrentRow(0)
      }, FINISH_DELAY)
      return () => {
        window.clearTimeout(handle)
      }
    }
  }, [saveStatus])

  return <div className={clsx('bg-adjust-tone-03 rounded-xl overflow-hidden p-2 grid gap-2', className)}>
    <div className='grid gap-2 wide:grid-cols-2'>
      <Column>
        <File>
          <Tab icon='mdi/language-html5 text-label-orange-06' className='text-adjust-tone-06' status={clsx(saveStatus === 'writing' ? 'unsaved' : 'saved')}>
            page.html
          </Tab>
          <Code language="html" code={`
<p>
  Get all the SVG icons you need to a font icons CSS,
  from different node modules and directly inside your project.
</p>
${textCode !== '' ? textCode + '\n' : ''}
            `}/>
        </File>
      </Column>
      <Column>
        <File>
          <Tab icon='mdi/language-css3 text-label-sky-06' className='text-adjust-tone-06'>
            build.css
          </Tab>
          <Code language="css" code={cssFont === '' ? '' : String.raw`
@font-face {
  font-family: "iconsauce";
  src: url("data:font/truetype;charset=utf-8;base64,${cssFont}") format("truetype");
}

${cssRegexSelectors} {
  font-family: "iconsauce";
  ...
}

${cssIcons}
          `}/>
        </File>
      </Column>
    </div>
  </div>
}

export default Ide
