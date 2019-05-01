import expect from 'expect/build/index'

import {
  CLEAR_PURCHASES_BY_DATE,
  PURCHASE,
  REPORT_ABOUT_PURCHASES,
  SHOW_ALL_PURCHASES, SHOW_ERROR_MESSAGE,
  SHOW_HELP_MESSAGE
} from '../../actions/souvenirStore'
import souvenirStoreReducer from '../souvenirStore'

const initialState = {
  byDate: {},
  allDates: [],
  errors: null,
  helpMessage: false,
  totalIncome: null
}

const updatedState = {
  byDate: {
    '2019-04-25': {
      id: '2019-04-25',
      purchases: [
        {
          id: 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869',
          date: '2019-04-25',
          price: 2,
          currency: 'USD',
          productName: 'T-shirt'
        }
      ]
    }
  },
  allDates: ['2019-04-25'],
  errors: null,
  helpMessage: false,
  totalIncome: null
}

describe('souvenir-store reducers', () => {
  it('should return initial state', () => {
    expect(souvenirStoreReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle PURCHASE action', () => {
    expect(souvenirStoreReducer(initialState, {
      type: PURCHASE,
      id: 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869',
      date: '2019-04-25',
      price: 2,
      currency: 'USD',
      productName: 'T-shirt'
    })).toEqual(updatedState)
  })

  it('should handle SHOW_ALL_PURCHASES action', () => {
    expect(souvenirStoreReducer({
      byDate: {
        '2019-04-25': {
          id: '2019-04-25',
          purchases: [
            {
              id: 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869',
              date: '2019-04-25',
              price: 2,
              currency: 'USD',
              productName: 'T-shirt'
            }
          ]
        },
        '2019-04-05': {
          id: '2019-04-05',
          purchases: [
            {
              id: 'c47001ba-3cea-4640-bb04-3f54f16d0a8d',
              date: '2019-04-05',
              price: 8,
              currency: 'EUR',
              productName: 'Beer'
            }
          ]
        }
      },
      allDates: ['2019-04-25', '2019-04-05'],
      errors: null,
      helpMessage: false,
      totalIncome: null
    }, {
      type: SHOW_ALL_PURCHASES
    })).toEqual({
      byDate: {
        '2019-04-25': {
          id: '2019-04-25',
          purchases: [
            {
              id: 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869',
              date: '2019-04-25',
              price: 2,
              currency: 'USD',
              productName: 'T-shirt'
            }
          ]
        },
        '2019-04-05': {
          id: '2019-04-05',
          purchases: [
            {
              id: 'c47001ba-3cea-4640-bb04-3f54f16d0a8d',
              date: '2019-04-05',
              price: 8,
              currency: 'EUR',
              productName: 'Beer'
            }
          ]
        }
      },
      allDates: ['2019-04-05', '2019-04-25'],
      errors: null,
      helpMessage: false,
      totalIncome: null
    })
  })

  it('should handle CLEAR_PURCHASES_BY_DATE', () => {
    expect(souvenirStoreReducer(
      {
        byDate: {
          '2019-04-25': {
            id: '2019-04-25',
            purchases: [
              {
                id: 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869',
                date: '2019-04-25',
                price: 2,
                currency: 'USD',
                productName: 'T-shirt'
              }
            ]
          },
          '2019-04-05': {
            id: '2019-04-05',
            purchases: [
              {
                id: 'c47001ba-3cea-4640-bb04-3f54f16d0a8d',
                date: '2019-04-05',
                price: 8,
                currency: 'EUR',
                productName: 'Beer'
              }
            ]
          }
        },
        allDates: ['2019-04-25', '2019-04-05'],
        errors: null,
        helpMessage: false,
        totalIncome: null
      },
      {
        type: CLEAR_PURCHASES_BY_DATE,
        date: '2019-04-25'
      }
    )).toEqual({
      byDate: {
        '2019-04-05': {
          id: '2019-04-05',
          purchases: [
            {
              id: 'c47001ba-3cea-4640-bb04-3f54f16d0a8d',
              date: '2019-04-05',
              price: 8,
              currency: 'EUR',
              productName: 'Beer'
            }
          ]
        }
      },
      allDates: ['2019-04-05'],
      errors: null,
      helpMessage: false,
      totalIncome: null
    })
  })

  it('should handle SHOW_ERROR_MESSAGE', () => {
    expect(souvenirStoreReducer(updatedState, {
      type: SHOW_ERROR_MESSAGE,
      error: 'error message'
    })).toEqual(Object.assign({}, updatedState, { errors: 'error message' }))
  })

  it('should handle REPORT ABOUT PURCHASES action', () => {
    expect(souvenirStoreReducer(
      {
        byDate: {
          '2019-04-25': {
            id: '2019-04-25',
            purchases: [
              {
                id: 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869',
                date: '2019-04-25',
                price: 2,
                currency: 'USD',
                productName: 'T-shirt'
              }
            ]
          },
          '2019-04-05': {
            id: '2019-04-05',
            purchases: [
              {
                id: 'c47001ba-3cea-4640-bb04-3f54f16d0a8d',
                date: '2019-04-05',
                price: 8,
                currency: 'EUR',
                productName: 'Beer'
              }
            ]
          }
        },
        allDates: ['2019-04-25', '2019-04-05'],
        errors: null,
        helpMessage: false,
        totalIncome: null
      },
      {
        type: REPORT_ABOUT_PURCHASES,
        totalIncome: '236.98 UAH'
      }
    )).toEqual({
      byDate: {
        '2019-04-25': {
          id: '2019-04-25',
          purchases: [
            {
              id: 'a75d4c4e-324e-4e8f-853e-8fe1d17b1869',
              date: '2019-04-25',
              price: 2,
              currency: 'USD',
              productName: 'T-shirt'
            }
          ]
        },
        '2019-04-05': {
          id: '2019-04-05',
          purchases: [
            {
              id: 'c47001ba-3cea-4640-bb04-3f54f16d0a8d',
              date: '2019-04-05',
              price: 8,
              currency: 'EUR',
              productName: 'Beer'
            }
          ]
        }
      },
      allDates: ['2019-04-25', '2019-04-05'],
      errors: null,
      helpMessage: false,
      totalIncome: '236.98 UAH'
    })
  })

  it('should handle SHOW_HELP_MESSAGE action', () => {
    expect(souvenirStoreReducer(updatedState, {
      type: SHOW_HELP_MESSAGE
    })).toEqual(Object.assign({}, updatedState, { helpMessage: true }))
  })
})