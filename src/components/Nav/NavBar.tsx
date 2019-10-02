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
import Menu from "./MobileMenu/Menu";
import { useSelector } from "react-redux";

interface IToggle {
  storeToggle: {
    toggle: boolean;
  };
  storeSidebarToggle: {
    sideToggle: boolean;
  };
}

const NavBar: React.FC = () => {
  const searchToggle = useSelector(
    (state: IToggle) => state.storeToggle.toggle
  );
  const sidebarToggle = useSelector(
    (state: IToggle) => state.storeSidebarToggle.sideToggle
  );
  console.log(sidebarToggle);
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
        <Input placeholder="Search here.." />
      </InputContainer>
      <Menu />
    </Container>
  );
};

export default NavBar;
