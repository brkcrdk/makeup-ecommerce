import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import { fetchProducts } from "./store/fetchProducts/actions";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Route path="/products" />
        </Router>
      </header>
    </div>
  );
};

export default App;
