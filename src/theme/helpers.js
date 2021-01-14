import styled, { css } from "styled-components"

export const colors = {
  green: "#0fd344",
  primary: "#499df3",
  accent: "#ff4a00",
  white: "#f1f4f5",
  black: "#20272b",
  grey: "#354147",
  blue: "#07448e",
  lightGrey: "#676666",
}

export const pxToRem = (px = 16) => {
  return `${px / 16}rem`
}

export const layout = (px = 1170) => {
  return `
    max-width: ${pxToRem(px)};
    width: 95vw;
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${pxToRem(8)};`
}

export const Accent = styled.span`
  color: ${colors.green};
`

const sizes = {
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
