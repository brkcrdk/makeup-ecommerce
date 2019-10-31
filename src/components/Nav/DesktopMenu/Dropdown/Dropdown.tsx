import React, { useCallback } from "react";
import { DropContainer, DropButton, DropContent, DropItem } from "./DropStyle";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchFilter } from "../../../../store/searchFilter/action";
import { IFilter } from "../../../../store/searchFilter/types";
interface Props {
  title: string;
  content: string[];
  url: string;
  searchFilter?: {
    filters: IFilter;
  };
}

const Dropdown: React.FC<Props> = ({ title, content, url }) => {
  const dispatch = useDispatch();
  const handleFilter = useCallback(
    (filterSection: string, filter: string) => {
      dispatch(searchFilter({ [filterSection]: filter }));
    },
    [dispatch]
  );
  return (
    <DropContainer>
      <DropButton>{title}</DropButton>
      <DropContent>
        {content.length < 1 ? (
          <DropItem>&#9880; Loading...</DropItem>
        ) : (
          content.map((item, key) => (
            <DropItem key={key}>
              <Link
                to={"/shop"}
                onClick={() => {
                  handleFilter(url, item);
                }}>
                &#9880; {item.replace("_", " ")}
              </Link>
            </DropItem>
          ))
        )}
      </DropContent>
    </DropContainer>
  );
};

export default Dropdown;
