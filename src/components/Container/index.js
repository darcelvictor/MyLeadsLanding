import styled from "styled-components"
import { layout, pxToRem } from "../../theme/helpers"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${layout()}
  padding-top :${pxToRem(40)};
  padding-bottom: ${pxToRem(40)};
`

export default Container
// padding-right: ${pxToRem(27)};
// padding-left: ${pxToRem(27)};
