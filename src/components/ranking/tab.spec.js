import React from 'react'
import { shallow } from 'enzyme'

import RankingTab from './tab'
import RankingTabHeader from './tabHeader'
import RankingTabBody from './tabBody'

describe('<RankingTab />', () => {
  it('should have RankingTabBody when tab is active', () => {
    
    // shallow test
    //   just check current component's node only
    const wrapper = shallow(
      <RankingTab
        isActive={true} />
    )

    // test if the value of li's class has on
    expect(wrapper.is('li.on')).toBeTruthy()
    expect(wrapper.find(RankingTabHeader)).toHaveLength(1)
    expect(wrapper.find(RankingTabBody)).toHaveLength(1)
  });

  it('should not have RankingTabBody when tab is inactive', () => {
    const wrapper = shallow(
      <RankingTab
        isActive={false} />
    )
    expect(wrapper.is('li.on')).toBeFalsy()
    expect(wrapper.find(RankingTabHeader)).toHaveLength(1)
    expect(wrapper.find(RankingTabBody)).toHaveLength(0)
  });
});