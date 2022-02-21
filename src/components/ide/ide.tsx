import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
// import 'highlight.js/styles/an-old-hope.css'
import 'highlight.js/styles/atom-one-dark.css'
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
import { ComponentProps } from '../../meta/component'

// const START_DELAY = 500
// const CHAR_DELAY = 50
// const SAVE_DELAY = 50
// const BUILD_DELAY = 100
// const BLOCK_DELAY = 1000

// const htmlCode = [
//   '<cmp-li class="mdi/lock">Material Design Icons</cmp-li>',
//   '<cmp-li class="fa/solid/car">FontAwesome</cmp-li>',
//   '<cmp-li class="my/iconsauce">Custom Icon</cmp-li>',
// ]

// const cssCode1 = [
//   '.mdi\/lock::before { content: "\2f" }',
//   '.fa\/solid\/car::before { content: "\2f" }',
//   '.my\/iconsauce::before { content: "\2f" }',
// ]

// const cssCode2 = [
//   '[class^="mdi/"], [class*=" mdi/"]',
//   '[class^="mdi/"], [class*=" mdi/"], [class^="fa/"], [class*=" fa/"]',
//   '[class^="mdi/"], [class*=" mdi/"], [class^="fa/"], [class*=" fa/"], [class^="my/"], [class*=" my/"]',
// ]

// const fontCode = [
//   'A...+45...Z',
//   'A...+167...Z',
//   'A...+315...Z',
// ]

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
}: IdeProps): ReactElement =>
  <div className={clsx('bg-adjust-tone-03 rounded-xl overflow-hidden p-2 grid gap-2', className)}>
    <div className='grid gap-2 wide:grid-cols-2'>
      <Column>
        <File>
          <Tab icon='mdi/language-html5 text-label-orange-06' className='text-adjust-tone-06' status={'unsaved'}>
            page.html
          </Tab>
          <Code language="html" code={`
<ul>
  <cmp-li class="mdi/lock">Material Design Icons</cmp-li>
  <cmp-li class="fa/solid/car">FontAwesome</cmp-li>
  <cmp-li class="mi/twitter">Custom Icon</cmp-li>
</ul>
<p>
  Get all the SVG icons you need to a font icons CSS,
  from different node modules or directly inside your project.
</p>
            `}/>
        </File>
      </Column>
      <Column>
        <File>
          <Tab icon='mdi/language-css3 text-label-sky-06' className='text-adjust-tone-06'>
            build.css
          </Tab>
          <Code language="css" code={String.raw`
@font-face {
  font-family: "iconsauce";
  src: url("data:font/truetype;charset=utf-8;base64,AABBCCDDEE") format("truetype");
}

[class^="miu/"], [class*=" miu/"] {
  font-family: "iconsauce";
  ...
}

.miu\/filled\/10k::before { content: "\2f" }
.miu\/filled\/1k::before { content: "\2f" }
.miu\/filled\/add-chart::before { content: "\2f" }
          `}/>
        </File>
      </Column>
    </div>
  </div>

export default Ide
