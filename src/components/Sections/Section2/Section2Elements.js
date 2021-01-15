import styled from "styled-components"
import { pxToRem, colors, layout } from "../../../theme/helpers"

export const MyImage = styled.img`
  max-width: 40%;
  padding: ${pxToRem(10)};
`
export const MyText = styled.p`
  font-family: Raleway;
  font-size: ${pxToRem(23)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: ${colors.blue};
`
export const Container = styled.div`
  ${layout()}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  div {
    border-radius: ${pxToRem(30)};
    min-height: ${pxToRem(300)};
    padding: ${pxToRem(30)};
    margin: ${pxToRem(5)};
    max-width: ${pxToRem(400)};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(46, 182, 255, 0.09);
  }
`
