import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello every body</h1>
        <Weather city="Rasht" />
      </header>
    </div>
  );
}

export default App;
