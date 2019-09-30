import React from "react";
import { Container, RightSide, Input } from "./NavBarStyle";
import Brand from "./Brand/Brand";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
const NavBar: React.FC = () => {
  return (
    <Container>
      <p>Hamburger</p>
      <Brand />
      <RightSide>
        <Search />
        <Cart />
      </RightSide>
      <Input />
    </Container>
  );
};

export default NavBar;
