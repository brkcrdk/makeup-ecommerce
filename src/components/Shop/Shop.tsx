import React from "react";

interface RouterProps {}

const Shop: React.FC<RouterProps> = (match) => {
  console.log(match);
  return <div>Shop page..</div>;
};

export default Shop;
