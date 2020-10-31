import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"


const CustomMain = styled.main`
  margin: 0 auto;
  padding: 5px 10px;
  max-width: 1000px;
  text-align: center;
`

const CustomHeader = styled.div`
  padding: 5px 5px;
  margin: 5px 0;
`
const Title = styled.h1`
  margin: 30px 0;
`
const Subtitle = styled.div`
  margin: auto;
  max-width: 700px;
`


const CustomBlogPosts = styled.div`
  padding: 5px 5px;
  margin 5px 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CustomMain>
      <CustomHeader>
        <Title>Hi there, I'm Marta</Title>
        <Subtitle>
          <p>A software engineer with an enthusiasm for IoT and data security.</p>
          <p>This space is intended to store my ideas and ongoing learning progress, as well to distribute any helpful advice and past experience.</p>
        </Subtitle>
      </CustomHeader>
      <CustomBlogPosts>
        <h3>Latest articles</h3>
        <p>Insert content here </p>

        <h3>Projects</h3>
        <p>Insert content here </p>

        <h3>Personal posts</h3>
        <p>Things I'm learning at the moment</p>
        <p>Things I've learned this month</p>
        <p>Books I recommend</p>
      </CustomBlogPosts>
      </CustomMain>
  </Layout>
)

export default IndexPage
