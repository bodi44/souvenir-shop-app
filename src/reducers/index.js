import { combineReducers } from 'redux/es/redux'

import currencies, * as fromCurrencies from './currencies'
import souvenirStore, * as fromSouvenirStore from './sovenirStore'

export default combineReducers({
  currencies: currencies,
  souvenirStore: souvenirStore
})

//Currencies selectors
export const getCurrencies = state =>
  fromCurrencies.getCurrencies(state.currencies)

export const isCurrenciesLoading = state =>
  fromCurrencies.isCurrenciesLoading(state.currencies)

export const isCurrenciesHasErrorLoading = state =>
  fromCurrencies.isCurrenciesHasErrorLoading(state.currencies)

//Store selectors
export const getAllPurchasesByDate = state =>
  fromSouvenirStore.getAllPurchasesByDate(state.souvenirStore)

export const isStoreHasErrorMessage = state =>
  fromSouvenirStore.isStoreHasErrorMessage(state.souvenirStore)

export const showHelpMessage = state =>
  fromSouvenirStore.showHelpMessage(state.souvenirStore)

export const getTotalIncome = state =>
  fromSouvenirStore.getTotalIncome(state.souvenirStore)