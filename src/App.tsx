import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav/NavBar/Navbar";
import { fetchProducts } from "./store/fetchProducts/actions";
import { useDispatch } from "react-redux";
import SideMenu from "./components/Nav/MobileMenu/Menu";
import Main from "./components/Content/Main";
import Shop from "./components/Shop/Shop";
import Box from "./components/Nav/DesktopMenu/Search/SearchBox/Box";
interface Products {
  storeProducts: {
    isLoading: boolean;
  };
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //TODO:
  // const loading = useSelector(
  //   (state: Products) => state.storeProducts.isLoading
  // );
  //Data fetching is slow because of the api
  //while data fetching return loading spinner
  //But while designing i could turn this of
  // if (loading) return <p>Loading...</p>;
  return (
    <div className="App">
      <Router>
        <SideMenu />
        <Box />
        <NavBar />
        <Route path="/" exact component={Main} />
        <Route path="/shop" component={Shop} />
        <Route path="/shop:id" component={Shop} />
      </Router>
    </div>
  );
};

export default App;
