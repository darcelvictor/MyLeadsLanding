import React from "react"
import styled from "styled-components"
import { pxToRem, colors } from "../../../theme/helpers"

const Item = ({ className, txt, image }) => {
  return (
    <div className={className}>
      <img src={image} alt={txt} />
      <p>{txt}</p>
    </div>
  )
}

export default styled(Item)`
  border-radius: ${pxToRem(30)};
  min-height: ${pxToRem(300)};
  padding: ${pxToRem(30)};
  margin: ${pxToRem(5)};
  max-width: ${pxToRem(400)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: rgba(46, 182, 255, 0.09);
  img {
    max-width: 40%;
    padding: ${pxToRem(10)};
  }
  p {
    font-family: Raleway;
    font-size: ${pxToRem(23)};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: center;
    color: ${colors.blue};
  }
`
