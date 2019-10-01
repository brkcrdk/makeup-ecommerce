import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const Hamburger: React.FC = () => {
  const dispatch = useDispatch();
  const handleHamburger = useCallback(() => {
    dispatch({
      type: "TOGGLE_SIDEBAR"
    });
  }, [dispatch]);

  return (
    <div style={{ border: "none" }} onClick={handleHamburger}>
      <div id="ham1" />
      <div id="ham2" />
      <div id="ham3" />
    </div>
  );
};

export default Hamburger;
