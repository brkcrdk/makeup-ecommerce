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
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import Footer from "./Footer/Footer";
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
            <SecondSection />
          </Content>
        </MiddleSection>
        <Footer />
      </Dimmed>
    </Container>
  );
};

export default Main;
