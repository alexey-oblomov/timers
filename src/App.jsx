import React from 'react';
import { Tabs } from 'antd';
import Timer from './components/Timer/Timer';
import Countdown from './components/Countdown/Countdown';
import Clock from './components/Clock/Clock';
import TechnicalTask from './components/TechnicalTask/TechnicalTask';
import './App.css';

function App() {
  const { TabPane } = Tabs;
  return (
    <div className="app-container">
      <header className="app-header">
        <span className="link-github"><a href="https://github.com/alexey-oblomov/timers" alt="Ссылка на GutHub">GitHub: https://github.com/alexey-oblomov/timers</a></span>
        <h1>Таймеры</h1>
      </header>
      <div className="main">
        <div className="technical-task">
          <TechnicalTask />
        </div>
          <div className="app">
            <Tabs type="card">
              <TabPane tab="Часы" key="1">
                <Clock />
              </TabPane>
              <TabPane tab="Секундомер" key="2">
                <Timer />
              </TabPane>
              <TabPane tab="Счетчик обратного времени" key="3">
                <Countdown />
              </TabPane>
            </Tabs>
          </div>
        </div>
    </div>
  );
}

export default App;
