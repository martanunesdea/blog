import React, {useMemo} from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/Posts"
import { getSimplifiedPosts } from '../utils/helpers'

const Subheader = styled.div`
  margin: auto;
  max-width: 500px;
`

const YearHeading = styled.div`
  margin-top: 20px;
`

const ButtonLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
    box-shadow: none;
    background: #e6e9ed;
    font-size: 14px;
    line-height: 12px;
    padding: 1px 2px;
    border-radius: 4px;

    @media screen and (min-width: 800px) {
      color: black;
      text-decoration: none;
      box-shadow: none;
      background: #e6e9ed;
      font-size: 18px;
      line-height: 14px;
      padding: 1.5px 3px;
      border-radius: 4px;
    }
`;

const SectionTitleDiv = styled.div`
  display: grid;
  grid-template-columns: 0px 175px 75px;
  grid-template-rows: auto auto auto;
  padding-bottom: 5px;
  margin: 0;
  margin-top: 20px;
  border-bottom: 3px solid #e6e9ed;
  text-align: left
  .item1, .item-2, .item-3 {
    display: inline-block;
    margin-bottom: 0px;
    padding: 0;
  }
  h3 {
    margin: 0;
  }
  .item-3 {
    text-align: center;
    justify-content: center;
    margin: auto 0px;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 75px 620px 75px;
    grid-template-rows: auto auto auto;
    padding-bottom: 10px;
    margin: 5px auto;
    margin-top: 40px;
    border-bottom: 3px solid #e6e9ed;
    .item-1, .item-2, .item-3 {
      margin-bottom: 0px;
      padding: 0px;
      h3{
        margin: auto;
      }
    }
    .item-3 {
      text-align: center;
      justify-content: center;
      margin: auto 0px;
    }
  }
`

export default function Articles ({ data }) {
  const articles = data.articles.edges
  const simplifiedArticles = useMemo(() =>
  getSimplifiedPosts(articles), [articles])

  const Section = ({ title, children, button, ...props }) => (
    <section>
      <SectionTitleDiv {...props}>
        <div class="item-1"></div>
        <div class="item-2"><h3>{title}</h3></div>
        <div class="item-3"> 
        {button && (
            <ButtonLink to="/articles">
              View all
            </ButtonLink>
        )}
        </div>
      </SectionTitleDiv>
      {children}
    </section>
  )

  return(
  <Layout>
    <SEO title="Articles"/>
      <h1>Articles</h1>
      <Subheader>
        <p>A compilation of single-topic posts, tutorials, complete project write-ups and everything in between.</p>
      </Subheader>

      <YearHeading></YearHeading>
      <Section title="Articles" button>
        <Posts data={simplifiedArticles}/>
      </Section>
  </Layout>)
}


export const query = graphql`
  query {
    articles: allMarkdownRemark(
      limit: 3 
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "article" } } }
    ) {
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
        }
      }
    }
  }
`