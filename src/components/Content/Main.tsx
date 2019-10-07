import React from "react";
import {
  Container,
  MainSection,
  Content,
  Dimmed,
  MiddleSection
} from "./MainStyle";
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
        <MainSection>
          <Content>
            <FirstSection />
          </Content>
        </MainSection>
        <MiddleSection>
          <Content>
            <Carousel />
          </Content>
        </MiddleSection>
      </Dimmed>
    </Container>
  );
};

export default Main;
