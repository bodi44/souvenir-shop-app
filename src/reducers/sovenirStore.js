import { combineReducers } from 'redux'

import {
  CLEAR_PURCHASES_BY_DATE,
  PURCHASE,
  REPORT_ABOUT_PURCHASES,
  SHOW_ALL_PURCHASES, SHOW_ERROR_MESSAGE, SHOW_HELP_MESSAGE
} from '../actions'

//Souvenir-store reducers
const byDate = (state = {}, action) => {
  switch (action.type) {
    case PURCHASE:
      if (!state.hasOwnProperty(action.date)) {
        return {
          ...state,
          [action.date]: {
            id: action.date,
            purchases: [
              {
                id: action.id,
                date: action.date,
                price: action.price,
                currency: action.currency,
                productName: action.productName
              }
            ]
          }
        }
      } else return {
        ...state,
        [action.date]: {
          id: action.date,
          purchases: [
            ...state[action.date].purchases,
            {
              id: action.id,
              date: action.date,
              price: action.price,
              currency: action.currency,
              productName: action.productName
            }
          ]
        }
      }
    case SHOW_ALL_PURCHASES:
      return state
    case CLEAR_PURCHASES_BY_DATE:
      const newState = Object.assign({}, state)
      delete newState[action.date]
      return newState
    default:
      return state
  }
}

const allDates = (state = [], action) => {
  switch (action.type) {
    case PURCHASE:
      if (state.indexOf(action.date) === -1)
        return [...state, action.date]
      else return state
    case SHOW_ALL_PURCHASES:
      return Array.prototype.slice.call(state).sort((a, b) => new Date(b) - new Date(a)).reverse()
    case CLEAR_PURCHASES_BY_DATE:
      return state.filter(date => date !== action.date)
    default:
      return state
  }
}

const errors = (state = null, action) => {
  switch (action.type) {
    case SHOW_ERROR_MESSAGE:
      return action.error
    default:
      return null
  }
}

const totalIncome = (state = null, action) => {
  switch (action.type) {
    case REPORT_ABOUT_PURCHASES:
      return action.totalIncome
    default:
      return null
  }
}

const helpMessage = (state = false, action) => {
  switch (action.type) {
    case SHOW_HELP_MESSAGE:
      return true
    default:
      return false
  }
}

const souvenirStore = combineReducers({
  byDate,
  allDates,
  errors,
  helpMessage,
  totalIncome
})

export default souvenirStore

//Selectors
export const getAllPurchasesByDate = state => state.allDates.map(date => state.byDate[date])

export const isStoreHasErrorMessage = state => state.errors

export const showHelpMessage = state => state.helpMessage

export const getTotalIncome = state => state.totalIncome