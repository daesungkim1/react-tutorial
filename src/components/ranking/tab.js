import React from 'react'

import RankingTabHeader from './tabHeader'
import RankingTabBody from './tabBody'

const RankingTab = (props) => {
  const element = props.isActive ?
    <RankingTabBody
      name={props.name}
      stories={props.stories} /> : null;

  return (
    <li className={props.isActive ? 'on' : null}>
      <RankingTabHeader
        nth={props.nth}
        name={props.name}

        /**
         * pass a reference of parent's handler
         */
        onTabChange={props.onTabChange} />
      {element}
    </li>
  )
}

export default RankingTab
