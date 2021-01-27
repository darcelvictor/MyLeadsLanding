import styled from "styled-components"
import React from "react"
import { pxToRem, colors } from "../../theme/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

const ListNumberUnderlineItem = ({ nb, title, text, className }) => {
  return (
    <div className={className}>
      <p>{nb}</p>
      <h3>{title}</h3>
      <div></div>
      <p>{text}</p>
      {nb === 1 && (
        <button onClick={() => scrollTo("#form")}>test d’éligibilité</button>
      )}
    </div>
  )
}

export default styled(ListNumberUnderlineItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${pxToRem(40)};
  background-color: white;
  padding: ${pxToRem(15)};
  border-radius: ${pxToRem(31)};
  p:first-of-type {
    font-family: Arial;
    font-size: ${pxToRem(50)};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.16;
    letter-spacing: normal;
    text-align: center;
    color: ${colors.blue};
    text-align: center;
    margin: 0;
  }
  h3 {
    font-family: Raleway;
    font-size: ${pxToRem(23)};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: center;
    color: ${colors.blue};
    margin: ${pxToRem(10)} auto;
  }
  div {
    width: ${pxToRem(170)};
    height: ${pxToRem(5)};
    background-color: ${colors.green};
    align-self: center;
  }
  p {
    text-align: center;
    align-self: center;
  }
  button {
    text-transform: uppercase;
    font-size: ${pxToRem(22)};
    margin-top: ${pxToRem(10)};
  }
`
