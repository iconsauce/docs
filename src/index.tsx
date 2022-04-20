import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Content from './components/layout/content/content'
import Doc, { DocList } from './components/doc/doc'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Autocomplete from './components/autocomplete/autocomplete'
import Headline from './components/headline/headline'
import Homepage from './components/layout/homepage/homepage'
import Hr from './components/hr/hr'
import Ide from './components/ide/ide'
import Sauce from './components/sauce/sauce'
import { ButtonDark, ButtonTailwind } from './components/button/button'
import 'typeface-karla'
import 'typeface-roboto'
import 'normalize.css'
import '@maggioli-design-system/styles/dist/css/colors-rgb.css'
import '@maggioli-design-system/styles/dist/css/base.css'
import './styles/tailwind.css'
import './styles/iconsauce.css'

ReactDOM.render(
  <StrictMode>
    <Homepage>
      <Sauce>
        <Content>
          <div>
            <Header/>
            <Hr/>
          </div>
          <Headline>
            A tool for creating CSS icon fonts used exclusively in your code.
          </Headline>
          <Ide className='shadow-2xl relative'/>
          <div className='grid gap-2'>
            <p className='text-secondary-paragraph text-center'>
              iconsauce ensures a <b>tiny CSS font icon build</b>, which keeps only the glyphs used by your code.
            </p>
          </div>
          <Autocomplete/>
        </Content>
      </Sauce>
      <Content className='max-w-screen-desktop grid gap-12 my-12'>
        <div className='grid tablet:grid-cols-2 gap-12 tablet:px-6 desktop:p-0'>
          <Doc title='Core'>
            <DocList description='How to use iconsauce as cli command, import it in your scripts or as postcss plugin.'>
              <ButtonDark icon="mdi/github" href="https://github.com/iconsauce/docs/wiki/CLI">Docs</ButtonDark>
              <ButtonDark icon="mdi/cog" href="https://github.com/iconsauce/docs/wiki/Configuration">Configuration</ButtonDark>
              <ButtonDark icon="mgg/terminal" href="https://github.com/iconsauce/docs/wiki/CLI">CLI</ButtonDark>
              <ButtonDark icon="is/postcss" href="https://github.com/iconsauce/docs/wiki/PostCSS-plugin">Postcss plugin</ButtonDark>
            </DocList>
          </Doc>
          <Doc title='Plugins'>
            <DocList description='Use iconsauce with the most used icon sets available.'>
              <ButtonDark icon="miu/filled/edit" href="https://github.com/iconsauce/docs/wiki/Write-a-plugin">Write a plugin</ButtonDark>
              <ButtonDark icon="miu/filled/extension" href="https://github.com/iconsauce/plugin-material-design-icons-updated">Material Design Icons Updated</ButtonDark>
              <ButtonDark icon="mdi/toy-brick" href="https://github.com/iconsauce/plugin-mdi-svg">Material Design Icons Community</ButtonDark>
              <ButtonDark icon="hero/scissors" href="https://github.com/iconsauce/plugin-heroicons">Heroicons</ButtonDark>
              <ButtonDark icon="mi/baseline/extension" href="https://github.com/iconsauce/plugin-material-icons">Google Material Icons</ButtonDark>
              <ButtonDark icon="oct/24/hubot" href="https://github.com/iconsauce/plugin-octicons">Octicons</ButtonDark>
              {/* <ButtonDark icon="ion/power-plug">Ionicons</ButtonDark> */}
              {/* <ButtonDark icon="fa/power-plug">FontAwesome</ButtonDark> */}
            </DocList>
            <DocList description='Use iconsauce with your own icon set.'>
              <ButtonDark icon="mgg/user-dead" href="https://github.com/iconsauce/plugin-mgg-icons">Maggioli Icons</ButtonDark>
            </DocList>
          </Doc>
        </div>
        <Hr className='bg-adjust-tone-05'/>
        <div className='grid gap-2'>
          <p className='text-secondary-caption text-center flex flex-wrap items-center justify-center gap-0 px-2 mobile:bg-label-sky-09 mobile:p-4 mobile:rounded-md mobile:text-label-sky-02 text-adjust-tone-10'>
            This project is inspired
            by utility first framework
            <ButtonTailwind href="https://www.tailwindcss.com" icon="is/tailwindcss" className='mx-2 mobile:mt-4'>
              TailwindCSS
            </ButtonTailwind>
          </p>
        </div>
        <Hr className='bg-adjust-tone-05'/>
        <Footer/>
      </Content>
    </Homepage>
  </StrictMode>,
  document.getElementById('root'),
)
