import React from "react";
import styled from "styled-components";
import fonts from "../../fonts";
interface Props {}
const TipContainer = styled.div`
  font-family: ${fonts.aBeeZee};
  margin: 0.5em;
`;
const TipImage = styled.img`
  width: 100%;
  height: 10em;
`;
const TipContent = styled.div`
  padding: 0.5em;
  word-wrap: break-word;
`;
const TipHeader = styled.h4`
  margin: 0;
`;
const TipText = styled.p`
  font-size: 0.9em;
  text-align: left;
  margin: 0;
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
    </TipContainer>
  );
};

export default Tip;
