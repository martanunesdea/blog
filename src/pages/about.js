import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import styled from "styled-components"

const CustomHeader = styled.div`
  padding: 5px 5px;
  margin: 5px 0;
`
const Title = styled.h1`
  margin: 30px 0;
`
const Subtitle = styled.div`

  p {
    margin: 10px 0;
  }
`
const CustomBody = styled.div`
  padding: 5px 5px;
  margin 5px 0;

  p {
    margin: 10px 0;
    line-height: 35px;
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <CustomHeader>
        <Title>About me</Title>
        <Subtitle>
          <p>
            Hi there! Thanks for stopping by. I'm Marta Nunes de Abreu, I am software engineer exploring the technical implications of an ever-connected world. 
          </p>
        </Subtitle>
    </CustomHeader>
    <CustomBody>
    <h3>Writing motivations</h3>
    <p>
        My aim is to process my thoughts and concentrate them in this website.
        My hope is this will eventually become a large compendium of everything I worked on in the past.
        Whilst I hope this will eventually help someone else, the working assumption is my readership will be limited to the me of the future.
    </p>
    <h3>Get in touch</h3>
    <p>
        If you do happen to be reading this and benefited from some of my articles, I would love to hear from you. 
    </p>
    <p>Email: email@here</p>
    <p>LinkedIn: my_linkedin</p>
    <p>Github: my_github</p>
    </CustomBody>
  </Layout>
)

export default IndexPage
