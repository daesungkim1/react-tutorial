import React from 'react'

const RankingTabHeader = (props) => (
  <a
    className={'link_tab link_tab' + props.nth}
    onMouseOver={(e)=> {
      /** it points to the Ranking's onTabChange handler */
      props.onTabChange(props.name)
    }}
    href="#none">
    {props.name}
  </a>
)

export default RankingTabHeader
