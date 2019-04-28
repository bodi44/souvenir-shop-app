import React from 'react'
import ReactDOM from 'react-dom'

import SouvenirStoreApp from './SouvenirStoreApp'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SouvenirStoreApp/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
