import React, { useState } from 'react'
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
import { getAllPurchasesByDate } from '../../reducers'

import RequestForm from '../../components/RequestForm'

import isValidDate from '../../helpers/isValidDate'

const FilterRequest = props => {
  const {
    allPurchases,
    currencies,
    purchase,
    showAllPurchases,
    clearPurchasesByDate,
    reportAboutPurchases,
    showErrorMessage,
    showHelpMessage
  } = props

  const [input, setInput] = useState('')
  const [buttonColor, setButtonColor] = useState(false)

  const checkPurchaseCommand = (date, price, currency, productName) => {
    if (!isValidDate(new Date(date)) || currencies[currency] === undefined) {
      showErrorMessage('Error: Invalid arguments given.')
      return
    }

    purchase(date, price, currency, productName)
  }

  const checkClearCommand = date => {
    if (!isValidDate(new Date(date))) {
      showErrorMessage('Error: Invalid arguments given.')
      return
    }

    clearPurchasesByDate(date)
  }

  const report = (year, currency) => {
    if (currencies[currency] === undefined || !isValidDate(new Date(year))) {
      showErrorMessage('Error: Invalid arguments given.')
      return
    }

    let totalIncome = 0
    const filteredData = allPurchases.filter(purchaseDate => purchaseDate.id.slice(0, 4) === year)

    filteredData.map(date => date.purchases.forEach(purchase => {
        purchase.currency !== currency ?
          totalIncome = totalIncome + purchase.price / currencies[purchase.currency] * currencies[currency]
          :
          totalIncome += purchase.price
      }
    ))

    reportAboutPurchases(`${Number((totalIncome).toFixed(2))} ${currency}`)
  }

  const methods = {
    'purchase': { callback: checkPurchaseCommand, argLength: 4 },
    'all': { callback: showAllPurchases, argLength: 0 },
    'clear': { callback: checkClearCommand, argLength: 1 },
    'report': { callback: report, argLength: 2 },
    'help': { callback: showHelpMessage, argLength: 0 }
  }

  const handleInputChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let args = input.split(' ')

    if (methods.hasOwnProperty(args[0])) {
      if (methods[args[0]].callback === checkPurchaseCommand && args.slice(1).filter(arg => arg !== '').length > 4) {
        const re = /(^"|"$)/
        let string = ''

        if (args.slice(1)[3].match(re)) {
          args.slice(4).forEach(arg => string += ` ${arg}`)
        }

        if (!string.match(re)) {
          showErrorMessage('Error: invalid number of arguments given')
          return
        }

        methods[args[0]].callback(...args.slice(1, 4), string)

      } else {
        methods[args[0]].argLength === args.slice(1).filter(arg => arg !== '').length ?
          methods[args[0]].callback(...args.slice(1)) :
          showErrorMessage('Error: invalid number of arguments given')
      }

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

FilterRequest.propTypes = {
  allPurchases: PropTypes.array,
  currencies: PropTypes.object,
  purchase: PropTypes.func,
  showAllPurchases: PropTypes.func,
  clearPurchasesByDate: PropTypes.func,
  reportAboutPurchases: PropTypes.func,
  showErrorMessage: PropTypes.func,
  showHelpMessage: PropTypes.func
}

export default connect(
  state => ({
    allPurchases: getAllPurchasesByDate(state)
  }),
  {
    purchase,
    showAllPurchases,
    clearPurchasesByDate,
    reportAboutPurchases,
    showErrorMessage,
    showHelpMessage
  }
)(FilterRequest)