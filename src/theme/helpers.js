import styled, { css } from "styled-components"

export const colors = {
  green: "#0fd344",
  primary: "#499df3",
  accent: "#ff4a00",
  white: "#f1f4f5",
  black: "#20272b",
  grey: "#707070",
  blue: "#07448e",
  lightGrey: "#676666",
  BKgrey: "#efefef",
}

export const pxToRem = (px = 16) => {
  return `${px / 16}rem`
}

export const layout = (px = 1200) => {
  return `
    max-width: ${pxToRem(1500)};
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${pxToRem(8)};`
}

export const Accent = styled.span`
  color: ${colors.green}!important;
`

const sizes = {
  xlarge: 1400,
  large: 1200,
  medium: 900,
  small: 600,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const mediaInv = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const listDisplay = () => {
  return `
  ${media.small`
width:100%;
display:flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:center;
column-gap:${pxToRem(20)};
row-gap:${pxToRem(40)};
margin:${pxToRem(40)};
div{
margin:0 auto;
max-width:${pxToRem(500)};
}
`}

  ${media.medium`
justify-content:center;
div{
max-width:${pxToRem(350)};
margin:0 auto;
}
`}


${media.large`
justify-content:space-between;
`}


${media.xlarge`
div{
margin:0;
}
`}
`
}
