import { ReactElement } from 'react'
import { AccountGihub, AccountTwitter } from '../account/account'

const Footer = (): ReactElement =>
  <footer className='inline-flex items-center justify-center gap-2 text-center text-secondary-paragraph text-adjust-tone'>
    <span>Built with</span>
    <i className='mdi/heart animate-bounce text-label-amaranth-05'/>
    <span>by</span>
    <AccountTwitter username='vttrx'/>
    <span>and</span>
    <AccountGihub username='nicolatamburini'/>
  </footer>

export default Footer
