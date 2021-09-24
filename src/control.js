import React from 'react'
import { StickyNav } from './index'

export const Conrol = ({ length, children , nav , nav__scroll }) => {
  return (
    <div>
      <StickyNav text={(length, children, nav , nav__scroll)} />
    </div>
  )
}
