import React, { useCallback } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
interface IProps {
  toggle: {
    isTrue: Boolean;
  };
}
const App: React.FC = () => {
  const x = useSelector((state: IProps) => state.toggle.isTrue);
  const dispatch = useDispatch();
  const handleToggle = useCallback(() => {
    dispatch({
      type: "TOGGLE_TEST"
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{x.toString().toUpperCase()}</p>
        <button onClick={handleToggle}>Click to toggle</button>
      </header>
    </div>
  );
};

export default App;
