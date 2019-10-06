import React from "react";
import { DropContainer, DropButton, DropContent, DropItem } from "./DropStyle";
interface Props {}

const Dropdown: React.FC<Props> = () => {
  return (
    <DropContainer>
      <DropButton>Types</DropButton>
      <DropContent>
        <DropItem>Buraksle</DropItem>
        <DropItem>Burak1</DropItem>
        <DropItem>Burak2</DropItem>
      </DropContent>
    </DropContainer>
  );
};

export default Dropdown;
