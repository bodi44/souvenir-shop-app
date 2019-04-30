import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import SouvenirStoreApp from './SouvenirStoreApp'
import ProviderWrapper from '../Provider'
import configureStore from '../../configureStore'

Enzyme.configure({ adapter: new Adapter() })

describe('SouvenirStoreApp component', () => {
  it('should render correctly wrapped into Provider with no given props', () => {
    const component = shallow(
      <ProviderWrapper store={configureStore()}>
        <SouvenirStoreApp/>
      </ProviderWrapper>
    )
    expect(component).toMatchSnapshot()
  })
})