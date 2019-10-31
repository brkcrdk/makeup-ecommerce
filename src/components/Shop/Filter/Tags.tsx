import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { fonts, colours } from "../../utils";
import { getTags } from "../../getTypes";
import { useDispatch } from "react-redux";
import { searchTags } from "../../../store/searchFilter/action";

const Tag = styled.div`
  margin: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${colours.pink};
  background: transparent;
  border-radius: 0.3em;
  padding: 0.5em;
  font-family: ${fonts.aBeeZee};
  text-transform: capitalize;
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
  const tags = getTags(products);
  const dispatch = useDispatch();
  const addTag = useCallback(
    (tag: string) => {
      dispatch(searchTags([tag]));
    },
    [dispatch]
  );

  if (tags.length < 1)
    return (
      <TagContainer>
        <p>No tags for this product.</p>
      </TagContainer>
    );
  return (
    <TagContainer>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          onClick={() => {
            addTag(tag);
          }}>
          <span>{tag}</span>
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
