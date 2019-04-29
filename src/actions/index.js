import { v4 } from 'node-uuid'
import { getAllCurrencies } from '../api'
//fixer api action-names
export const FETCH_CURRENCIES_BEGIN = 'FETCH_CURRENCIES_BEGIN'
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS'
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE'
//store action-names
export const PURCHASE = 'PURCHASE'
export const SHOW_ALL_PURCHASES = 'SHOW_ALL_PURCHASES'
export const CLEAR_PURCHASES_BY_DATE = 'CLEAR_PURCHASES_BY_DATE'
export const REPORT_ABOUT_PURCHASES = 'REPORT_ABOUT_PURCHASES'
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'
export const SHOW_HELP_MESSAGE = 'SHOW_HELP_MESSAGE'

//fixer api actions
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

//store actions
export const purchase = (date, price, currency, productName) => ({
  type: PURCHASE,
  id: v4(),
  date,
  price: parseFloat(price),
  currency,
  productName
})

export const showAllPurchases = () => ({
  type: SHOW_ALL_PURCHASES
})

export const clearPurchasesByDate = date => ({
  type: CLEAR_PURCHASES_BY_DATE,
  date
})

export const reportAboutPurchases = totalIncome => ({
  type: REPORT_ABOUT_PURCHASES,
  totalIncome
})

export const showErrorMessage = error => ({
  type: SHOW_ERROR_MESSAGE,
  error
})

export const showHelpMessage = () => ({
  type: SHOW_HELP_MESSAGE
})