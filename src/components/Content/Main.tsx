import React from "react";
import { Container, Content, Dimmed } from "./MainStyle";
import { useSelector } from "react-redux";
import Box from "../Nav/Search/SearchBox/Box";
import Carousel from "./Carousel/Carousel";
interface Toggle {
  sidebarToggle: {
    sideToggle: boolean;
  };
}

const Main: React.FC = () => {
  const toggle = useSelector((state: Toggle) => state.sidebarToggle.sideToggle);
  return (
    <Container>
      <Dimmed toggle={toggle}>
        <Box />
        <Content></Content>
      </Dimmed>
    </Container>
  );
};

export default Main;
