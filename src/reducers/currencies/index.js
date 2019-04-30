import { combineReducers } from 'redux'

import { FETCH_CURRENCIES_BEGIN, FETCH_CURRENCIES_FAILURE, FETCH_CURRENCIES_SUCCESS } from '../../actions'

//Currencies reducers
const currenciesData = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_BEGIN:
      return state
    case FETCH_CURRENCIES_SUCCESS:
      return action.payload.currencies.rates
    case FETCH_CURRENCIES_FAILURE:
      return state
    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_BEGIN:
      return true
    case FETCH_CURRENCIES_SUCCESS:
      return false
    case FETCH_CURRENCIES_FAILURE:
      return false
    default:
      return state
  }
}

const hasError = (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_BEGIN:
      return null
    case FETCH_CURRENCIES_SUCCESS:
      return null
    case FETCH_CURRENCIES_FAILURE:
      return action.payload.error
    default:
      return state
  }
}

export default combineReducers({
  currenciesData,
  isLoading,
  hasError
})

//Selectors
export const getCurrencies = state =>
  state.currenciesData

export const isCurrenciesLoading = state =>
  state.isLoading

export const isCurrenciesHasErrorLoading = state =>
  state.hasError