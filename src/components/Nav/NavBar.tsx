import React from "react";
import {
  Container,
  RightSide,
  Input,
  InputContainer,
  Hamburger
} from "./NavBarStyle";
import Brand from "./Brand/Brand";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import { useSelector } from "react-redux";
interface IToggle {
  storeToggle: {
    toggle: boolean;
  };
}
const NavBar: React.FC = () => {
  const toggle = useSelector((state: IToggle) => state.storeToggle.toggle);
  console.log(toggle);
  return (
    <Container>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <Brand />
      <RightSide>
        <Search />
        <Cart />
      </RightSide>
      <InputContainer toggle={toggle}>
        <Input />
      </InputContainer>
    </Container>
  );
};

export default NavBar;
