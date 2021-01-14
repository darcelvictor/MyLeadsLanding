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
  color:${colors.lightGrey};
  margin : 1rem 0 0;
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
/* ------FORM-------*/
.checkBox{
  display:inline-flex;
  flex-direction:row;
  align-items:center;
  margin : 1rem 0 0;
  label{
    display:inline-flex;
  flex-direction:row;
  align-items:center;
  min-width:150px;
  input{
    max-width:30px;
  }
  }
  * {
    font-family: Raleway;
  font-size: ${pxToRem(18)};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: ${colors.blue};
  margin:0;
  }
}
.rgpd{
  display:flex;
  margin: ${pxToRem(15)} 0;
  flex-direction:row;
  input{
    max-width:40px;
    left:0;
  }
  p{
    margin:0;
    padding:0;
    font-family: Raleway;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #07448e;
    span{
      font-weight:bold;
    }
  }
  }
`

export default Global
