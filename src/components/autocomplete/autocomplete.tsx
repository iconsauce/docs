import { ReactElement } from 'react'
import { ButtonDark } from '../button/button'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Autocomplete = (): ReactElement =>
  <div className='py-4 grid desktop:grid-cols-[2fr_1fr] grid-cols-1 desktop:gap-12 gap-6'>
    <Zoom zoomMargin={100} overlayBgColorEnd={'rgba(0, 0, 0, 0.95)'}>
      <img className="w-full rounded-xl shadow-2xl cursor-pointer" src={process.env.PUBLIC_URL + '/img/vscode-iconsauce-loop-example-1300.gif'} alt="VS Code Iconsauce Autocomplete"/>
    </Zoom>
    <div className='flex flex-col gap-4'>
      <h3 className='text-primary-h3'>Autocomplete</h3>
      <p className='text-secondary-paragraph'>
        You can use <b>iconsauce</b> VS Code with its autocompletion extension. It boost your productivity by providing you with a list of all the icons available in your project.
      </p>
      <ButtonDark href="https://marketplace.visualstudio.com/items?itemName=Iconsauce.vscode-iconsauce-autocomplete" icon="mdi/microsoft-visual-studio-code">VS Code Autocomplete Extension</ButtonDark>
    </div>
  </div>

export default Autocomplete
