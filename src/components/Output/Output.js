import React from 'react'

import PurchasesBlock from '../PurchasesBlock/PurchasesBlock'

import './Output.scss'
import BEM from '../../helpers/BEM'

const b = BEM('Output')

const Output = ({ allPurchases, error, totalIncome, helpMessage }) => {
  if (error) {
    return (
      <div className={b(['error'])}>
        <h3 className={b('title')}>Error:</h3>
        <p className={b('message')}>{error}<br/>To get instructions please type: <strong>help</strong></p>
      </div>
    )
  }

  if (totalIncome) {
    return (
      <div className={b()}>
        <h3 className={b('title')}>Output:</h3>
        <p className={b('message')}>{totalIncome}</p>
      </div>
    )
  }

  if (helpMessage) {
    return (
      <div className={b()}>
        <h3 className={b('title')}>Help:</h3>
        <div className={b('message')}>
          <p>
            <strong>purchase &lt;date&gt; &lt;price&gt; &lt;currency&gt; &lt;productName&gt;</strong> - add purchase to
            store.<br/>
            <i>
              Example: purchase 2019-04-25 12 USD Photo <br/>
              Output: <br/>
              2019-04-25 <br/>
              Photo 12 USD
            </i>
          </p>
          <p>
            <strong>all</strong> - show all purchases. <br/>
            <i>
              Example: all <br/>
              Output: <br/>
              2019-04-25 <br/>
              Photo 12 USD
            </i>
          </p>
          <p>
            <strong>clear &lt;date&gt;</strong> - removes all purchases for specified date. <br/>
            <i>
              Example: clear 2019-04-25 <br/>
              Output:
            </i>
          </p>
          <p>
            <strong>report &lt;year&gt; &lt;currency&gt;</strong> - calculate the total income for specified year,
            convert
            and present it in specified currency. <br/>
            <i>
              Example: report 2019 UAH <br/>
              Output: <br/>
              356.4 UAH
            </i>
          </p>
        </div>
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