import React, { useCallback } from "react";
import { DropContainer, DropButton, DropContent, DropItem } from "./DropStyle";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../../../store/searchFilter/action";
import { IFilter } from "../../../../store/searchFilter/types";
interface Props {
  title: string;
  content: string[];
  url: string;
  searchFilter: {
    filters: IFilter;
  };
}

const Dropdown: React.FC<Props> = ({ title, content, url }) => {
  const dispatch = useDispatch();
  const handleFilter = useCallback(() => {}, [dispatch]);
  return (
    <DropContainer>
      <DropButton>{title}</DropButton>
      <DropContent>
        {content.length < 1 ? (
          <DropItem>&#9880; Loading...</DropItem>
        ) : (
          content.map((item, key) => (
            <DropItem key={key}>
              <a>&#9880; {item.replace("_", " ")}</a>
            </DropItem>
          ))
        )}
      </DropContent>
    </DropContainer>
  );
};

export default Dropdown;
