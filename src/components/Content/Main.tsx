import React from "react";
import { useSelector } from "react-redux";
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
    <div>
      <p
        style={
          toggle
            ? { marginLeft: "10em", transition: "0.5s" }
            : { transition: "0.5s" }
        }>
        Content
      </p>
    </div>
  );
};

export default Main;
