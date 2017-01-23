import React, { Component } from 'react'

export default class RankingTabHeader extends Component {
  render() {
    return (
      <a
        className={'link_tab link_tab' + this.props.nth}
        onMouseOver={(e)=> {
          /** it point to Ranking's onTabChange handler */
          this.props.onTabChange(this.props.name)
        }}
        href="#none">
        {this.props.name}
      </a>
    )
  }
}
