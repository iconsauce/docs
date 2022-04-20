import { ReactElement } from 'react'

// import Button, { ButtonLight } from '../button/button'
import Button from '../button/button'

const Logo = (): ReactElement =>
  <div className='flex gap-1 items-center'>
    <i className='is/logo text-5xl'/>
    <h4 className='text-primary-h4'>iconsauce</h4>
  </div>

const Menu = (): ReactElement =>
  <nav className='inline-flex gap-2'>
    <Button href="https://marketplace.visualstudio.com/items?itemName=Iconsauce.vscode-iconsauce-autocomplete" icon="mdi/microsoft-visual-studio-code" compressed>Autocomplete</Button>
    <Button icon="mdi/github" href="https://github.com/iconsauce/docs/wiki" compressed>Docs</Button>
  </nav>

const Header = (): ReactElement =>
  <header className='py-4 flex gap-4 justify-between items-center'>
    <Logo/>
    <Menu/>
  </header>

export default Header
