import React from "react";
import { useSelector } from "react-redux";
import Box from "../Nav/Search/SearchBox/Box";
interface Toggle {
  storeSidebarToggle: {
    sideToggle: boolean;
  };
}

const Main: React.FC = () => {
  const toggle = useSelector(
    (state: Toggle) => state.storeSidebarToggle.sideToggle
  );
  return (
    <div
      style={
        toggle
          ? { marginLeft: "10em", transition: "0.5s" }
          : { transition: "0.5s" }
      }>
      <Box />
      <p>Content</p>
    </div>
  );
};

export default Main;
