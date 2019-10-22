import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Link = styled.a`
  margin: 0 1em;
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
