import styled from "styled-components"
import { pxToRem, colors, layout } from "../../../theme/helpers"

export const MyImage = styled.img`
  max-width: ${pxToRem(50)};
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
  justify-content: space-around;
  flex-wrap:wrap;
`
