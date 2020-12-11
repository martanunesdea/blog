import React, {useMemo} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/Posts"
import styled from "styled-components"
import { getSimplifiedPosts } from '../utils/helpers'
import "../components/layout.css"

const CustomHeader = styled.div`
  padding: 1px 0px;
  margin: auto;
  max-width: 650px;
`

const Title = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 30px;
  
  @media screen and (min-width: 650px) {
    margin: 30px 0;
    line-height: 40px;
  }
`

const Subtitle = styled.div`
  margin: auto;
  padding: auto 10px;

  p {
    padding: 0px auto;
    line-height: 20px;
  }

  @media screen and (min-width: 650px) {
    margin: auto;
    padding: auto 10px;
    p {
      line-height: 40px;
    }
  }
`

const CustomBody = styled.div`
  padding: 5px 5px;
  margin 5px 0;
`

/* 
const Icon = styled.div`
  display: none;

  @media screen and (min-width: 650px) {
  padding: 10px 10px;
  display: inline;
  }
`   */

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

export default function IndexPage ({ data })  {
  const latest = data.latest.edges
  const simplifiedLatest = useMemo(() =>
  getSimplifiedPosts(latest), [latest])

  const projects = data.projects.edges
  const simplifiedProjects = useMemo(() =>
  getSimplifiedPosts(projects), [projects])

  const personal = data.personal.edges
  const simplifiedPersonal = useMemo(() =>
  getSimplifiedPosts(personal), [personal])
  
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

  return (
  <Layout>
    <SEO title="Home" />
    <CustomHeader>
        <Title>Hi there, I'm Marta</Title>
        <Subtitle>
          <p>A software engineer with an enthusiasm for IoT and data security.</p>
          <p>This space is intended to store my ideas and ongoing learning progress, as well to distribute any helpful advice and past experience.</p>
        </Subtitle>
    </CustomHeader>
    <CustomBody>
      <Section title="Latest articles" button>
        <Posts data={simplifiedLatest}/>
      </Section>

      <Section title="Projects">
        <Posts data={simplifiedProjects}/>
      </Section>

      <Section title="Personal updates">
        <Posts data={simplifiedPersonal}/>
      </Section>

    </CustomBody>
  </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
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
    projects: allMarkdownRemark(
      limit: 3 
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "project" } } }
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
    personal: allMarkdownRemark(
      limit: 3 
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "opinion" } } }
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