import React from 'react';
import { Button, Tabs } from 'antd';
import './App.css';

function App() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Здесь будут таймеры!</h1>
      </header>
      <div className="App">
        <Tabs onChange={callback} type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
    </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
    </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
    </TabPane>
        </Tabs>
      </div>
      <div class="button">
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
}

export default App;