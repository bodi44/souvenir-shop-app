import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../components/App'
import FilterRequest from './FilterRequest'

Enzyme.configure({ adapter: new Adapter() })

describe('FilterRequest component', () => {
  it('should render correctly', () => {
    const currencies = {
      'BTC': 0.000211,
      'CZK': 25.640122,
      'EUR': 1,
      'GBP': 0.860335,
      'UAH': 29.569446,
      'USD': 1.120097
    }

    const component = shallow(
      <App>
        <FilterRequest currencies={currencies}/>
      </App>
    )

    expect(component).toMatchSnapshot()
  })
})