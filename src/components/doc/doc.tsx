import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

interface DocListProps {
  children?: ReactNode|ReactNode[]
  className?: string
  description?: string
}

const DocList = ({ description, className, children }: DocListProps): ReactElement =>
  <div className={clsx('grid gap-2 text-adjust-tone-08', className)}>
    { description && <p className='text-primary-paragraph'>{ description }</p> }
    { children }
  </div>

interface DocProps {
  children?: ReactNode|ReactNode[]
  className?: string
  title: string
}

const Doc = ({
  children,
  className = 'grid-rows-[auto_1fr]',
  title,
}: DocProps): ReactElement =>
  <div className={clsx('grid gap-4 text-adjust-tone auto-rows-min', className)}>
    <h2 className='text-primary-h2'>{ title }</h2>
    <div className='grid gap-6 grid-rows-[auto_1fr] auto-rows-min'>
      { children }
    </div>
  </div>

export default Doc
export {
  DocList,
}
