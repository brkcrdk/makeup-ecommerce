import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar/Navbar";
import { fetchProducts } from "./store/fetchProducts/actions";
import { useDispatch } from "react-redux";
import SideMenu from "./components/Nav/MobileMenu/Menu";
import Main from "./components/Content/Main";
const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <SideMenu />
          <NavBar />
          <Route path="/products" />
          <Main />
        </Router>
      </header>
    </div>
  );
};

export default App;
