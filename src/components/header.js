import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const CustomNav = styled.header`
  margin: 0 auto;
  padding: 10px 15px;
  text-align: left;
  background-color: black;
  display:flex;
  justify-content: space-between;
  align-items: center;
`
const CustomTitle = styled.div`
  flex: 1;
`


const CustomMenu = styled.div`
  color: white;
`

const CleanLink = styled(props => <Link {...props} />)`
    color: white;
    text-decoration: none;
    box-shadow: none;
    font-family: "Ubuntu";
    margin: auto 10px;
`;

const Header = ({ menuLinks }) => (
  <CustomNav>
    <CustomTitle>
      <CleanLink to="/">
          Marta Nunes de Abreu
      </CleanLink>
    </CustomTitle>

      <CustomMenu>
        <CleanLink to="/">
            Articles
        </CleanLink>
        <CleanLink to="/">
          About
        </CleanLink>
      </CustomMenu>

  </CustomNav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
