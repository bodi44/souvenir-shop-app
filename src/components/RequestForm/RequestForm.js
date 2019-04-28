import React, { useState } from 'react'
import { connect } from 'react-redux'

import {
  clearPurchasesByDate,
  purchase,
  reportAboutPurchases,
  showAllPurchases,
  showErrorMessage
} from '../../actions'

import './RequestForm.scss'
import BEM from '../../helpers/BEM'

const b = BEM('RequestForm')

const RequestForm = ({ purchase, showAllPurchases, showErrorMessage, clearPurchasesByDate, reportAboutPurchases, allPurchases, currencyData }) => {
  const [input, setInput] = useState('')

  const makePurchase = (date, price, currency, productName) => {
    purchase(date, price, currency, productName)
  }

  const all = () => {
    showAllPurchases()
  }

  const clear = (date) => {
    clearPurchasesByDate(date)
  }

  const report = (year, currency) => {
    let totalIncome = 0

    const filteredData = allPurchases.filter(purchaseDate => purchaseDate.id.slice(0, 4) === year)
    filteredData.map(date => date.purchases.map(purchase => {
        purchase.currency !== currency ?
          totalIncome = totalIncome + purchase.price / currencyData[purchase.currency] * currencyData[currency]
          :
          totalIncome += purchase.price
      }
    ))

    reportAboutPurchases(`${Number((totalIncome).toFixed(2))} ${currency}`)
  }

  const methods = {
    'purchase': makePurchase,
    'all': all,
    'clear': clear,
    'report': report
  }

  const handleInputChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let args = input.split(' ')

    if (methods.hasOwnProperty(args[0])) {
      if (methods[args[0]] === makePurchase && args.slice(1).length > 4) {
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

  return (
    <form action="" className={b()} onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name='query'
        placeholder="Type your query here..."
        className={b('input')}
        onChange={handleInputChange}
      />
      <button className={b('submit')} type='submit'>Click to Submit</button>
    </form>
  )
}

export default connect(
  null,
  {
    purchase,
    showAllPurchases,
    clearPurchasesByDate,
    reportAboutPurchases,
    showErrorMessage
  }
)(RequestForm)