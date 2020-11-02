import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const CustomBody = styled.div`
    text-align: left;
`


const Title = styled.h1`
    margin: auto;
    margin-top: 30px;
    padding: 1px 1px;
    line-height: 45px;
`

const Subtitle = styled.h3`
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 40px;
`



export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <CustomBody>
        <Title>{post.frontmatter.title}</Title>
        <Subtitle>By Marta on {post.frontmatter.date}</Subtitle>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </CustomBody>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`