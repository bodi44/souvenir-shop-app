import React from 'react'
import PropTypes from 'prop-types'

import PurchasesBlock from '../PurchasesBlock'

import './Output.scss'
import BEM from '../../helpers/BEM'

const b = BEM('Output')

const Output = (props) => {
  const { title, output, allPurchases, error } = props

  if (allPurchases) {
    return (
      <div className={b()}>
        <h3 className={b('title')}>{title}</h3>
        {allPurchases.map(purchaseDate => (
          <PurchasesBlock key={purchaseDate.id} date={purchaseDate.id} allPurchases={purchaseDate.purchases}/>
        ))}
      </div>
    )
  }

  return (
    <div className={error ? b({ error }) : b()}>
      <h3 className={b('title')}>{title}</h3>
      <div className={b('message')}>{output ? output : props.children}</div>
    </div>
  )
}

Output.propTypes = {
  allPurchases: PropTypes.array,
  title: PropTypes.string,
  error: PropTypes.string,
  output: PropTypes.bool
}

export default Output