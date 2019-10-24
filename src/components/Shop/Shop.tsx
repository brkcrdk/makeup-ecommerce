import React from "react";

interface RouterProps {}

const Shop: React.FC<RouterProps> = (match) => {
  console.log(match);
  return (
    <div style={{ paddingTop: "5em" }}>
      <div style={{ border: "1px solid red" }}>Shop page..</div>
    </div>
  );
};

export default Shop;
