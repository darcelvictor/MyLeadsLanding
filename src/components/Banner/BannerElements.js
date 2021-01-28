import styled from "styled-components"
import { pxToRem, media } from "../../theme/helpers"

export const BannerContainer = styled.p`
  font-family: Raleway;
  font-size: ${pxToRem(24)};
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  ${media.small`
  font-size: ${pxToRem(32)};
  `}
`
