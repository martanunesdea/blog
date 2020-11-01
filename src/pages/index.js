import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrochip, faTabletAlt, faChartBar } from '@fortawesome/free-solid-svg-icons'

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
const CustomBody = styled.div`
  padding: 5px 5px;
  margin 5px 0;
`

const SectionTitle = styled.h3`
  margin: 0;
  margin-top: 50px;
  margin-bottom: 3px;
  padding: 10px 0;
  border-bottom: 3px solid #e6e9ed;
`


const ArticleHeading = styled.div`
  margin: 10px 0;
  padding: 10px 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;

  :hover {
    background-color: #e6e9ed;
    border-radius: 5px;
  }

  .article-title{
    font-size: 22px;
    text-align: left;
    flex: 1;
  }
  .tag-javascript {
    font-size: 14px;
    padding: 2px 5px;
    background-color: #faf5c3;
    border-radius: 5px;
    margin: 0 1px;
  }
  .tag-python {
    font-size: 14px;
    padding: 2px 5px;
    background-color: #cae0ca;
    border-radius: 5px;
    margin: 0 1px;
  }
  .tag-project {
    font-size: 14px;
    margin: 0 1px;
    padding: 2px 5px;
    background-color: #f7c281;
    border-radius: 5px;
  }
  .tag-c {
    font-size: 14px;
    margin: 0 1px;
    padding: 2px 5px;
    background-color: #cedceb;
    border-radius: 5px;
  }
`

const Icon = styled.div`
  padding: 10px 10px;
  display: inline;
`


const IndexPage = () => (
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
      <SectionTitle>Latest articles</SectionTitle>
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

      <SectionTitle>Projects</SectionTitle>
      <ArticleHeading>
        <Icon><FontAwesomeIcon icon={faTabletAlt}/></Icon>
        <p class="article-title">Turning a Raspberry Pi into smart home monitor</p>
      </ArticleHeading>
      <ArticleHeading>
      <Icon><FontAwesomeIcon icon={faMicrochip}/></Icon>
        <p class="article-title">Voice assistant using an ESP32 microchip</p>
      </ArticleHeading>
      <ArticleHeading>
      <Icon><FontAwesomeIcon icon={faChartBar}/></Icon>
        <p class="article-title">Air pollution dashboard</p>
      </ArticleHeading>

      <SectionTitle>Personal updates</SectionTitle>
      <ArticleHeading>
        <p class="article-title">Things I'm learning at the moment</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Podcasts I've recently discovered</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Thoughts and ideas on books I've recently read</p>
      </ArticleHeading>
    </CustomBody>
  </Layout>
)

export default IndexPage
