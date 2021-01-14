import { createGlobalStyle } from "styled-components"
import { pxToRem, colors } from "./helpers"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"

import "@fontsource/raleway/500.css"
import "@fontsource/raleway/800.css"
import "@fontsource/raleway/900.css"

import "@fontsource/roboto"

const Global = createGlobalStyle`
body {
  font-size:16px;
  transition:600ms;
  font-family: "Raleway";
}
h1{
  font-size: ${pxToRem(24)};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
h1,h2,h3,h4
{
  font-family: Raleway;
}
p{
  font-family: Roboto;
  color:${colors.lightGrey}
}

button{
  background-color:${colors.green};
  border-radius: ${pxToRem(32)};
  color:white;
  border:none;
  padding : ${pxToRem(10)} ${pxToRem(15)};
  font-family:Raleway;
  font-weight:800;
  font-size : ${pxToRem(24)};
  margin: 0 auto;
}
`

export default Global
