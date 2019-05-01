import React from 'react'

import FilterRequest from '../../containers/FilterRequest'
import VisibleOutput from '../../containers/VisibleOutput'

import './SouvenirStoreApp.scss'
import BEM from '../../helpers/BEM'

const b = BEM('SouvenirStoreApp')

// if (isLoading) return <div className={b('data-error')}>Data is Loading...</div>

// if (hasError) return <div className={b('data-error')}>Error occurred while fetching API</div>

const SouvenirStoreApp = () => (
  <div className={b()}>
    <h1 className={b('title')}>Souvenir-store App</h1>
    <FilterRequest/>
    <VisibleOutput/>
  </div>
)

export default SouvenirStoreApp