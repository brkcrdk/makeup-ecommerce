import React from "react";
import { DropContainer, DropButton, DropContent, DropItem } from "./DropStyle";

interface Props {
  title: string;
  content: string[];
}

const Dropdown: React.FC<Props> = ({ title, content }) => {
  return (
    <DropContainer>
      <DropButton>{title}</DropButton>
      <DropContent>
        {content.length < 1 ? (
          <DropItem>Loading...</DropItem>
        ) : (
          content.map((item, key) => (
            <DropItem key={key}>{item.replace("_", " ")}</DropItem>
          ))
        )}
      </DropContent>
    </DropContainer>
  );
};

export default Dropdown;
