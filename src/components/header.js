import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import Icon from "../images/svg/icon.inline.svg"
import styled from "styled-components"
import { layout, media, pxToRem } from "../theme/helpers"

const Header = ({ className }) => (
  <header className={className}>
    <div>
      <Link to="/">
        <Icon />
        <p>Pour une installation réussie et sans souci !</p>
      </Link>
    </div>
  </header>
)

export default styled(Header)`
  display: flex;
  ${layout}
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    width: 100%;
    a {
      display: flex;
      margin: ${pxToRem(10)};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      p {
        text-align: center;
        align-self: center;
        font-size: ${pxToRem(18)};
        margin-top: ${pxToRem(10)};
      }
    }
  }

  ${media.medium`
  max-height: ${pxToRem(90)};
  div {
    a{
    flex-direction: row;
    justify-content: flex-start;
      p{
        align-self:flex-end;
        font-size: ${pxToRem(20)};
        line-height: 1;
      }
    }
  }
  `}
`
