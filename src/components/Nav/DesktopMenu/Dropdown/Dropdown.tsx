import React from "react";
import { DropContainer, DropButton, DropContent, DropItem } from "./DropStyle";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  content: string[];
  url: string;
}

const Dropdown: React.FC<Props> = ({ title, content, url }) => {
  return (
    <DropContainer>
      <DropButton>{title}</DropButton>
      <DropContent>
        {content.length < 1 ? (
          <DropItem>&#9880; Loading...</DropItem>
        ) : (
          content.map((item, key) => (
            <DropItem key={key}>
              <Link to={`/shop`}>&#9880; {item.replace("_", " ")}</Link>
            </DropItem>
          ))
        )}
      </DropContent>
    </DropContainer>
  );
};

export default Dropdown;
