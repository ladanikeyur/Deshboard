import logo from "./logo.svg";
import "./App.css";
import { DashboardPage } from "./Screen";
import { BgLayout, SideBar } from "./Component";
import { useState } from "react";

function App() {
  const [Side, setSide] = useState(false);
  return (
    <div className="main-bg">
      <div className="grid-bg">
        <div className="border-bg">
          <BgLayout
            onClick={() => {
              setSide(!Side);
            }}
          />
          <div className="main-body">
            <div className="sidebar">
              <SideBar Side={Side} />
            </div>
            <DashboardPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
