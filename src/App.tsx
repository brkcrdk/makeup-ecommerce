import React, { useCallback } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import changeName from "./store/payload/action";
interface IProps {
  toggle: {
    isTrue: Boolean;
  };
  name: {
    userName: string;
  };
}
const App: React.FC = () => {
  const x = useSelector((state: IProps) => state.toggle.isTrue);
  const name = useSelector((state: IProps) => state.name.userName);
  const dispatch = useDispatch();
  const handleToggle = useCallback(() => {
    dispatch({
      type: "TOGGLE_TEST"
    });
    dispatch({
      type: "CHANGE_NAME",
      payload: "BURAKAPP"
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{x.toString().toUpperCase()}</p>
        <p>State name:{name}</p>
        <button onClick={handleToggle}>Click to toggle</button>
      </header>
    </div>
  );
};

export default App;
