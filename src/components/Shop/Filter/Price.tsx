import React, { useState, useEffect } from "react";
import Slider from "../../UI/Slider/Slider";
interface Props {}

const Price: React.FC<Props> = () => {
  const [values, setValues] = useState({ min: 0, max: 100 });
  console.log(values.min);
  return (
    <div>
      <Slider
        rangeMin={0}
        rangeMax={100}
        values={values}
        setValues={setValues}
      />
    </div>
  );
};

export default Price;
