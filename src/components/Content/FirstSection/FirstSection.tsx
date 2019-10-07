import React from "react";
import image from "../makeup.jpg";
import { MainText } from "./FirstStyle";

interface Props {}

const FirstSection: React.FC<Props> = () => {
  return (
    <MainText>
      <h4>Belezza Cosmetics</h4>
      <p id="firstText">
        <span>Elegance</span> in every way.
      </p>
      <p id="secondText">
        Forever <span>Gorgeus</span>
      </p>
      <div>
        <button>Go Shopping!</button>
      </div>
    </MainText>
  );
};

export default FirstSection;
