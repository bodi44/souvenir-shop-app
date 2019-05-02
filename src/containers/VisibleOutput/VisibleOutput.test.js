import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../components/App'
import VisibleOutput from './VisibleOutput'

Enzyme.configure({ adapter: new Adapter() })

describe('VisibleOutput component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <App>
        <VisibleOutput/>
      </App>
    )

    expect(component).toMatchSnapshot()
  })
})