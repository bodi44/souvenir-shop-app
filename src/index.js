import React from 'react'
import ReactDOM from 'react-dom'

import SouvenirStoreApp from './components/SouvenirStoreApp'
import ProviderWrapper from './components/Provider'
import configureStore from './configureStore'

import './index.css'

ReactDOM.render(
  <ProviderWrapper store={configureStore()}>
    <SouvenirStoreApp/>
  </ProviderWrapper>,
  document.getElementById('root')
)
