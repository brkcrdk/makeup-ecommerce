import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 9em;
`;

const Sticky: React.FC<Props> = ({ children }) => {
  const render = React.Children.map(children, (child, index) => child);
  return <Container>{render}</Container>;
};

export default Sticky;
