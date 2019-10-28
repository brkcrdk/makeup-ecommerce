import React, { useState } from "react";
import { Container } from "./FilterStyle";
import Slider from "../../UI/Slider/Slider";
interface Props {}

const Filter: React.FC<Props> = () => {
  // const [min, setMin] = useState(0);
  // const [max, setMax] = useState(100);
  // const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseFloat(e.target.value);
  //   if (e.target.id === "input1" && value < max) setMin(value);
  // };

  // const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseFloat(e.target.value);
  //   if (e.target.id === "input2" && value > min) setMax(value);
  // };

  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <div>
        <Slider minValue={0} maxValue={200} />
        <Slider minValue={0} maxValue={100} />
      </div>
    </Container>
  );
};

export default Filter;
