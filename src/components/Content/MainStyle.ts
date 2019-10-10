import styled from "styled-components";
import background from "./makeup.jpg";
import colours from "../colours";
export const Container = styled.div``;

export const MainSection = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  transition: 0.5s;
`;
export const MiddleSection = styled.div`
  /* TODO: Adjust margin left/right side for every device */
  overflow-x: hidden;
  margin: 1em 2em;
  background: white;
  border-radius: 0.5em;
  box-shadow: ${colours.boxShadow};
`;
export const FooterSection = styled.div``;
interface DimmedProps {
  toggle: boolean;
}

export const Dimmed = styled.div`
  filter: ${(p: DimmedProps) => (p.toggle ? "blur(2px)" : "")};
  height: 100vh;
`;
export const Content = styled.div`
  /* Center content from here*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
`;
