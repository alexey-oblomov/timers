import React from 'react';
import { Tabs } from 'antd';
import Timer from './components/Timer/Timer';
import Countdown from './components/Countdown/Countdown';
import Clock from './components/Clock/Clock';
import './App.css';

function App() {
  const { TabPane } = Tabs;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Таймеры</h1>
      </header>
      <div className="app">
        <Tabs type="card">
          <TabPane tab="Часы" key="1">
            <Clock />
          </TabPane>
          <TabPane tab="Таймер" key="2">
            <Timer />
          </TabPane>
          <TabPane tab="Счетчик обратного времени" key="3">
            <Countdown />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
