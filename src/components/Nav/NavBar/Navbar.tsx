import React from "react";
import { Container, RightSide, HamburgerContainer } from "./NavbarStyle";
import Brand from "../Brand/Brand";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import Hamburger from "../MobileMenu/Hamburger";

const NavBar: React.FC = () => {
  return (
    <Container>
      <HamburgerContainer>
        <Hamburger />
      </HamburgerContainer>
      <Brand />
      <RightSide>
        <Cart />
      </RightSide>
    </Container>
  );
};

export default NavBar;
