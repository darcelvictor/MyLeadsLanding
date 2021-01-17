import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { mediaInv, media } from "../../theme/helpers"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "image-pac.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.placeholderImage.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#fff`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  ${mediaInv.large`
  ::before,
  ::after {
    background-image: none !important;
  `}
`

export default StyledBackgroundSection
