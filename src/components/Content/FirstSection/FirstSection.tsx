import React from "react";
import { MainText } from "./FirstStyle";

interface Props {}

const FirstSection: React.FC<Props> = () => {
  return (
    <MainText>
      <h4>Belezza Cosmetics</h4>
      <p id="firstText">
        <span>Elegance</span> in every way
      </p>
      <p id="secondText">
        Forever <span>Gorgeus</span>
      </p>
      <div>
        <button>Go to Shopping!</button>
      </div>
    </MainText>
  );
};

export default FirstSection;
