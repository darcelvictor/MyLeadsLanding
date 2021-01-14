import styled from "styled-components"
import { pxToRem, colors, layout } from "../../../theme/helpers"

export const MyImage = styled.img`
  max-width: 40%;
  padding: ${pxToRem(30)};
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
  div {
    padding: ${pxToRem(30)};
    max-width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
export const FirstP = styled.p`
  font-family: Roboto;
  font-size: ${pxToRem(21)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: ${colors.grey};
`
