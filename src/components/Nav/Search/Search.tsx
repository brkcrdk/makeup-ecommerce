import React, { useCallback } from "react";
import { Container, Icon, Button } from "./SearchStyle";
import { useDispatch } from "react-redux";

const Search: React.FC = () => {
  //Toggle search input display
  const dispatch = useDispatch();
  const handleToggle = useCallback(() => {
    dispatch({
      type: "TOGGLE_INPUT"
    });
  }, [dispatch]);
  return (
    <Container>
      <Button onClick={handleToggle}>
        <Icon src="https://img.icons8.com/carbon-copy/100/000000/search.png" />
      </Button>
    </Container>
  );
};

export default Search;
