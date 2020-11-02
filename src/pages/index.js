import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrochip, faTabletAlt, faChartBar } from '@fortawesome/free-solid-svg-icons'

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

const SectionTitle = styled.h3`
  margin: 1px 0;
  margin-top: 10px;
  margin-bottom: 3px;
  padding: 1px 0;
  border-bottom: 2px solid #e6e9ed;

  @media screen and (min-width: 650px) {
    margin: 0;
    margin-top: 50px;
    margin-bottom: 3px;
    padding: 10px 0;
    border-bottom: 3px solid #e6e9ed;
  }



`

const ArticleHeading = styled.div`
  margin: 1px 0;
  padding: 2px 3px;
  padding-left: 5px;
  align-items: center;
  border-bottom: 2px solid #e6e9ed;
  .article-title{
    text-align: left;
  }
  .tag {
    display: none;
  }

  @media screen and (min-width: 600px) {
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

const Icon = styled.div`
display: none;

  @media screen and (min-width: 600px) {
  padding: 10px 10px;
  display: inline;
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CustomHeader>
        <Title>Hi there, I'm Marta</Title>
        <Subtitle>
          <p class="text">A software engineer with an enthusiasm for IoT and data security.</p>
          <p class="text">This space is intended to store my ideas and ongoing learning progress, as well to distribute any helpful advice and past experience.</p>
        </Subtitle>
    </CustomHeader>
    <CustomBody>
      <SectionTitle>Latest articles</SectionTitle>
      <ArticleHeading>
        <p class="article-title">Learning Javascript as a C Developer</p>
        <p class="tag">Javascript</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Categorising images with openCV</p>
        <p class="tag">Python</p>
      </ArticleHeading>
      <ArticleHeading>
        <p class="article-title">Understanding speech with NLP</p>
        <p class="tag">Python</p>
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
