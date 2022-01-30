import clsx from 'clsx'
import { ReactElement } from 'react'
import { ComponentProps } from '../../../meta/component'

const Content = ({
  children,
  className = 'max-w-screen-wide',
}: ComponentProps): ReactElement =>
  <div className={clsx('m-auto px-4', className)}>
    { children }
  </div>

export default Content
