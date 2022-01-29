import { ReactElement } from 'react'
import clsx from 'clsx'

interface HrProps {
  className?: string,
}

const Hr = ({
  className = 'bg-adjust-tone-08',
}: HrProps): ReactElement =>
  <hr className={clsx('m-0 h-1 rounded-lg border-0', className)}/>

export default Hr
