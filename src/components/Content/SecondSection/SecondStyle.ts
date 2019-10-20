import styled from "styled-components";
import img1 from "./p1.jpg";
import img2 from "./p2.jpg";
import img3 from "./p3.jpg";

export const Container = styled.div`
  margin: 0 2em;
  width: 90%;
`;
export const BrandSection = styled.div`
  margin-bottom: 3em;
  margin-top: 1em;
  img {
    opacity: 0.5;
    transition: transform 0.5s;
    &:hover {
      opacity: 1;
      transform: scale(1.07);
    }
  }
`;
export const WantedSection = styled.div``;
export const Parallax = styled.div`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10em;
  margin: 2em 0;
`;
