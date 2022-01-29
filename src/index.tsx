import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Homepage from './components/layout/homepage/homepage'
import Content from './components/layout/content/content'
import Header from './components/header/header'
import Sauce from './components/sauce/sauce'
import Headline from './components/headline/headline'
import Ide from './components/ide/ide'
import Hr from './components/hr/hr'
import 'typeface-karla'
import 'typeface-roboto'
import 'normalize.css'
import '@maggioli-design-system/styles/dist/css/colors-rgb.css'
import '@maggioli-design-system/styles/dist/css/base.css'
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
            and build only the ones you choose.
          </Headline>
          <Ide className='shadow-2xl relative'/>
        </Content>
      </Sauce>
    </Homepage>
  </StrictMode>,
  document.getElementById('root'),
)
