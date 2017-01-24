import React from 'react'
import { shallow } from 'enzyme'

import renderer from 'react-test-renderer';
import RankingTabHeader from './tabHeader'

describe('<RankingTabHeader />', () => {

  it('renders correctly', () => {

    const wrapper = shallow(
      <RankingTabHeader
        nth={3}
        name={'tab name here'}
        onTabChange={()=>true} />
    )

    // should have correct class value with text
    expect(wrapper.find('a.link_tab3').text())
      .toBe('tab name here')
  })

  it('render', () => {
    const tree = renderer.create(
      <RankingTabHeader
        nth={3}
        name={'tab name here'}
        onTabChange={()=>true} />
    ).toJSON()

    // manually execute onMouseOver to get a snapshot
    tree.props.onMouseOver(tree.props.name)
    expect(tree).toMatchSnapshot()
  })

});