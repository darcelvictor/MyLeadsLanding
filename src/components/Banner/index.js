import React from "react"
import styled from "styled-components"
import { media, pxToRem } from "../../theme/helpers"
import { BannerContainer } from "./BannerElements"
import GreenLine from "../GreenLine"

const Banner = ({ children, className }) => {
  return (
    <>
      <BannerContainer>{children}</BannerContainer>
      <GreenLine className={className} />
    </>
  )
}

export default styled(Banner)`
  display: none;
  ${media.large`
    display:block;
    margin: ${pxToRem(16)} 0;
  `}
`
