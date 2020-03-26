import React from 'react';
import { Button, Tabs } from 'antd';
import Timer from './components/Timer/Timer.js'
import Countdown from './components/Countdown/Countdown'
import './App.css';

function App() {
  const { TabPane } = Tabs;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Здесь будут таймеры!</h1>
      </header>
      <div className="App">
        <Tabs type="card">
          <TabPane tab="Tab 1" key="1">
            <Timer />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <Countdown />
          </TabPane>
        </Tabs>
      </div>
      <div className="button">
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
}

export default App;