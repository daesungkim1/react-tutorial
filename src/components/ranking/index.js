import React, { Component } from 'react'

import RankingTab from './tab'
import state from '../../state'
import './style.css'

export default class Ranking extends Component {

  constructor(props) {
    super(props)

    // binding method
    // in ES6 you need to bind method on 'this'
    this.onTabChange = this.onTabChange.bind(this)

    // getStories doesn't required to bind 'this'
  }

  // lifecycle methods
  //   this is called just before the render() method
  //   good place to set initial state
  componentWillMount() {
    this.setState((prevState, props) => ({
      activeTab: props.activeTab,
      stories: this.getStories(props.activeTab, 'rankByMostPopular')
    }))
  }

  getStories(type, by) {
    let cnt = 0;

    // filter and sorting stories array
    // pagination is required later
    return state.stories
    .filter((obj) => obj.type === type && obj.visited !== true && cnt++ < 10)
    .sort((a,b) => a[by] < b[by] ? -1 : a[by] > b[by] ? 1 : 0)
  }

  onTabChange(activeTab) {
    this.setState((prevState, props) => ({
      activeTab: activeTab,
      stories: this.getStories(activeTab, 'rankByMostPopular')
    }))
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
                onTabChange={this.onTabChange}
                stories={this.state.stories} />
          )}
        </ul>
      </div>
    )
  }
}