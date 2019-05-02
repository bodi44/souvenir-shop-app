import React from 'react'
import PropTypes from 'prop-types'

import './App.scss'
import BEM from '../../helpers/BEM'

const b = BEM('App')

const App = props => (
  <div className={b()}>
    <h1 className={b('title')}>Souvenir-store App</h1>
    {props.message ? <div className={b('data-error')}>{props.message}</div> : props.children}
  </div>
)

App.propTypes = {
  message: PropTypes.string,
  children: PropTypes.node
}

export default App