import styled from "styled-components"
import React from "react"
import { pxToRem, colors } from "../../theme/helpers"

const ListNumberItem = ({ id, title, text, className }) => {
  return (
    <div className={className}>
      <p>{id}</p>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default styled(ListNumberItem)`
  display: grid;
  grid-gap: ${pxToRem(20)};
  grid-template-columns: ${pxToRem(50)} auto;
  grid-template-rows: ${pxToRem(50)} auto;
  margin: ${pxToRem(40)} 0;

  p:first-of-type {
    box-shadow: -4px 4px 6px 0 rgba(7, 68, 142, 0.51);
    border-radius: 100%;
    grid-column: 1;
    grid-row: 1;
    color: ${colors.blue};
    font-family: HelveticaNeue;
    font-size: 35px;
    font-weight: Bold;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  h3 {
    margin: 0;
    font-family: Raleway;
    font-size: ${pxToRem(23)};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: ${colors.blue};
    grid-column: 2;
    grid-row: 1;
    align-self: center;
  }
  p {
    font-family: Roboto;
    font-size: 19px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: left;
    color: ${colors.grey};
    grid-column: 1;
    grid-column-end: span 2;
    grid-row: 2;
  }
  * {
    margin-top: 0;
  }
`
