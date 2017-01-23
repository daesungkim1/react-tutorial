import React, { Component } from 'react'

import RankingTab from './tab'
import './style.css'

export default class Ranking extends Component {

  constructor(props) {
    super(props)

    // binding method
    // in ES6 you need to bind method on 'this'
    this.onTabChange = this.onTabChange.bind(this);

    // initial state lives here
    this.state = {
      activeTab : this.props.activeTab
    }
  }

  onTabChange(activeTab) {
    // if this happens, react render component and
    // sub-component again which are related.
    this.setState({activeTab})
  }

  render() {
    // read active tab from state
    // if state changes, react will render it again.
    const activeTab = this.state.activeTab
    
    return (
      <div className="aside_g aside_popular">
        <h3 className="tit_news">많이본 뉴스</h3>
        <ul className="tab_aside tab_media">
          {
            /**
             * Ranking Tabs
             *  check props, especially we can pass a reference of onTabChange
             *  method as a one of props
             */
            this.props.tabList.map((item, idx) =>
              <RankingTab
                key={idx}
                name={item}
                nth={(idx+1)}
                isActive={item === activeTab}
                onTabChange={this.onTabChange} />
          )}
        </ul>
      </div>
    )
  }
}