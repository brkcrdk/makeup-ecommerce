import React from "react";
import { InputContainer, Input } from "./BoxStyle";

import { useSelector } from "react-redux";
interface Toggle {
  storeToggle: {
    toggle: boolean;
  };
}

const Box: React.FC = () => {
  const searchToggle = useSelector((state: Toggle) => state.storeToggle.toggle);
  return (
    <InputContainer searchToggle={searchToggle}>
      <Input placeholder="Search here.." />
    </InputContainer>
  );
};

export default Box;
