import React from "react";

interface Props {
  url: string;
}

const Image: React.FC<Props> = ({ url }) => {
  return <img src={url} alt={`cart-${url}`} />;
};

export default Image;
