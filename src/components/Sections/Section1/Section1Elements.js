import styled from "styled-components"
import { pxToRem, colors } from "../../../theme/helpers"

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
