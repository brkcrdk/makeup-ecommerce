import React from "react";
import styled from "styled-components";
import fonts from "../../fonts";
import colours from "../../colours";
import device from "../../device";
interface Props {}
const TipContainer = styled.div`
  font-family: ${fonts.aBeeZee};
  margin: 0.5em;
  @media ${device.mobileTablet} {
    margin: 0.5em 0;
  }
`;
const TipImage = styled.img`
  width: 100%;
  @media ${device.mobileS} {
    height: 10em;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
  @media ${device.laptopL} {
    width: 80%;
  }
  @media ${device.desktop} {
    width: 70%;
  }
  @media ${device.desktop} {
    height: 15em;
  }
`;
const TipContent = styled.div`
  padding: 0.5em;
  word-wrap: break-word;
`;
const TipHeader = styled.h4`
  margin: 0;
  @media ${device.desktop} {
    font-size: 2em;
  }
`;
const TipText = styled.p`
  font-size: 0.9em;
  text-align: left;
  margin: 0;
  @media ${device.desktop} {
    font-size: 1.7em;
  }
`;
const TipButton = styled.button`
  background: transparent;
  border: 1px solid ${colours.pink};
  font-family: ${fonts.aBeeZee};
  color: ${colours.primaryText};
  padding: 0.5em;
  outline: none;
  &:hover {
    background-color: ${colours.pink};
  }
  @media ${device.desktop} {
    font-size: 1.7em;
  }
`;

const Tip: React.FC<Props> = () => {
  return (
    <TipContainer>
      <TipImage src="https://picsum.photos/200/300" alt="tip-images" />
      <TipContent>
        <TipHeader>Title</TipHeader>
        <TipText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          nisi!
        </TipText>
      </TipContent>
      <TipButton>Read More..</TipButton>
    </TipContainer>
  );
};

export default Tip;
