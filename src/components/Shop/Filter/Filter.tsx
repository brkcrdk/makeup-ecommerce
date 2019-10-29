import React, { useState } from "react";
import { Container } from "./FilterStyle";
import Slider from "../../UI/Slider/Slider";
import { getColours, getTags } from "../../getTypes";

interface Props {
  products: [];
  isLoading: boolean;
}

const Filter: React.FC<Props> = ({ products }) => {
  const [values, setValues] = useState({ min: 0, max: 100 });

  // console.log(getColours(products));
  console.log(getTags(products));
  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <div>
        <Slider
          rangeMin={0}
          rangeMax={100}
          values={values}
          setValues={setValues}
        />
      </div>
    </Container>
  );
};

export default Filter;
