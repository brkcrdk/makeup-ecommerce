import React, { useState } from "react";
import { Container, ColourContainer } from "./FilterStyle";
import Slider from "../../UI/Slider/Slider";
import Colours from "./Colours";
import { getColours, getTags } from "../../getTypes";

interface Props {
  products: [];
  isLoading: boolean;
}

const Filter: React.FC<Props> = ({ products }) => {
  const [values, setValues] = useState({ min: 0, max: 100 });
  const colours = getColours(products);
  // console.log(getColours(products));
  // console.log(getTags(products));
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
      <ColourContainer>{}</ColourContainer>
    </Container>
  );
};

export default Filter;
