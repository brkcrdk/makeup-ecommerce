import React from "react";
import { MenuContainer } from "./DesktopStyle";
import Dropdown from "./Dropdown/Dropdown";
interface Props {}

const DesktopMenu: React.FC<Props> = () => {
  return (
    <MenuContainer>
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </MenuContainer>
  );
};

export default DesktopMenu;
