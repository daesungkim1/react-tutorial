import React, { Component } from 'react'
import RankingTabItems from './tabItems'

export default class RankingTabBody extends Component {
  render() {
    return (
      <div className="cont_aside">
        <strong className="screen_out">연예</strong>
        <ol className="list_ranking #right #popular_news #entertain_list">

          <RankingTabItems />

          <li><em className="num_news num2"><span >2</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122071000409?d=y" className="link_txt @2" >[TV와치]'도깨비' 김고은의 4번째 생이 끝난 후, 공유는 어떻게 됐을까</a></strong></li>
          <li><em className="num_news num3"><span >3</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122090233369?d=y" className="link_txt @3" >[단독][도깨비 20.5%] VOD 흥행기록 깼다..중국 없이도 흑자③</a></strong></li>
          <li><em className="num_news num4"><span >4</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122073029501?d=y" className="link_txt @4" >[★밤TV]'도깨비'공유♥김고은, 이동욱♥유인나, 찬란한 재회</a></strong></li>
          <li><em className="num_news num5"><span >5</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122083036996?d=y" className="link_txt @5" >'우리 갑순이' 김소은, 이보희 저격수 등극 '사이다 며느리'</a></strong></li>
          <li><em className="num_news num6"><span >6</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122101702259?d=y" className="link_txt @6" >'무도', 11년 전 '평균 이하'를 주창하던 그 초심을 보다</a></strong></li>
          <li><em className="num_news num7"><span >7</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122085105143?d=y" className="link_txt @7" >'사람' 김민정 부부, 원조 연상연하..10살 이겨낸 사랑꾼 ♥ [종합]</a></strong></li>
          <li><em className="num_news num8"><span >8</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122133109446?d=y" className="link_txt @8" >'연탄가스 흡입' 지시 논란, 사과만으로 끝낼 일인가</a></strong></li>
          <li><em className="num_news num9"><span >9</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122125154797?d=y" className="link_txt @9" >'비디오여행' 현빈 "유해진, 생각보다 약간 무서웠다"</a></strong></li>
          <li><em className="num_news num10"><span >10</span><span >위</span></em><strong className="tit_g"><a href="/v/20170122085111145?d=y" className="link_txt @10" >'사람이 좋다' 김민정♥신동일, 애틋한 이 부부가 사는 법 (종합)</a></strong></li>
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
