import React from "react";
import { MainText } from "./FirstStyle";

interface Props {}

const FirstSection: React.FC<Props> = () => {
  return (
    <MainText>
      <h4>Belezza Cosmetics</h4>
      <p>
        <span>Elegance</span> in every way
      </p>
      <p>
        Forever <span>Gorgeus</span>
      </p>
    </MainText>
  );
};

export default FirstSection;
