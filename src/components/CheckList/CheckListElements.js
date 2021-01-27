import styled from "styled-components"
import { pxToRem } from "../../theme/helpers"
import Icon from "../../images/svg/checkBox.svg"

export const MyUnorganizedList = styled.ul`
  list-style-image: url(${Icon});
  li {
    margin-bottom: ${pxToRem(13.6)};
    h3 {
      font-size: ${pxToRem(18)};
      margin-bottom: ${pxToRem(1)};
    }
    p {
      margin-top: ${pxToRem(1)};
      margin-bottom: ${pxToRem(16)};
      font-size: 17px;
    }
  }
`
