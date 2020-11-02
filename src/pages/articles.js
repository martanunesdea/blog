import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Subheader = styled.div`
  margin: auto;
  max-width: 500px;
`

const YearHeading = styled.div`
  margin-top: 20px;
`

const ArticleHeading = styled.div`
  margin: 5px 5px;
  padding: 5px 5px;
  align-items: center;
  border-bottom: 2px solid #e6e9ed;
  .article-title{
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

const CleanLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
    box-shadow: none;
`;


const Articles = ({ data }) => (
  <Layout>
    <SEO title="Articles"/>
      <h1>Articles</h1>
      <Subheader>
        <p>A compilation of single-topic posts, tutorials, complete project write-ups and everything in between.</p>
        <p>Search keywords or phrases to find relevant posts.</p>
      </Subheader>

      <YearHeading></YearHeading>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
              <CleanLink
              to={node.fields.slug}>
            <ArticleHeading>
            <p class="article-title">
            {node.frontmatter.title}
            </p>
            <p class="tag">
            {node.frontmatter.tags}
            </p>
            </ArticleHeading>
            </CleanLink>
        </div>
      ))}
  </Layout>
)
export default Articles
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`