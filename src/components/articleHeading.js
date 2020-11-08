import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"


const Heading = styled.div`
margin: 0;
padding: 0 3px;
padding-left: 0px;
align-items: center;
border-bottom: 2px solid #e6e9ed;
.article-title{
  margin: auto;
  padding: auto;
  text-align: left;
}
.tag {
  display: none;
}

@media screen and (min-width: 650px) {
  margin: 10px 0;
  padding: 10px 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  border-bottom: 0px;

  :hover {
    background-color: #e6e9ed;
    border-radius: 5px;
  }

  .article-title{
    text-align: left;
    flex: 1;
  }

  .tag {
    display: block;
    font-size: 14px;
    padding: 2px 5px;
    background-color: #faf5c3;
    border-radius: 5px;
    margin: 0 1px;
  }
}
`
const ArticleHeading = ({ articles }) => (
    <Heading>
        articles
    </Heading>
  )

ArticleHeading.propTypes = {
    siteTitle: PropTypes.string,
}
  
ArticleHeading.defaultProps = {
    siteTitle: ``,
}
  
  export default ArticleHeading
  