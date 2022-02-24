import { ReactElement } from 'react'
import { AccountGihub, AccountTwitter } from '../account/account'

const Footer = (): ReactElement =>
  <footer className='inline-flex items-center justify-center gap-2 text-center text-secondary-paragraph text-adjust-tone'>
    <span>Built with</span>
    <i className='mdi/heart text-label-amaranth-05'/>
    <span>and</span>
    <a href="https://www.tailwindcss.com" target="_blank" className="no-underline inline-flex text-label-sky-06 hover:text-label-sky-07 transition-colors"><i className='is/tailwindcss'/></a>
    <span>by</span>
    <AccountTwitter username='vttrx'/>
    <span>and</span>
    <AccountGihub username='nicolatamburini'/>
  </footer>

export default Footer
