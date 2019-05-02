import React from 'react'
import { shallow, configure } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import RequestForm from './RequestForm'

configure({ adapter: new Adapter() })

describe('RequestForm component', () => {
  it('should render correctly with given props', () => {
    const handleInputChange = jest.fn()
    const handleSubmit = jest.fn()
    const handleButtonColorChange = jest.fn()

    const component = shallow(
      <RequestForm
        buttonStyle={'#7f8fa6'}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleButtonColorChange={handleButtonColorChange}
      />
    )

    expect(component).toMatchSnapshot()
  })

  it('event listeners should work', () => {
    const handleInputChange = jest.fn()
    const handleSubmit = jest.fn()
    const handleButtonColorChange = jest.fn()

    const component = shallow(
      <RequestForm
        buttonStyle={'#7f8fa6'}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleButtonColorChange={handleButtonColorChange}
      />
    )

    component.find('input').simulate('change', { target: { value: 'purchase' } })
    component.find('button').simulate('click')
    expect(handleInputChange).toHaveBeenCalledWith({ target: { value: 'purchase' } })
  })
})