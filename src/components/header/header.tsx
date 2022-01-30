import { ReactElement } from 'react'

import Button, { ButtonLight } from '../button/button'

const Logo = (): ReactElement =>
  <div className='flex gap-4 items-center'>
    <i className='is/iconsauce-logo icon-placeholder w-12 h-12'/>
    <h4 className='text-primary-h4'>iconsauce</h4>
  </div>

const Menu = (): ReactElement =>
  <nav className='inline-flex gap-2'>
    <ButtonLight icon="mdi/twitter">Share on Twitter</ButtonLight>
    <Button icon="mdi/github">Docs</Button>
  </nav>

const Header = (): ReactElement =>
  <header className='py-4 flex gap-4 justify-between items-center'>
    <Logo/>
    <Menu/>
  </header>

export default Header
