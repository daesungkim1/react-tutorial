import React, { Component } from 'react'

import RankingTabHeader from './tabHeader'
import RankingTabBody from './tabBody'

export default class RankingTab extends Component {

  render() {
    const element = this.props.isActive ?
      <RankingTabBody /> : null; // null will be ignored

    return (
      <li className={this.props.isActive ? 'on' : null}>
        <RankingTabHeader
          nth={this.props.nth}
          name={this.props.name}

          /**
           * pass a reference of parent's handler
           */
          onTabChange={this.props.onTabChange} />
        {element}
      </li>
    )
  }
}