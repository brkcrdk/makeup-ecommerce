import styled from "styled-components";
import background from "./p11.jpg";
export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  margin: 1em;
`;

export const Parallax = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
`;
