import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'
import hljs from 'highlight.js/lib/core'
import htmlxml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('xml', htmlxml)
import { ComponentProps } from '../../meta/component'

interface IdeProps {
  children?: ReactNode|ReactNode[],
  className?: string,
}

interface TabProps {
  children?: ReactNode|ReactNode[],
  className?: string,
  icon?: string,
}

const Tab = ({ children, className, icon }: TabProps): ReactElement =>
  <div className={clsx('flex flex-grow-0 flex-shrink-0', className)}>
    <div className='inline-flex items-center gap-1 pt-2 px-4 bg-adjust-tone-01 border-t border-solid border-0 border-t-adjust-tone-05 rounded-t-lg'>
      { icon && <i className={icon}/> }
      <div>{ children }</div>
      <i className='miu/filled/close text-xs text-adjust-tone-06 ml-2'/>
    </div>
  </div>

const Column = ({ children }: ComponentProps): ReactElement =>
  <div className='grid gap-0'>
    { children }
  </div>

const File = ({ children }: ComponentProps): ReactElement =>
  <div className='flex flex-col'>
    { children }
  </div>

const Code = ({
  children,
  className = 'rounded-b-lg rounded-tr-lg',
}: ComponentProps): ReactElement =>
  <div className={clsx('flex-grow text-mono-code bg-adjust-tone-01 p-4 text-adjust-tone-06', className)}>
    { children }
  </div>

interface HtmlProps {
  code: string,
  className?: string,
}

const Html = ({ className, code }: HtmlProps) =>
  <div className={clsx(className)}>
    <div dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { language: 'xml' }).value }} />
  </div>

const Ide = ({
  className,
}: IdeProps): ReactElement =>
  <div className={clsx('bg-adjust-tone-03 rounded-xl overflow-hidden p-2 grid gap-2 h-[500px]', className)}>
    <div className='grid gap-2 grid-cols-2'>
      <Column>
        <File>
          <Tab icon='mdi/language-html5' className='text-label-orange-06'>
            page.html
          </Tab>
          <Code className='rounded-tr-lg rounded-b-lg'>
            <Html code={`
              <nav>
                <cmp-button class="gm/heart">Save to favourites</cmp-button>
                <cmp-button class="mdi/heart">Save to favourites</cmp-button>
              </nav>
            `}/>
          </Code>
        </File>
      </Column>
      <Column>
        <File>
          <Tab icon='mdi/language-css3' className='text-label-sky-06'>
            build.css
          </Tab>
          <Code>
            css code built here
          </Code>
        </File>
      </Column>
    </div>
  </div>

export default Ide
