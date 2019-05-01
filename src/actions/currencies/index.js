import '@babel/polyfill'
import { getAllCurrencies } from '../../api'

//fixer api action-names
export const FETCH_CURRENCIES_BEGIN = 'FETCH_CURRENCIES_BEGIN'
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS'
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE'

export const fetchCurrenciesBegin = () => ({
  type: FETCH_CURRENCIES_BEGIN
})

export const fetchCurrenciesSuccess = currencies => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: { currencies }
})

export const fetchCurrenciesFailure = error => ({
  type: FETCH_CURRENCIES_FAILURE,
  payload: { error }
})

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(fetchCurrenciesBegin())

  try {
    const data = await getAllCurrencies()
    dispatch(fetchCurrenciesSuccess(data))
  } catch (error) {
    dispatch(fetchCurrenciesFailure(error))
  }
}