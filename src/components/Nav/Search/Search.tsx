import React from "react";
import { Container, Icon } from "./SearchStyle";
import searchIcon from "./searchIcon.png";
const Search: React.FC = () => {
  return (
    <Container>
      <Icon className="fas fa-search"></Icon>
    </Container>
  );
};

export default Search;
