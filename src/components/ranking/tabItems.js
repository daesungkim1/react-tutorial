import React from 'react'

const RankingTabItems = (props) => {
  const nth = props.nth
  return (
    <li>
      <em className={'num_news num' + nth}><span >{nth}</span><span >위</span></em>
      <strong className="tit_g"><a href="/v/20170122111500208?d=y" className={'link_txt @' + nth} >{props.title}</a></strong>
    </li>
  )
}
export default RankingTabItems
