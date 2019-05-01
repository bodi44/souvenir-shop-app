import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  clearPurchasesByDate,
  purchase,
  reportAboutPurchases,
  showAllPurchases,
  showErrorMessage,
  showHelpMessage
} from '../../actions/souvenirStore'
import { fetchCurrencies } from '../../actions/currencies'
import { getAllPurchasesByDate, getCurrencies } from '../../reducers'

import RequestForm from '../../components/RequestForm'

const FilterRequest = props => {
  const {
    fetchCurrencies,
    allPurchases,
    currencies,
    purchase,
    showAllPurchases,
    clearPurchasesByDate,
    reportAboutPurchases,
    showErrorMessage,
    showHelpMessage
  } = props

  const report = (year, currency) => {
    let totalIncome = 0

    const filteredData = allPurchases.filter(purchaseDate => purchaseDate.id.slice(0, 4) === year)
    filteredData.map(date => date.purchases.map(purchase => {
        purchase.currency !== currency ?
          totalIncome = totalIncome + purchase.price / currencies[purchase.currency] * currencies[currency]
          :
          totalIncome += purchase.price
      }
    ))

    reportAboutPurchases(`${Number((totalIncome).toFixed(2))} ${currency}`)
  }

  const methods = {
    'purchase': purchase,
    'all': showAllPurchases,
    'clear': clearPurchasesByDate,
    'report': report,
    'help': showHelpMessage
  }

  useEffect(() => {
    fetchCurrencies()
  }, [fetchCurrencies])

  const [input, setInput] = useState('')
  const [buttonColor, setButtonColor] = useState(false)

  const handleInputChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let args = input.split(' ')

    if (methods.hasOwnProperty(args[0])) {
      if (methods[args[0]] === purchase && args.slice(1).length > 4) {
        const re = /"*/
        let string = ''

        if (args.slice(1)[3].match(re)) {
          args.slice(4).forEach(arg => string += ` ${arg}`)
        }

        methods[args[0]](...args.slice(1, 4), string)

      } else methods[args[0]](...args.slice(1))
    } else {
      showErrorMessage('Error: No such command.')
    }
  }

  const handleButtonColorChange = () => {
    setButtonColor(!buttonColor)
  }

  const buttonStyle = buttonColor ? '#7f8fa6' : '#bdc3c7'

  return (
    <RequestForm
      buttonStyle={buttonStyle}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleButtonColorChange={handleButtonColorChange}
    />
  )
}

export default connect(
  state => ({
    currencies: getCurrencies(state),
    allPurchases: getAllPurchasesByDate(state)
  }),
  {
    fetchCurrencies,
    purchase,
    showAllPurchases,
    clearPurchasesByDate,
    reportAboutPurchases,
    showErrorMessage,
    showHelpMessage
  }
)(FilterRequest)