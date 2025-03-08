import React from "react";
import ThemeDisplay from "./components/ThemeDisplay";
import "./App.css";
import ThemeList from "./components/ThemeList";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1>Theme Creator</h1>
      </div>
      <ThemeList />
    </div>
  );
}

export default App;
