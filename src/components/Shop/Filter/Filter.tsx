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
  console.log(colours);
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
      <ColourContainer>
        {colours.map((colour, index) =>
          colour.map((colour, index) => (
            <Colours
              hexValue={colour.hex_value}
              colourName={colour.colour_name}
            />
          ))
        )}
      </ColourContainer>
    </Container>
  );
};

export default Filter;
