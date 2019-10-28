import styled from "styled-components";
import { device, fonts, colours } from "../../utils";
export const Container = styled.div`
  width: 100%;
  font-family: ${fonts.raleway};
  transition: 0.3s;
  cursor: pointer;
  @media ${device.mobileL} {
    &:hover {
      box-shadow: ${colours.darkerBoxShadow};
    }
  }
  /* No margin on mobileS to make centered*/
  /* Margin on others to split them */
  @media ${device.mobileS} {
    margin: 0 auto;
  }
  @media ${device.mobileL} {
    margin: 0 0.5em;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 10em;
  padding-bottom: 0.5em;
`;
export const CardContent = styled.div`
  padding: 0.5em;
  margin-top: -1.5em;
  min-height: 8em;
  color: ${colours.primaryText};
  background-color: ${colours.backgroundDarker};
  .card-content {
    padding-top: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const Title = styled.h4`
  display: flex;
  justify-content: center;
  font-size: 0.9em;
`;
export const Name = styled.p`
  /* display: flex;
         justify-content: flex-start; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -1em;
  font-size: 0.8em;
  font-weight: 400;
`;
export const Price = styled.span`
  font-style: italic;
`;
export const Add = styled.button`
  background-color: transparent;
  padding: 0.5em;
  border: 1px solid ${colours.pink};
  outline: none;
  font-family: ${fonts.montserrat};
  font-weight: 700;
  transition: 0.5s;
  color: ${colours.pink};
  &:hover {
    color: ${colours.background};
    background-color: ${colours.pink};
  }
`;
