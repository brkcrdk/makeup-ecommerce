import React, { useCallback } from "react";
import { Container, Icon, Button } from "./SearchStyle";
import { useDispatch } from "react-redux";
import icon from "./searchIcon.svg";
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
        <Icon src={icon} />
      </Button>
    </Container>
  );
};

export default Search;
