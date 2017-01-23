import React, { Component } from 'react'

export default class RankingTabItems extends Component {
  render() {
    const nth = this.props.nth
    return (
      <li>
        <em className={'num_news num' + nth}><span >{nth}</span><span >위</span></em>
        <strong className="tit_g"><a href="/v/20170122111500208?d=y" className={'link_txt @' + nth} >{this.props.title}</a></strong>
      </li>
    )
  }
}
