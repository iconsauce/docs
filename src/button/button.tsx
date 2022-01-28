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
  <a href="#" className={clsx('px-4 flex items-center gap-2 h-10 no-underline rounded-lg transition-colors', variant, className)}>
    { icon && <i className={clsx('icon-placeholder', icon)}/> }
    <span className='text-primary-action'>{ children }</span>
  </a>

export default Button
