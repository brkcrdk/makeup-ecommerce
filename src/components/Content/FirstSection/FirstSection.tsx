import React from "react";
import { MainText } from "./FirstStyle";

interface Props {}

const FirstSection: React.FC<Props> = () => {
  return (
    <MainText>
      <h4>Belezza Cosmetics</h4>
      <p>Elegance in every way</p>
    </MainText>
  );
};

export default FirstSection;
