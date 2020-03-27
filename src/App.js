import React from "react";
import { Button, Tabs } from "antd";
import Timer from "./components/Timer/Timer.js";
import Countdown from "./components/Countdown/Countdown";
import "./App.css";

function App() {
  const { TabPane } = Tabs;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Здесь будут таймеры!</h1>
      </header>
      <div className="App">
        <Tabs type="card">
          <TabPane tab="Таймер" key="1">
            <Timer />
            <div className="button">
              <Button type="primary">Будет какая-то кнопка</Button>
            </div>
          </TabPane>
          <TabPane tab="Счетчик обратного времени" key="2">
            <Countdown />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default App

console.log("test eslint, pretier> husky"