import React, { useCallback } from "react";
import "./App.css";
import Products from "./Products";
import { useSelector, useDispatch } from "react-redux";
interface IProps {
  toggle: {
    isTrue: Boolean;
  };
  userName: {
    name: string;
  };
}
const App: React.FC = () => {
  const toggle = useSelector((state: IProps) => state.toggle.isTrue);
  const userName = useSelector((state: IProps) => state.userName.name);
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch({
      type: "TOGGLE_TEST"
    });
  }, []);
  const handleName = useCallback(() => {
    dispatch({ type: "CHANGE_NAME", payload: { name: "Payload Sended" } });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Name is => {userName}</p>
        <button onClick={handleName}>Change Name</button>
        <p>{toggle.toString().toUpperCase()}</p>
        <button onClick={handleToggle}>Click to toggle</button>
        <Products />
      </header>
    </div>
  );
};

export default App;
