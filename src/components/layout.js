/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import styled from "styled-components"


const CustomMain = styled.main`
  margin: 0 auto;
  text-align: center;
  font-family: "Hind";

  h1, h2, h3, h4, h5 {
    font-family: "Ubuntu";
    margin: 5vh 0;
  }
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.menuLinks || `Blog`} />
      <div>
        <CustomMain>{children}</CustomMain>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
