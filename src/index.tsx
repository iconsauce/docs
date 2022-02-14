import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Content from './components/layout/content/content'
import Doc, { DocList } from './components/doc/doc'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Headline from './components/headline/headline'
import Homepage from './components/layout/homepage/homepage'
import Hr from './components/hr/hr'
import Ide from './components/ide/ide'
import Sauce from './components/sauce/sauce'
import { ButtonDark, ButtonLight } from './components/button/button'
import 'typeface-karla'
import 'typeface-roboto'
import 'normalize.css'
import '@maggioli-design-system/styles/dist/css/colors-rgb.css'
import '@maggioli-design-system/styles/dist/css/base.css'

import './styles/iconsauce.css'
import './styles/tailwind.css'

ReactDOM.render(
  <StrictMode>
    <Homepage>
      <Sauce>
        <Content>
          <Header/>
          <Hr/>
          <Headline>
            Have an instant huge icon library
            and build only the ones you use.
          </Headline>
          <Ide className='shadow-2xl relative'/>
          <p className='text-secondary-paragraph mt-6 text-center'>
            iconsauce ensures a <b>tiny CSS font icon build</b>, which keeps only the glyphs used by your code.
          </p>
        </Content>
      </Sauce>
      <Content className='max-w-screen-desktop grid gap-12 my-12'>
        <div className='grid grid-cols-2 gap-12'>
          <Doc title='Core'>
            <DocList description='How to use iconsauce as cli command, import it in your scripts or as postcss plugin.'>
              <ButtonDark icon="mdi/github">Installation</ButtonDark>
              <ButtonDark icon="mdi/github">Standalone library</ButtonDark>
              <ButtonDark icon="mdi/github">Postcss plugin</ButtonDark>
              <ButtonDark icon="mdi/github">Write a plugin</ButtonDark>
            </DocList>
            <div className='self-end'>
              <ButtonLight icon="mdi/twitter">Share on Twitter</ButtonLight>
            </div>
          </Doc>
          <Doc title='Plugins'>
            <DocList description='Use iconsauce with the most used icon sets available.'>
              <ButtonDark icon="mdi/power-plug">Material Design Icons</ButtonDark>
              <ButtonDark icon="mdi/power-plug">Google Material Icons</ButtonDark>
              <ButtonDark icon="mdi/power-plug">Heroicons</ButtonDark>
              <ButtonDark icon="mdi/power-plug">Octicons</ButtonDark>
              <ButtonDark icon="mdi/power-plug">Ionicons</ButtonDark>
              <ButtonDark icon="mdi/power-plug">FontAwesome</ButtonDark>
            </DocList>
            <DocList description='Use iconsauce with your own icon set.'>
              <ButtonDark icon="mdi/power-plug">Maggioli Icons</ButtonDark>
            </DocList>
          </Doc>
        </div>
        <Hr className='bg-adjust-tone-05'/>
        <Footer/>
      </Content>
    </Homepage>
  </StrictMode>,
  document.getElementById('root'),
)
