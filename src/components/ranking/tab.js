import React, { Component } from 'react'

import RankingTabHeader from './tabHeader'
import RankingTabBody from './tabBody'

export default class RankingTab extends Component {

  render() {
    const element = this.props.isActive ?
      <RankingTabBody /> : null;

    return (
      <li className={this.props.isActive ? 'on' : ''}>
        <RankingTabHeader
          nth={this.props.nth}
          name={this.props.name} />
        {element}
      </li>
    )
  }
}