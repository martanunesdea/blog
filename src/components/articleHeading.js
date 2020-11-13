import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"


const Heading = styled.div`
margin: 0px 5px;
padding: 0px 5px;
text-align: left;
border-bottom: 2px solid #e6e9ed;
.article-title{
  margin: 0;
  padding: 0;
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
    margin: 2px 0;
    padding: 5px;
    font-size: 22px;
    text-align: left;
    flex: 1;
  }
  .tag {
    display: block;
    font-size: 13px;
    padding: 1px 5px;
    background-color: #b3bcc9;
    border-radius: 5px;
    margin: 0 3px;
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
  