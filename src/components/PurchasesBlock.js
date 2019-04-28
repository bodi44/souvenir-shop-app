import React from 'react'

const PurchasesBlock = ({ date, allPurchases }) => {
  return (
    <div>
      <h5>{date}</h5>
      {allPurchases.map(purchase =>
        <p key={purchase.id}>
          {purchase.productName} {purchase.price} {purchase.currency}
        </p>)
      }
    </div>
  )
}

export default PurchasesBlock