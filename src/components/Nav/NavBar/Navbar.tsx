import React from "react";
import { Container, RightSide, HamburgerContainer } from "./NavbarStyle";
import Brand from "../Brand/Brand";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import Hamburger from "../MobileMenu/Hamburger";
import { useSelector } from "react-redux";
interface IToggle {
  sidebarToggle: {
    sideToggle: boolean;
  };
}

const NavBar: React.FC = () => {
  const sidebarToggle = useSelector(
    (state: IToggle) => state.sidebarToggle.sideToggle
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
    </Container>
  );
};

export default NavBar;
