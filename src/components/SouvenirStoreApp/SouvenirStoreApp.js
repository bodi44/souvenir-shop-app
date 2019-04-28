import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import RequestForm from '../RequestForm'
import Output from '../Output'
import {
  getAllPurchasesByDate,
  getCurrencies,
  isCurrenciesLoading,
  isCurrenciesHasErrorLoading,
  isStoreHasErrorMessage,
  getTotalIncome
} from '../../reducers'
import { fetchCurrencies } from '../../actions'

import './SouvenirStoreApp.scss'
import BEM from '../../helpers/BEM'

const b = BEM('SouvenirStoreApp')

const SouvenirStoreApp = ({ fetchCurrencies, currencies, isLoading, hasError, allPurchases, storeErrorMessage, totalIncome }) => {
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
        error={storeErrorMessage}/>
    </div>
  )
}

export default connect(
  state => ({
    currencies: getCurrencies(state),
    isLoading: isCurrenciesLoading(state),
    hasError: isCurrenciesHasErrorLoading(state),
    allPurchases: getAllPurchasesByDate(state),
    storeErrorMessage: isStoreHasErrorMessage(state),
    totalIncome: getTotalIncome(state)
  }),
  {
    fetchCurrencies
  }
)(SouvenirStoreApp)