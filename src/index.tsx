import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Homepage from './layout/homepage/homepage'
import Content from './layout/content/content'
import Header from './header/header'
import Sauce from './sauce/sauce'
import Hr from './hr/hr'
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
          <div className='text-center py-12'>
            <h1 className='m-auto text-primary-h1 max-w-2xl'>
              Have an instant huge icon library
              and build only the ones you choose.
            </h1>
          </div>
        </Content>
      </Sauce>
    </Homepage>
  </StrictMode>,
  document.getElementById('root'),
)
