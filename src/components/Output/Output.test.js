import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import Output from './Output'

Enzyme.configure({ adapter: new Adapter() })

describe('Output Component', () => {
  it('should render correctly with allPurchases and helpMessage props', () => {
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

    const component = shallow(<Output allPurchases={allPurchases} helpMessage={false}/>)
    expect(component).toMatchSnapshot()
  })

  it('should render correctly with allPurchases, helpMessage and error props props', () => {
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

    const component = shallow(<Output allPurchases={allPurchases} helpMessage={false} error={'No such command.'}/>)
    expect(component).toMatchSnapshot()
  })

  it('should render correctly with allPurchases, helpMessage totalIncome props', () => {
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

    const component = shallow(<Output allPurchases={allPurchases} helpMessage={false} totalIncome={'200 UAH'}/>)
    expect(component).toMatchSnapshot()
  })

  it('should render correctly with allPurchases, helpMessage, error, totalIncome props', () => {
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

    const component = shallow(<Output allPurchases={allPurchases} helpMessage={false} error={null} totalIncome={null}/>)
    expect(component).toMatchSnapshot()
  })
})