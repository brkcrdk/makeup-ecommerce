import React, { useState } from "react";
import styled from "styled-components";
import { fonts, colours } from "../../utils";
interface TagProps {
  toggle: boolean;
}
const Tag = styled.div`
  margin: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${(p: TagProps) => (p.toggle ? `green` : "black")};
  background: transparent;
  border-radius: 0.3em;
  padding: 0.5em;
  font-family: ${fonts.aBeeZee};
  color: ${colours.primaryText};
  cursor: pointer;
`;

interface Props {}

const Tags: React.FC<Props> = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Tag
      toggle={toggle}
      onClick={() => {
        setToggle(!toggle);
      }}>
      <span>Badge</span>
    </Tag>
  );
};

export default Tags;
