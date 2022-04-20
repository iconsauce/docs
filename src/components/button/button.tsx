import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children?: ReactNode|ReactNode[],
  className?: string,
  compressed?: boolean,
  href?: string,
  icon?: string,
  variant?: string,
}

const Button = ({
  children,
  className,
  compressed = false,
  icon,
  href,
  variant = 'bg-adjust-tone-03 hover:bg-adjust-tone-04 text-adjust-tone h-10 rounded-lg',
}: ButtonProps): ReactElement =>
  <a href={href} className={clsx('pl-3 inline-flex items-center gap-2 no-underline transition-colors', variant, className, compressed ? 'pr-4 mobile:pr-3' : 'pr-4')}>
    { icon && <i className={icon}/> }
    <span className={clsx('text-primary-action', compressed && 'mobile:hidden')}>{ children }</span>
  </a>

const ButtonLight = ({
  children,
  className,
  compressed = false,
  href,
  icon,
}: ButtonProps): ReactElement =>
  <div><Button compressed={compressed} href={href} className={className} icon={icon} variant='bg-adjust-tone text-adjust-tone-04 hover:text-adjust-tone-02 h-10 rounded-lg'>{ children }</Button></div>

const ButtonDark = ({
  children,
  className,
  compressed = false,
  href,
  icon,
}: ButtonProps): ReactElement =>
  <div><Button compressed={compressed} href={href} className={className} icon={icon} variant='bg-adjust-tone-03 hover:bg-adjust-tone-02 text-adjust-tone h-10 rounded-lg'>{ children }</Button></div>

const ButtonTailwind = ({
  children,
  className,
  compressed = false,
  href,
  icon,
}: ButtonProps): ReactElement =>
  <Button compressed={compressed} href={href} className={className} icon={icon} variant='bg-label-sky-05 hover:bg-label-sky-04 text-adjust-tone h-8 rounded-md'>{ children }</Button>

export default Button
export {
  ButtonDark,
  ButtonLight,
  ButtonTailwind,
}
