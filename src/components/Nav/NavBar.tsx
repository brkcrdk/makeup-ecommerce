import React from "react";
import {
  Container,
  RightSide,
  Input,
  InputContainer,
  HamburgerContainer
} from "./NavBarStyle";
import Brand from "./Brand/Brand";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import Hamburger from "./MobileMenu/Hamburger";
import { useSelector } from "react-redux";

interface IToggle {
  storeToggle: {
    toggle: boolean;
  };
  storeSidebarToggle: {
    toggle: boolean;
  };
}

const NavBar: React.FC = () => {
  const searchToggle = useSelector(
    (state: IToggle) => state.storeToggle.toggle
  );
  const sidebarToggle = useSelector(
    (state: IToggle) => state.storeSidebarToggle.toggle
  );
  return (
    <Container>
      <HamburgerContainer sidebarToggle={sidebarToggle}>
        <Hamburger />
      </HamburgerContainer>
      <Brand />
      <RightSide>
        <Search />
        <Cart />
      </RightSide>
      <InputContainer searchToggle={searchToggle}>
        <Input />
      </InputContainer>
    </Container>
  );
};

export default NavBar;
