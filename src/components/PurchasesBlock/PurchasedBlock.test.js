import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import PurchasesBlock from './PurchasesBlock'

Enzyme.configure({ adapter: new Adapter() })

describe('PurchaseBlock Component', () => {
  it('should render correctly with given date and allPurchases props', () => {
    const date = '2019-04-25'
    const allPurchases = [
      {
        id: 'c4f63a46-de46-49c3-9773-0a47c62cdb77',
        date: '2019-04-25',
        price: 12,
        currency: 'EUR',
        productName: 'Photo'
      }
    ]

    const component = shallow(<PurchasesBlock date={date} allPurchases={allPurchases}/>)

    expect(component).toMatchSnapshot()
  })
})