import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import App from '../App'
import FilterRequest from '../../containers/FilterRequest/FilterRequest'
import VisibleOutput from '../../containers/VisibleOutput/VisibleOutput'

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  it('should render correctly with given message props', () => {
    const component = shallow(
      <App message={'Data is Loading...'}/>
    )
    expect(component).toMatchSnapshot()
  })

  it('should render correctly with no props but with React children', () => {
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
        <VisibleOutput/>
      </App>
    )
    expect(component).toMatchSnapshot()
  })
})