import '@babel/polyfill'
import { v4 } from 'node-uuid'
//store action-names
export const PURCHASE = 'PURCHASE'
export const SHOW_ALL_PURCHASES = 'SHOW_ALL_PURCHASES'
export const CLEAR_PURCHASES_BY_DATE = 'CLEAR_PURCHASES_BY_DATE'
export const REPORT_ABOUT_PURCHASES = 'REPORT_ABOUT_PURCHASES'
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'
export const SHOW_HELP_MESSAGE = 'SHOW_HELP_MESSAGE'

//store actions
export const purchase = (date, price, currency, productName, id = v4()) => ({
  type: PURCHASE,
  id,
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