import React from 'react'
import { shallow, configure } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import HelpMessage from '../HelpMessage'

configure({ adapter: new Adapter() })

describe('HelpMessage component', () => {
    it('should render correctly', () => {
      const component = shallow(<HelpMessage/>)
      expect(component).toMatchSnapshot()
    })
  }
)