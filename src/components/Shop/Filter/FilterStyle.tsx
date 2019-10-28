import styled from "styled-components";
import { colours } from "../../utils";
export const Container = styled.div`
  /* box-shadow: ${colours.boxShadow}; */
  text-align:center;
  div{
    border:1px solid red;
  }
  input[type=range] {
   box-sizing: border-box;
   appearance: none;
   width: 400px;
   margin: 0;
   padding: 0 2px;
   /* Add some L/R padding to ensure box shadow of handle is shown */
   overflow: hidden;
   border: 0;
   border-radius: 1px;
   outline: none;
   background: linear-gradient(grey, grey) no-repeat center;
   /* Use a linear gradient to generate only the 2px height background */
   background-size: 100% 2px;
   pointer-events: none;

   &:active,
   &:focus {
      outline: none;
   }

   &::-webkit-slider-thumb {
      height: 28px;
      width: 28px;
      border-radius: 28px;
      background-color: #fff;
      position: relative;
      margin: 5px 0;
      /* Add some margin to ensure box shadow is shown */
      cursor: pointer;
      appearance: none;
      pointer-events: all;
      box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
      &::before {
            content: ' ';
            display: block;
            position: absolute;
            top: 13px;
            left: 100%;
            width: 2000px;
            height: 2px;
      }
   }
}

.multi-range {
   position: relative;
   height: 50px;

   input[type=range] {
      position: absolute;
      left:-12em;
      &:nth-child(1) {
         &::-webkit-slider-thumb::before {
            background-color: red;
         }
      }

      &:nth-child(2) {
         background: none;

         &::-webkit-slider-thumb::before {
             background-color: grey; 
         }
      }
   }
}
`;
