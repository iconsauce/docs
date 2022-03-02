import { ReactElement } from 'react'
import { AccountGihub, AccountTwitter } from '../account/account'

const Footer = (): ReactElement =>
  <footer className='inline-flex flex-wrap items-center justify-center gap-2 text-center text-secondary-detail text-adjust-tone'>
    <div className='inline-flex gap-2 items-center'>
      <span>Built with</span>
      <i className='mdi/heart text-label-amaranth-05'/>
      <span>+</span>
      <i className='mdi/coffee text-label-yellow-05'/>
    </div>
    <div className='inline-flex gap-2'>
      <span>by</span>
      <AccountTwitter username='vttrx'/>
      <span>and</span>
      <AccountGihub username='nicolatamburini'/>
    </div>
  </footer>

export default Footer
