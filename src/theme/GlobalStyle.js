import { createGlobalStyle } from "styled-components"
import { pxToRem, colors, media } from "./helpers"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"

import "@fontsource/raleway/latin-500.css"
// import "@fontsource/raleway/700.css"
import "@fontsource/raleway/latin-600.css"
import "@fontsource/raleway/latin-800.css"
import "@fontsource/raleway/latin-900.css"

import "@fontsource/roboto/latin-300.css"
import "@fontsource/roboto/latin-400.css"

// font fro Pre Prod
import "@fontsource/raleway/100.css"
import "@fontsource/raleway/200.css"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/400.css"
import "@fontsource/raleway/600.css"
import "@fontsource/raleway/700.css"

import "@fontsource/roboto/100.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"

const Global = createGlobalStyle`
body {
  font-size:16px;
  transition:600ms;
  font-family: "Raleway";
}
footer{
  min-width:100%;
}
h1{
  font-size: ${pxToRem(24)};
  font-weight: 800;
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
h2{
  color:${colors.blue};
  font-size: ${pxToRem(27)};
  font-weight: 800;
  text-align: center;
  text-transform:uppercase;
}
h3{
  color:${colors.blue};
  font-size: ${pxToRem(23)};
  max-width:${pxToRem(600)};
}
p{
  
  font-family: Roboto;
  color:${colors.lightGrey};
  margin : 1rem 0 0;
  font-size: ${pxToRem(19)};
  align-self: flex-start;
  text-align:left;
}

button{
  background-color:${colors.green};
  border: 4px solid ${colors.green} !important;
  border-radius: ${pxToRem(32)};
  color:white;
  border:none;
  padding : 0.35rem 0.9375rem;
  font-family:Raleway;
  font-weight:600;
  font-size : 1.2rem;
  margin: 0 auto;
  text-align:center;
  cursor:pointer;
  
  ${media.small`
  font-size : 1.5rem;
  `}

  :hover{
    background-color:white;
    color : ${colors.green};
    border-color:red;
  }
}
.link{
  text-decoration:none;
  text-align:left;
  align-self: flex-start;
  color:${colors.lightGrey};
  font-size : ${pxToRem(17)};
  font-weight:Bold;
  margin-top: ${pxToRem(10)};
}

/* ------FORM-------*/
.checkBox{
  align-items:center;
  flex-wrap:wrap;
  margin : 1rem 0 0;
  display:grid;
  grid-template-columns: 70px auto;
  p{
    min-width:71px;
    grid-column-start: 1;
    align-self: flex-start;
  }
  label{
    grid-column-start: 2;
    display:inline-flex;
  flex-direction:row;
  align-items:center;
  min-width:120px;
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

  /*-------photo main page mobile only-------*/
#HomeImage{
  ${media.small`
  display:none;
  `}
}

#DepanneurMobile{
    visibility:visible;
    height:auto;
  width:auto;
  margin:${pxToRem(15)};
  max-width:90%;
  }
  #DepanneurDesktop{
  visibility:hidden;
  height:0;
  width:0;
  margin:0;
}

  ${media.large`
  #DepanneurDesktop{
    visibility:visible;
    height:auto;
    width:400px;
    margin:${pxToRem(15)};
    max-width:90%;
  }
  #DepanneurMobile {
    visibility:hidden;
  height:0;
  width:0;
  margin:0;
  }
  `}

/*-------colonnes Responsive-------*/
.colunmsContainer{
  width:100%;
  display:flex;
  flex-direction: column;

  ${media.large`
  flex-direction:row;
  `}
}

.column{
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

/*-----List-----*/
.listItems{
    ${media.small`
          width:100%;
          display:flex;
          flex-direction: row;
          flex-wrap:wrap;
          justify-content:center;
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
}

`
export default Global
