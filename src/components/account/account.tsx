import { ReactElement } from 'react'
import clsx from 'clsx'

interface AccountProps {
  username?: string,
  className?: string,
  icon?: string,
  url?: string,
}

const Account = ({
  className = 'text-adjust-tone hover:text-label-sky-07',
  icon,
  username,
  url,
}: AccountProps): ReactElement =>
  <a href={url} className={clsx('inline-flex items-center gap-1 no-underline transition-colors', className)}>
    { icon && <i className={icon}/> }
    <span>{ username }</span>
  </a>

const AccountGihub = ({
  className = 'text-adjust-tone hover:text-label-orange-07',
  username,
}: AccountProps): ReactElement =>
  <Account url={`https://github.com/${username}`} username={username} icon='mdi/github' className={className}/>

const AccountTwitter = ({
  className = 'text-adjust-tone hover:text-label-sky-07',
  username,
}: AccountProps): ReactElement =>
  <Account url={`https://twitter.com/${username}`} username={username} icon='mdi/twitter' className={className}/>

export {
  AccountGihub,
  AccountTwitter,
}
