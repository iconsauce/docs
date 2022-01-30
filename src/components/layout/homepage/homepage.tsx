import { ReactElement } from 'react'
import { ComponentProps } from '../../../meta/component'

const Homepage = ({ children }: ComponentProps): ReactElement =>
  <main className='pb-10'>
    { children }
  </main>

export default Homepage
