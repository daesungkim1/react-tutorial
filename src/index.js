import React from 'react';
import ReactDOM from 'react-dom';
import Ranking from './components/ranking/';
import './index.css';

ReactDOM.render(
  <Ranking
    tabList={["뉴스", "스포츠", "연예"]}
    activeTab="연예"
  />,
  document.getElementById('root')
);
