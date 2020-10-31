import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"


const CustomMain = styled.main`
  margin: 0 auto;
  max-width: 800px;
  padding: 0;
  text-align: center;
  h1 {
    padding: 0;
    margin: 10vh 0 2vh 0;
  }
  h3 {
    padding: 0;
    margin: 2vh 0 7vh 0;
  }
  h4 {
    padding: 0;
    margin: 0;
  }
  button {
    margin: 2vh 0;
  }
  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CustomMain>
      <h1>Hi there, I'm Marta</h1>
      <p>A software engineer with an enthusiasm for IoT and data security.</p>
      <p>This space is intended to store my ideas and ongoing learning progress, as well to distribute any helpful advice and past experience.</p>
      
      <h3>Latest blog posts</h3>
      <p>Insert content here </p>

      <h3>Recent projects</h3>
      <p>Insert content here </p>

      <h3>About me</h3>
      <p>I've been a tech geek since I was in school. I  learnt C programming as a first-year university student and since then software and hardware have become my bread and butter.</p>
    </CustomMain>
  </Layout>
)

export default IndexPage
