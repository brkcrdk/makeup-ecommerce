import React from "react";
import { Container, Section, Content, Dimmed } from "./MainStyle";
import { useSelector } from "react-redux";
import Box from "../Nav/DesktopMenu/Search/SearchBox/Box";
import Carousel from "./Carousel/Carousel";
import FirstSection from "./FirstSection/FirstSection";
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
        <Section>
          <Content>
            <FirstSection />
          </Content>
        </Section>
        <Carousel />
      </Dimmed>
    </Container>
  );
};

export default Main;
