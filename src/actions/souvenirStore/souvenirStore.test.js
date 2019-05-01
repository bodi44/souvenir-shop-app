import expect from 'expect'

import {
  CLEAR_PURCHASES_BY_DATE,
  PURCHASE,
  SHOW_ALL_PURCHASES,
  REPORT_ABOUT_PURCHASES,
  SHOW_ERROR_MESSAGE,
  SHOW_HELP_MESSAGE
} from '../souvenirStore'

import {
  purchase,
  showAllPurchases,
  clearPurchasesByDate,
  reportAboutPurchases,
  showErrorMessage,
  showHelpMessage
} from '../souvenirStore'

describe('actions', () => {
  it('should add purchase', () => {
    expect(purchase('2019-04-25', 2, 'USD', 'T-shirt', 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869'))
      .toEqual(
        {
          type: PURCHASE,
          id: 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869',
          date: '2019-04-25',
          price: 2,
          currency: 'USD',
          productName: 'T-shirt'
        })
  })

  it('show all purchases', () => {
    expect(showAllPurchases()).toEqual({ type: SHOW_ALL_PURCHASES })
  })

  it('clear purchases by date', () => {
    expect(clearPurchasesByDate('2019-04-25'))
      .toEqual(
        {
          type: CLEAR_PURCHASES_BY_DATE,
          date: '2019-04-25'
        }
      )
  })

  it('report about purchases', () => {
    expect(reportAboutPurchases('200 UAH'))
      .toEqual({
        type: REPORT_ABOUT_PURCHASES,
        totalIncome: '200 UAH'
      })
  })

  it('show error message', () => {
    expect(showErrorMessage('error message')).toEqual({
      type: SHOW_ERROR_MESSAGE,
      error: 'error message'
    })
  })

  it('show help message', () => {
    expect(showHelpMessage()).toEqual({
      type: SHOW_HELP_MESSAGE
    })
  })
})
