import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'

import renderer from 'react-test-renderer';
import Ranking from './';


// check Tree Snapshot test
// http://facebook.github.io/jest/blog/2016/07/27/jest-14.html
it('renders 연예',() => {
  const component = renderer.create(
    <Ranking
      tabList={["뉴스", "스포츠", "연예"]}
      activeTab="연예" />
  )

  // takes snapshot of the rendered component to detect changes
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
