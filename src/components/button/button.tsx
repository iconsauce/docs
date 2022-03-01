import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children?: ReactNode|ReactNode[],
  className?: string,
  href?: string,
  icon?: string,
  variant?: string,
}

const Button = ({
  children,
  className,
  icon,
  href,
  variant = 'bg-adjust-tone-03 hover:bg-adjust-tone-04 text-adjust-tone h-10 rounded-lg',
}: ButtonProps): ReactElement =>
  <a href={href} className={clsx('px-4 inline-flex items-center gap-2 no-underline transition-colors', variant, className)}>
    { icon && <i className={icon}/> }
    <span className='text-primary-action'>{ children }</span>
  </a>

const ButtonLight = ({
  children,
  className,
  href,
  icon,
}: ButtonProps): ReactElement =>
  <div><Button href={href} className={className} icon={icon} variant='bg-adjust-tone text-adjust-tone-04 hover:text-adjust-tone-02 h-10 rounded-lg'>{ children }</Button></div>

const ButtonDark = ({
  children,
  className,
  href,
  icon,
}: ButtonProps): ReactElement =>
  <div><Button href={href} className={className} icon={icon} variant='bg-adjust-tone-03 hover:bg-adjust-tone-02 text-adjust-tone h-10 rounded-lg'>{ children }</Button></div>

const ButtonTailwind = ({
  children,
  className,
  href,
  icon,
}: ButtonProps): ReactElement =>
  <Button href={href} className={className} icon={icon} variant='shadow-lg shadow-label-sky-05/30 bg-label-sky-05 hover:bg-label-sky-04 text-adjust-tone h-8 rounded-full'>{ children }</Button>

export default Button
export {
  ButtonDark,
  ButtonLight,
  ButtonTailwind,
}
