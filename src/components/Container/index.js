import styled from "styled-components"
import { pxToRem, layout } from "../../theme/helpers"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${layout()}
`

export default Container
// padding-right: ${pxToRem(27)};
// padding-left: ${pxToRem(27)};
