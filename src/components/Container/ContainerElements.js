import styled from "styled-components"
import { pxToRem } from "../../theme/helpers"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: ${pxToRem(27)};
  padding-left: ${pxToRem(27)};
`
