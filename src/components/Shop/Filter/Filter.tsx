import React, { useState } from "react";
import { Container, TagContainer } from "./FilterStyle";
import Slider from "../../UI/Slider/Slider";
import Tags from "./Tags";
import { getTags } from "../../getTypes";

interface Props {
  products: [];
  isLoading: boolean;
}

const Filter: React.FC<Props> = ({ products }) => {
  const [values, setValues] = useState({ min: 0, max: 100 });
  const tags = getTags(products);
  console.log(tags);
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
      <TagContainer>
        {tags.length < 1 ? (
          <p>No tags found for this product.</p>
        ) : (
          tags.map((tag, index) => <Tags key={index} />)
        )}
      </TagContainer>
    </Container>
  );
};

export default Filter;
