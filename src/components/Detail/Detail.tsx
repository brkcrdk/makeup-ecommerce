import React from "react";

interface Props {
  location: {};
}

const Detail: React.FC<Props> = ({ location }) => {
  console.log(location);
  return <div>Details goes here..</div>;
};

export default Detail;
