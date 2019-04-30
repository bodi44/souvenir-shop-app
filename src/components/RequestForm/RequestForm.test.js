import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import RequestForm from './RequestForm'
import ProviderWrapper from '../Provider'
import configureStore from '../../configureStore'

Enzyme.configure({ adapter: new Adapter() })

describe('RequestForm component', () => {
  it('should render correctly with given props', () => {
    const allPurchases = [
      {
        id: '2019-04-25',
        purchases: [
          {
            id: 'c4f63a46-de46-49c3-9773-0a47c62cdb77',
            date: '2019-04-25',
            price: 12,
            currency: 'EUR',
            productName: 'Photo'
          }
        ]
      }
    ]

    const currencyData = {
      'BTC': 0.000211,
      'CZK': 25.640122,
      'EUR': 1,
      'GBP': 0.860335,
      'UAH': 29.569446,
      'USD': 1.120097
    }

    const component = shallow(
      <ProviderWrapper store={configureStore()}>
        <RequestForm allPurchases={allPurchases} currencyData={currencyData}/>
      </ProviderWrapper>)
    expect(component).toMatchSnapshot()
  })
})