import { ReactElement } from 'react'
import clsx from 'clsx'

interface AccountProps {
  username?: string,
  className?: string,
  icon?: string,
  rel?: string,
  url?: string,
}

const Account = ({
  className = 'text-adjust-tone hover:text-label-sky-07',
  icon,
  rel,
  url,
  username,
}: AccountProps): ReactElement =>
  <a href={url} rel={rel} className={clsx('inline-flex items-center gap-1 no-underline transition-colors', className)}>
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
  <Account rel='me' url={`https://twitter.com/${username}`} username={username} icon='mdi/twitter' className={className}/>

export {
  AccountGihub,
  AccountTwitter,
}
