import React from "react";
import { Container, Content } from "./MainStyle";
import { useSelector } from "react-redux";
import Box from "../Nav/Search/SearchBox/Box";
interface Toggle {
  storeSidebarToggle: {
    sideToggle: boolean;
  };
}

const Main: React.FC = () => {
  const toggle = useSelector(
    (state: Toggle) => state.storeSidebarToggle.sideToggle
  );
  return (
    <Container toggle={toggle}>
      <Box />
      <Content>
        <p>Content</p>
      </Content>
    </Container>
  );
};

export default Main;
