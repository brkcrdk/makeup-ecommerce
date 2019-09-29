import React, { useCallback } from "react";
import "./App.css";
import Products from "./Products";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

interface IProps {
  storeToggle: {
    isTrue: Boolean;
  };
  storeName: {
    name: string;
  };
}
const App: React.FC = () => {
  const toggle = useSelector((state: IProps) => state.storeToggle.isTrue);
  const userName = useSelector((state: IProps) => state.storeName.name);
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch({
      type: "TOGGLE_TEST"
    });
  }, [dispatch]);
  const handleName = useCallback(() => {
    dispatch({ type: "CHANGE_NAME", payload: { name: "Payload Sended" } });
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <p>Name is => {userName}</p>
          <button onClick={handleName}>Change Name</button>
          <p>{toggle.toString().toUpperCase()}</p>
          <button onClick={handleToggle}>Click to toggle</button>
          <Route path="/products" component={Products} />
        </Router>
      </header>
    </div>
  );
};

export default App;
