import React, { Component } from 'react'
import RankingTabItems from './tabItems'

export default class RankingTabBody extends Component {
  render() {
    return (
      <div className="cont_aside">
        <strong className="screen_out">{this.props.name}</strong>
        <ol className="list_ranking #right #popular_news #entertain_list">
          {this.props.stories
            .map((obj,idx) =>
              <RankingTabItems
                {...obj}
                key={idx}
                nth={idx} />)}
        </ol>
        <div className="util_aside">
          <button className="btn_slide btn_prev"><span className="ico_news" >이전</span></button>
          <button className="btn_slide btn_next"><span className="ico_news" >다음</span></button>
          <a href="http://media.daum.net/ranking/popular?include=entertain" className="link_all">
            <span className="txt_news" >전체랭킹</span><span className="ico_news" ></span>
          </a>
        </div>
      </div>
    )
  }
}
