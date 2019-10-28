import React, { useState } from "react";
import { Container } from "./FilterStyle";
interface Props {}

const Filter: React.FC<Props> = () => {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const slider = React.createElement("input", { type: "range" });
  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <form>
        <div style={{ display: "flex" }}>
          <input type="text" data-index="0" value={max} />
          <input type="text" data-index="1" value={min} />
        </div>
        <br />
        <div id="slider">{slider}</div>
      </form>
    </Container>
  );
};

export default Filter;
