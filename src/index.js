import React from 'react'
import ReactDOM from 'react-dom'

import SouvenirStore from './containers/SouvenirStore'
import ProviderWrapper from './components/Provider'
import configureStore from './configureStore'

import './index.css'

ReactDOM.render(
  <ProviderWrapper store={configureStore()}>
    <SouvenirStore/>
  </ProviderWrapper>,
  document.getElementById('root')
)
