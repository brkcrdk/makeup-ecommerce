import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
interface IProps {
  toggle: {
    isTrue: Boolean;
  };
}
const App: React.FC = () => {
  const x = useSelector((state: IProps) => state.toggle.isTrue);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
