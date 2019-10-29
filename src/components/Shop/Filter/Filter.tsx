import React, { useState } from "react";
import { Container } from "./FilterStyle";
import Slider from "../../UI/Slider/Slider";
interface Props {}

const Filter: React.FC<Props> = () => {
  const [values, setValues] = useState({ min: 0, max: 100 });
  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ e });
  };

  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <div>
        <Slider
          rangeMin={0}
          rangeMax={200}
          values={values}
          handleChange={handleMin}
        />
        <Slider
          rangeMin={0}
          rangeMax={100}
          values={values}
          handleChange={handleMin}
        />
      </div>
    </Container>
  );
};

export default Filter;
