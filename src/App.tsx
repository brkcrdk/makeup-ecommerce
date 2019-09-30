import React from "react";
import Products from "./Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Route path="/products" component={Products} />
        </Router>
      </header>
    </div>
  );
};

export default App;
