import { ReactElement } from 'react'
import clsx from 'clsx'
import './sauce.css'
import { ComponentProps } from '../meta/component'

const Sauce = ({
  children,
  className,
}: ComponentProps): ReactElement =>
  <div className={clsx(className)}>
    <div className='bg-adjust-tone'>{ children }</div>
    <div className='sauce'></div>
  </div>

export default Sauce
