import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'
import { ComponentProps } from '../../meta/component'

interface IdeProps {
  children?: ReactNode|ReactNode[],
  className?: string,
}

// https://github.com/tailwindlabs/tailwindcss.com/blob/master/src/components/home/Performance.js

// const WindowButton = ({
//   className = 'bg-adjust-tone-02',
// }: ComponentProps) =>
//   <div className={clsx('w-3 h-3 rounded-full', className)}/>

// const Window = () =>
//   <div className='flex gap-2'>
//     <WindowButton/>
//     <WindowButton/>
//     <WindowButton/>
//   </div>

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
      <i className='miu/close'/>
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

const Terminal = ({ children }: ComponentProps): ReactElement =>
  <div className='grid grid-rows-[auto_1fr]'>
    <div className='bg-adjust-tone-01 flex gap-2 px-4 pt-2 border-t-2 border-0 border-solid border-t-adjust-tone-02'>
      <i className='mgg/terminal'/>
      <div className='text-adjust-tone-08'>Terminal</div>
    </div>
    <Code className='rounded-b-lg rounded-tr-none'>
      { children }
    </Code>
  </div>

const Ide = ({
  className,
}: IdeProps): ReactElement =>
  <div className={clsx('bg-adjust-tone-03 rounded-xl overflow-hidden p-2 grid gap-2 h-[500px]', className)}>
    <div className='grid gap-2 grid-cols-2'>
      <Column>
        <File>
          <Tab icon='is/language-html5' className='text-label-orange-06'>
            page.html
          </Tab>
          <Code className='rounded-b-none rounded-tr-lg'>
            markup code here
          </Code>
        </File>
        <Terminal>terminal log here</Terminal>
      </Column>
      <Column>
        <File>
          <Tab icon='is/language-css3' className='text-label-sky-06'>
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
