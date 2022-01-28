import { ReactElement } from 'react'
import { ComponentProps } from '../../meta/component'

const Homepage = ({ children }: ComponentProps): ReactElement =>
  <main>
    { children }
  </main>

export default Homepage
