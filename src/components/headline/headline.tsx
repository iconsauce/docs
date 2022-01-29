import { ReactElement } from 'react'
import { ComponentProps } from '../../meta/component'

const Headline = ({ children }: ComponentProps ): ReactElement =>
  <div className='text-center py-12'>
    <h1 className='m-auto text-primary-h1 max-w-2xl'>
      { children }
    </h1>
  </div>

export default Headline
