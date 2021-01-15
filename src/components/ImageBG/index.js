import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Fond from "../../images/svg/firstBackground.svg"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "image-pac.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
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
      BackgroundImage={Fond}
    >
      {children}
    </BackgroundImage>
  )
}

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

export default BackgroundSection
