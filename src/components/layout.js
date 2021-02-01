/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Sections/Footers"

import Global from "../theme/GlobalStyle"
import CookieBanne from "react-cookie-consent"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Global />
      <main>{children}</main>
      <Footer />
      <CookieBanne />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
