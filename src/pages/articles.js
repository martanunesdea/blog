import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Subheader = styled.div`
  margin: auto;
  max-width: 500px;

`

const YearHeading = styled.div`
  margin-top: 30px;
`

const ArticleHeading = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;

  .article-title{
    font-size: 22px;
    text-align: left;
    flex: 1;
  }
  .tag-javascript {
    font-size: 14px;
    padding: 2px 5px;
    background-color: yellow;
    border-radius: 5px;
    margin: 0 1px;
  }
  .tag-python {
    font-size: 14px;
    padding: 2px 5px;
    background-color: green;
    border-radius: 5px;
    margin: 0 1px;
  }
  .tag-project {
    font-size: 14px;
    margin: 0 1px;
    padding: 2px 5px;
    background-color: orange;
    border-radius: 5px;
  }
  .tag-c {
    font-size: 14px;
    margin: 0 1px;
    padding: 2px 5px;
    background-color: blue;
    border-radius: 5px;
  }
`


const Articles = () => (
  <Layout>
    <SEO title="Articles"/>
      <h1>Articles</h1>
      <Subheader>
        <p>A compilation of single-topic posts, tutorials, complete project write-ups and everything in between.</p>
        <p>Search keywords or phrases to find relevant posts.</p>
      </Subheader>

      <YearHeading></YearHeading>
      <ArticleHeading>
        <p class="article-title">Learning Javascript as a C Developer</p>
        <p class="tag-javascript">Javascript</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Categorising images with openCV</p>
        <p class="tag-python">Python</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Understanding speech with NLP</p>
        <p class="tag-python">Python</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Raspberry Pi as a smart home monitor</p>
        <p class="tag-python">Python</p>
        <p class="tag-project">Project</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Authenticating with Flask</p>
        <p class="tag-python">Python</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Integrating Flask and SQLit</p>
        <p class="tag-python">Python</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Voice assistant with an ESP32 microchip</p>
        <p class="tag-c">C</p>
        <p class="tag-project">Project</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">What to know about wireless comms</p>
        <p class="tag-c">C</p>
        <p class="tag-project">IoT</p>
      </ArticleHeading>

  </Layout>
)

export default Articles
