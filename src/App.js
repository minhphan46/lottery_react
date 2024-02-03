import logo from "./logo.svg";
import "./App.css";
import web3 from "./web3";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const init = async () => {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
    };
    init();
  }
  , []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
