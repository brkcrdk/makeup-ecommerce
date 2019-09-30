import React from "react";
import { Container, Icon, Button } from "./SearchStyle";
const Search: React.FC = () => {
  return (
    <Container>
      <Button>
        <Icon src="https://img.icons8.com/carbon-copy/100/000000/search.png" />
      </Button>
    </Container>
  );
};

export default Search;
