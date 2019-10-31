import React, { useState } from "react";
import styled from "styled-components";
import { fonts, colours } from "../../utils";
import { getTags } from "../../getTypes";

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
const TagContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0.5em;
  p {
    font-family: ${fonts.aBeeZee};
  }
`;
interface Props {
  products: [];
}

const Tags: React.FC<Props> = ({ products }) => {
  const [toggle, setToggle] = useState(false);
  const tags = getTags(products);
  if (tags.length < 1)
    return (
      <TagContainer>
        <p>No tags for this product.</p>
      </TagContainer>
    );
  return (
    <TagContainer>
      <Tag
        toggle={toggle}
        onClick={() => {
          setToggle(!toggle);
        }}>
        <span>Badge</span>
      </Tag>
    </TagContainer>
  );
};

export default Tags;
