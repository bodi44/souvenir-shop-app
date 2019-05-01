import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RequestForm from '../RequestForm'
import Output from '../Output'
import {
  getAllPurchasesByDate,
  getCurrencies,
  isCurrenciesLoading,
  isCurrenciesHasErrorLoading,
  isStoreHasErrorMessage,
  getTotalIncome, showHelpMessage
} from '../../reducers'
import { fetchCurrencies } from '../../actions/currencies'

import './SouvenirStoreApp.scss'
import BEM from '../../helpers/BEM'

const b = BEM('SouvenirStoreApp')

const SouvenirStoreApp = ({ fetchCurrencies, currencies, isLoading, hasError, allPurchases, storeErrorMessage, totalIncome, helpMessage }) => {
  useEffect(() => {
    fetchCurrencies()
  }, [fetchCurrencies])

  if (isLoading) return <div className={b('data-error')}>Data is Loading...</div>

  if (hasError) return <div className={b('data-error')}>Error occurred while fetching API</div>

  return (
    <div className={b()}>
      <h1 className={b('title')}>Souvenir-store App</h1>
      <RequestForm
        allPurchases={allPurchases}
        currencyData={currencies}/>
      <Output
        allPurchases={allPurchases}
        totalIncome={totalIncome}
        error={storeErrorMessage}
        helpMessage={helpMessage}/>
    </div>
  )
}

SouvenirStoreApp.propTypes = {
  currencies: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.any,
  allPurchases: PropTypes.array.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  storeErrorMessage: PropTypes.string,
  totalIncome: PropTypes.string,
  helpMessage: PropTypes.bool.isRequired
}

export default connect(
  state => ({
    currencies: getCurrencies(state),
    isLoading: isCurrenciesLoading(state),
    hasError: isCurrenciesHasErrorLoading(state),
    allPurchases: getAllPurchasesByDate(state),
    storeErrorMessage: isStoreHasErrorMessage(state),
    totalIncome: getTotalIncome(state),
    helpMessage: showHelpMessage(state)
  }),
  {
    fetchCurrencies
  }
)(SouvenirStoreApp)