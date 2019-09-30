import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Hamburger: React.FC = () => {
  const dispatch = useDispatch();
  const handleHamburger = useCallback(() => {
    dispatch({
      type: "TOGGLE_SIDEBAR"
    });
  }, [dispatch]);

  return (
    <div style={{ border: "none" }} onClick={handleHamburger}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default Hamburger;
