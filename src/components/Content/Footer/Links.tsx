import React from "react";
import styled from "styled-components";
import colours from "../../colours";
import fonts from "../../fonts";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
`;
const Link = styled.a`
  text-decoration: none;
  outline: none;
  color: ${colours.primaryText};
  font-family: ${fonts.montserrat};
  margin: 0.5em;
`;
interface Props {}

const Links: React.FC<Props> = () => {
  return (
    <Container>
      <Link href="#?">POLICY</Link>
      <Link href="#?">TERM & CONDITIONS</Link>
      <Link href="#?">HELP</Link>
    </Container>
  );
};

export default Links;
