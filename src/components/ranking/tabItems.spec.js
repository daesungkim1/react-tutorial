import React from 'react'
import { shallow } from 'enzyme'

import RankingTabItems from './tabItems'

describe('<RankingTabItems />', () => {

  it('renders correctly', () => {
    const wrapper = shallow(
      <RankingTabItems
        nth={3}
        title={'Ranking tab items title mockup'} />
    )

    expect(wrapper.find('li strong a.@'+3).text())
      .toBe('Ranking tab items title mockup')
  });

});