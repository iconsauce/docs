import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children?: ReactNode|ReactNode[],
  className?: string,
  icon?: string,
  variant?: string,
}

const Button = ({
  children,
  className,
  icon,
  variant = 'bg-adjust-tone-03 hover:bg-adjust-tone-04 text-adjust-tone',
}: ButtonProps): ReactElement =>
  <a href="#" className={clsx('px-4 inline-flex items-center gap-2 h-10 no-underline rounded-lg transition-colors', variant, className)}>
    { icon && <i className={icon}/> }
    <span className='text-primary-action'>{ children }</span>
  </a>

const ButtonLight = ({
  children,
  className,
  icon,
}: ButtonProps): ReactElement =>
  <div><Button className={className} icon={icon} variant='bg-adjust-tone text-adjust-tone-04 hover:text-adjust-tone-02'>{ children }</Button></div>

const ButtonDark = ({
  children,
  className,
  icon,
}: ButtonProps): ReactElement =>
  <div><Button className={className} icon={icon} variant='bg-adjust-tone-03 hover:bg-adjust-tone-02 text-adjust-tone'>{ children }</Button></div>
export default Button
export {
  ButtonDark,
  ButtonLight,
}
