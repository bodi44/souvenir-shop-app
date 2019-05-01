import expect from 'expect/build/index'

import currenciesReducer from '../currencies'
import { FETCH_CURRENCIES_BEGIN, FETCH_CURRENCIES_FAILURE, FETCH_CURRENCIES_SUCCESS } from '../../actions/currencies'

const initialState = {
  currenciesData: {},
  isLoading: false,
  hasError: null
}

const currencies = {
  rates: {
    'USD': 1.1,
    'UAH': 29.7,
    'EUR': 1
  }
}

const error = 'Error loading data'

describe('currencies reducers', () => {
  it('should return initial state', () => {
    expect(currenciesReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_CURRENCIES_BEGIN action', () => {
    expect(currenciesReducer(initialState, {
      type: FETCH_CURRENCIES_BEGIN
    })).toEqual(Object.assign({}, initialState, { isLoading: true }))
  })

  it('should handle FETCH_CURRENCIES_SUCCESS action', () => {
    expect(currenciesReducer(initialState, {
      type: FETCH_CURRENCIES_SUCCESS,
      payload: { currencies }
    })).toEqual(Object.assign({}, initialState, { currenciesData: currencies.rates }))
  })

  it('should handle FETCH_CURRENCIES_FAILURE action', () => {
    expect(currenciesReducer(initialState, {
      type: FETCH_CURRENCIES_FAILURE,
      payload: { error }
    })).toEqual(Object.assign({}, initialState, { hasError: error }))
  })
})