import styled from "styled-components";
import fonts from "../../fonts";
import colours from "../../colours";
import device from "../../device";
export const MainText = styled.div`
  position: absolute;

  top: 15em;
  left: 5em;
  @media ${device.mobileS} {
    left: 1em;
  }
  @media ${device.mobileM} {
  }
  h4 {
    font-family: ${fonts.greatVibes};
    font-size: 1.5em;
    color: ${colours.primaryText};
    font-weight: 600;
    margin-left: 1em;
  }
  p {
    margin: 0;
    font-family: ${fonts.montserrat};
    color: ${colours.primaryText};
    font-weight: 900;
    span {
      color: ${colours.pink};
      word-spacing: 12em;
      font-size: 2em;
      font-family: ${fonts.greatVibes};
    }
  }

  div {
    margin-top: 2em;
    display: flex;
    justify-content: space-around;
    button {
      padding: 1.5em;
      border: 1px solid ${colours.pink};
      color: ${colours.pink};
      background-color: transparent;
      outline: none;
      font-family: ${fonts.montserrat};
      font-size: 1em;
      font-weight: 800;
      :hover {
        transform: scale(1.1, 1.1);
        transition: transform 0.5s;
      }
    }
  }

  #secondText {
    margin-left: 6em;
    span {
      /* Used filter to make text color a little darker */
      /* Equvalent to darken function used in SASS */
      filter: brightness(50%);
    }
  }
`;
