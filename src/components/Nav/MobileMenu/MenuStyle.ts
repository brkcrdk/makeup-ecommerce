import styled from "styled-components";
import colours from "../../colours";
interface Toggle {
  toggle: boolean;
}
export const Container = styled.div`
  height: 100vh;
  width: ${(p: Toggle) => (p.toggle ? "9em" : "0")};
  position: fixed;
  top: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  text-transform: capitalize;
  margin-top: 3.5em;
  background-color: ${colours.background};
  opacity: 0.8;
`;
