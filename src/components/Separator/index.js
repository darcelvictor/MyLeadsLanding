import React from "react"
import styled from "styled-components"
import { pxToRem, colors } from "../../theme/helpers"

const Separator = ({ className }) => {
  return <span className={className}></span>
}

export default styled(Separator)`
  min-width: ${pxToRem(170)};
  width: 30vw;
  height: 0;
  margin: 0 auto;
  border-top: solid 5px ${colors.green};
`
