import React from 'react'

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


export default PurchasesBlock