import { ReactNode } from 'react'

export interface ComponentProps {
  children?: ReactNode|ReactNode[],
  className?: string,
}
