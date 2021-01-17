import React from "react"
import styled from "styled-components"
import { media, pxToRem, colors } from "../../theme/helpers"

const GreenLine = ({ className }) => {
  return <div className={className}></div>
}

export default styled(GreenLine)`
  display: none;
  background-color: ${colors.green};
  height: ${pxToRem(5)};
  width: ${pxToRem(350)};
  justify-self: flex-start;
  ${media.small`
display:block;
`}
`
