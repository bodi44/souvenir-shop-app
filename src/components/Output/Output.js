import React from 'react'

import PurchasesBlock from '../PurchasesBlock'

import './Output.scss'
import BEM from '../../helpers/BEM'

const b = BEM('Output')

const Output = ({ allPurchases, error, totalIncome }) => {
  if (error) {
    return (
      <div className={b(['error'])}>
        <h3 className={b('title')}>Output:</h3>
        {error}
      </div>
    )
  }

  if (totalIncome) {
    return (
      <div className={b()}>
        <h3 className={b('title')}>Output:</h3>
        {totalIncome}
      </div>
    )
  }

  return (
    <div className={b()}>
      <h3 className={b('title')}>Output:</h3>
      {allPurchases.map(purchaseDate => (
        <PurchasesBlock key={purchaseDate.id} date={purchaseDate.id} allPurchases={purchaseDate.purchases}/>
      ))}
    </div>
  )
}

export default Output