import React from 'react'
import { shallow } from 'enzyme'

import RankingTabBody from './tabBody'
import RankingTabItems from './tabItems'

describe('<RankingTabBody />', () => {

  it('should have 2 RankingTabItems', () => {

    // mock data
    const stories = [
      {
        title: '안정환 "아내 이혜원 때문에 벌금 천만원 낸 적 있어"',
        type: '연예',
        rankByMostPopular: 7,
        visited: false
      },
      {
        title: '[공식입장] \'무도\' 측 "역주행 장면, 인지하지 못한 실수..깊이 반성중"',
        type: '연예',
        rankByMostPopular: 10,
        visited: false
      }
    ]

    const wrapper = shallow(
      <RankingTabBody
        name={'TestTab'}
        stories={stories} />
    )
    expect(wrapper.find('strong.screen_out').text()).toBe('TestTab')
    expect(wrapper.find(RankingTabItems)).toHaveLength(2)
  });

});