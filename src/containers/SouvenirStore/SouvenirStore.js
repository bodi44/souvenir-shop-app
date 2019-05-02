import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchCurrencies } from '../../actions/currencies'
import {
  getCurrencies,
  isCurrenciesHasErrorLoading,
  isCurrenciesLoading
} from '../../reducers'

import App from '../../components/App'
import FilterRequest from '../FilterRequest/FilterRequest'
import VisibleOutput from '../VisibleOutput/VisibleOutput'

const SouvenirStore = ({ currencies, fetchCurrencies, isLoading, hasError }) => {
  useEffect(() => {
    fetchCurrencies()
  }, [fetchCurrencies])

  if (isLoading) return <App message={'Data is Loading...'}/>

  if (hasError) return <App message={'Error occurred while fetching API...'}/>

  return (
    <App>
      <FilterRequest currencies={currencies}/>
      <VisibleOutput/>
    </App>
  )
}

SouvenirStore.propTypes = {
  currencies: PropTypes.object.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.any
}

export default connect(
  state => ({
    currencies: getCurrencies(state),
    isLoading: isCurrenciesLoading(state),
    hasError: isCurrenciesHasErrorLoading(state)
  }),
  {
    fetchCurrencies
  }
)(SouvenirStore)