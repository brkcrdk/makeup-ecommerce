import React, { useState } from "react";
import { Container, TagContainer } from "./FilterStyle";
import Slider from "../../UI/Slider/Slider";
import Tags from "./Tags";

interface Props {
  products: [];
  isLoading: boolean;
}

const Filter: React.FC<Props> = ({ products }) => {
  const [values, setValues] = useState({ min: 0, max: 100 });

  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <Slider
        rangeMin={0}
        rangeMax={100}
        values={values}
        setValues={setValues}
      />
      <Tags products={products} />
    </Container>
  );
};

export default Filter;
