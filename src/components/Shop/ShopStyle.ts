import styled from "styled-components";
import background from "./p2.jpg";
export const Container = styled.div``;

export const Parallax = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding-top: 5em;
  height: 50vh;
`;
