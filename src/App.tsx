import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import { fetchProducts } from "./store/fetchProducts/actions";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "./components/Nav/MobileMenu/Menu";
interface Toggle {
  storeSidebarToggle: {
    sideToggle: boolean;
  };
}
const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const toggle = useSelector(
    (state: Toggle) => state.storeSidebarToggle.sideToggle
  );
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <SideMenu />
          <NavBar />
          <Route path="/products" />
          {/* TODO: when list open move the page 10em right with transition*/}
          <p
            style={
              toggle
                ? { marginLeft: "10em", transition: "0.5s" }
                : { transition: "0.5s" }
            }>
            Content
          </p>
        </Router>
      </header>
    </div>
  );
};

export default App;
