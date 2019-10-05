import React from "react";
import { MenuContainer, Menu } from "./DesktopStyle";
interface Props {}

const DesktopMenu: React.FC<Props> = () => {
  return (
    <MenuContainer>
      <Menu>Home</Menu>
      <Menu>Types</Menu>
      <Menu>Brands</Menu>
      <Menu>Categories</Menu>
    </MenuContainer>
  );
};

export default DesktopMenu;
