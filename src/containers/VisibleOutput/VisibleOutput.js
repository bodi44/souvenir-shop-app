import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  getAllPurchasesByDate,
  getTotalIncome,
  isStoreHasErrorMessage,
  showHelpMessage
} from '../../reducers'
import Output from '../../components/Output/'
import HelpMessage from '../../components/HelpMessage/HelpMessage'

const VisibleOutput = ({ allPurchases, totalIncome, storeErrorMessage, helpMessage }) => {
  if (storeErrorMessage) {
    return (
      <Output title={'Error:'} error={'error'}>
        {storeErrorMessage} <br/> To get instructions please type: <strong>help</strong>
      </Output>
    )
  }

  if (totalIncome) {
    return (
      <Output title={'Output:'} output={totalIncome}/>
    )
  }

  if (helpMessage) {
    return (
      <Output title={'Help:'}>
        <HelpMessage/>
      </Output>
    )
  }

  return (
    <Output title={'Output:'} allPurchases={allPurchases}/>
  )
}

Output.propTypes = {
  allPurchases: PropTypes.array.isRequired,
  totalIncome: PropTypes.string,
  storeErrorMessage: PropTypes.string,
  helpMessage: PropTypes.bool
}

export default connect(
  state => ({
    allPurchases: getAllPurchasesByDate(state),
    totalIncome: getTotalIncome(state),
    storeErrorMessage: isStoreHasErrorMessage(state),
    helpMessage: showHelpMessage(state)
  }),
  null
)(VisibleOutput)
