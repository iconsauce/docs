import { ReactElement } from 'react'
import { ComponentProps } from '../../../meta/component'

const Content = ({ children }: ComponentProps): ReactElement =>
  <div className='max-w-screen-wide m-auto px-4'>
    { children }
  </div>

export default Content
