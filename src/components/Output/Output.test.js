import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import Output from './Output'
import HelpMessage from '../HelpMessage/HelpMessage'

Enzyme.configure({ adapter: new Adapter() })

describe('Output Component', () => {
  it('should render correctly with title and output props', () => {

    const component = shallow(<Output title={'Output:'} output={'200 UAH'}/>)
    expect(component).toMatchSnapshot()
  })

  it('should render correctly with title, error props and given children', () => {
    const component = shallow(
      <Output title={'Output:'} error={'error'}>
        Some error occurred: <br/> To get instructions please type: <strong>help</strong>
      </Output>
    )
    expect(component).toMatchSnapshot()
  })

  it('should render correctly with title and children', () => {
    const component = shallow(
      <Output title={'Help:'}>
        <HelpMessage/>
      </Output>
    )
    expect(component).toMatchSnapshot()
  })

  it('should render correctly with title and allPurchases props', () => {
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

    const component = shallow(
      <Output title={'Output:'} allPurchases={allPurchases}/>
    )
    expect(component).toMatchSnapshot()
  })
})