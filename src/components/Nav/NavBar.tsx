import React from "react";
import { Container, RightSide, Input, InputContainer } from "./NavBarStyle";
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
      <InputContainer>
        <Input />
      </InputContainer>
    </Container>
  );
};

export default NavBar;
