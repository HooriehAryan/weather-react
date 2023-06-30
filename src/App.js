import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1> Weather App </h1>
      <SearchEngine />
      <footer>
        this is an{" "}
        <a
          href="https://github.com/HooriehAryan/weather-react"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          Open-Sourced code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/Hoorieh/"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Hoorieh Aryan
        </a>
      </footer>
    </div>
  );
}

export default App;
