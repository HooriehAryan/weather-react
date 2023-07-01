import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Diego" />
        <footer>
          This is
          <a
            href="https://github.com/HooriehAryan/weather-react"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          > Open-Sourced code </a>
          by <a
            href="https://www.linkedin.com/in/Hoorieh/"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Hoorieh Aryan
          </a>
        </footer>
      </div>
    </div>
  );
}
