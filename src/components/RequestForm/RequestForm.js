import React from 'react'

import './RequestForm.scss'
import BEM from '../../helpers/BEM'

const b = BEM('RequestForm')

const RequestForm = ({ buttonStyle, handleInputChange, handleSubmit, handleButtonColorChange }) => (
  <form action="" className={b()} onSubmit={e => handleSubmit(e)}>
    <input
      type="text"
      name='query'
      placeholder="Type your query here..."
      className={b('input')}
      onChange={handleInputChange}
    />
    <button
      className={b('submit')}
      type='submit'
      style={{ backgroundColor: buttonStyle }}
      onMouseDown={handleButtonColorChange}
      onMouseUp={handleButtonColorChange}>
      Click to Submit
    </button>
  </form>
)

export default RequestForm