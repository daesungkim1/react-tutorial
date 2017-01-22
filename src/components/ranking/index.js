import React, { Component } from 'react'

import RankingTab from './tab'
import './style.css'

export default class Ranking extends Component {

  render() {
    const activeTab = this.props.activeTab
    
    return (
      <div className="aside_g aside_popular">
        <h3 className="tit_news">많이본 뉴스</h3>
        <ul className="tab_aside tab_media">
          {
            this.props.tabList.map((item, idx) =>
              <RankingTab
                key={idx}
                name={item}
                nth={(idx+1)}
                isActive={item === activeTab} />
          )}
        </ul>
      </div>
    )
  }
}