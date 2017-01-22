import React, { Component } from 'react'

export default class RankingTabHeader extends Component {
  render() {
    return (
      <a
        className={'link_tab link_tab' + this.props.nth}
        href="#none">
        {this.props.name}
      </a>
    )
  }
}
