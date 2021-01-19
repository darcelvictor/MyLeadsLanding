import React from "react"
import styled from "styled-components"
import { media, pxToRem } from "../../theme/helpers"
import { BannerContainer } from "./BannerElements"
import GreenLine from "../GreenLine"

const Banner = ({ children, className }) => {
  return (
    <BannerContainer className={className}>
      {children}
      <GreenLine className="GreenLine" />
    </BannerContainer>
  )
}

export default styled(Banner)`
  .GreenLine {
    display: none;
  }
  ${media.large`
  .GreenLine {
    display:block;
    margin: ${pxToRem(16)} 0;
  }`}
`
