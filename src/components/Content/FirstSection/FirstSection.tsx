import React from "react";
import { MainText } from "./FirstStyle";
import { Link } from "react-router-dom";
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
        <Link to={`/shop`}>Go Shopping!</Link>
      </div>
    </MainText>
  );
};

export default FirstSection;
