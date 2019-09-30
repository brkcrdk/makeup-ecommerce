import React from "react";
import { Container } from "./NavBarStyle";
import Brand from "./Brand/Brand";
import Search from "./Search/Search";
const NavBar: React.FC = () => {
  return (
    <Container>
      <p>Hamburger</p>
      <Brand />
      <div>
        <Search />
        <p>Shopping Cart</p>
      </div>
    </Container>
  );
};

export default NavBar;
