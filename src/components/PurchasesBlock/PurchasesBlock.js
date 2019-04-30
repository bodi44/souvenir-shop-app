import React from 'react'
import PropTypes from 'prop-types'

import './PurchasesBlock.scss'
import BEM from '../../helpers/BEM'

const b = BEM('PurchasesBlock')

const PurchasesBlock = ({ date, allPurchases }) => (
  <div className={b()}>
    <h5 className={b('date')}>{date}</h5>
    {allPurchases.map(purchase =>
      <p key={purchase.id} className={b('purchase')}>
        {purchase.productName} {purchase.price} {purchase.currency}
      </p>)
    }
  </div>
)

PurchasesBlock.propTypes = {
  date: PropTypes.string.isRequired,
  allPurchases: PropTypes.array.isRequired
}


export default PurchasesBlock