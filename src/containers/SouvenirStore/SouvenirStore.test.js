import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'

import SouvenirStore from './SouvenirStore'
import ProviderWrapper from '../../components/Provider'
import configureStore from '../../configureStore'

Enzyme.configure({ adapter: new Adapter() })

describe('SouvenirStore component', () => {
  it('should render with no props only wrapped in Provider', () => {
    const component = shallow(
      <ProviderWrapper store={configureStore()}>
        <SouvenirStore/>
      </ProviderWrapper>
    )

    expect(component).toMatchSnapshot()
  })
})