import React from 'react'
import RankingTabItems from './tabItems'

const RankingTabBody = (props) => (
  <div className="cont_aside">
    <strong className="screen_out">{props.name}</strong>
    <ol className="list_ranking #right #popular_news #entertain_list">
      {props.stories
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

export default RankingTabBody