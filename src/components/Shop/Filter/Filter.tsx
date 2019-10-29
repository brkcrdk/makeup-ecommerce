import React, { useState } from "react";
import { Container } from "./FilterStyle";
import Slider from "../../UI/Slider/Slider";
interface Props {}

const Filter: React.FC<Props> = () => {
  const [values, setValues] = useState({ min: 0, max: 100 });
  // const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
  // };

  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <div>
        <Slider
          rangeMin={0}
          rangeMax={200}
          values={values}
          setValues={setValues}
        />
      </div>
    </Container>
  );
};

export default Filter;
