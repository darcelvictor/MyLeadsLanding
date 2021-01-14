import styled from "styled-components"
import { pxToRem } from "../../theme/helpers"
import Icon from "../../images/svg/checkBox.svg"

export const MyUnorganizedList = styled.ul`
  list-style-image: url(${Icon});
  li {
    margin-bottom: ${pxToRem(13.6)};
    h3 {
      font-size: ${pxToRem(18)};
    }
    p {
      font-size: 17px;
    }
  }
`
