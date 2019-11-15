import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
interface Props {}
const btnStyle = {
  backgroundColor: "transparent",
  border: "none",
  outline: "none"
};
const Increment: React.FC<Props> = () => {
  return (
    <button style={btnStyle}>
      <i className="fas fa-plus" />
    </button>
  );
};

export default Increment;
