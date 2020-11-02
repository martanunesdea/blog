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
  h3 {
    padding-bottom: 10px;
    border-bottom: 3px solid #e6e9ed;
  }
  p {
    margin: 10px 0;
    line-height: 35px;
  }

  a {
    text-decoration: none;
    color: black;
    text-style: strong;
    background-color: #e6e9ed;
    padding: 3px;
    border-radius: 3px;
  }
`


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <CustomHeader>
        <Title>About me</Title>
        <Subtitle>
          <p>
            Hi there! I'm Marta Nunes de Abreu, a software engineer in the embedded systems industry exploring the realms of technology outside my comfort zone. 
          </p>
        </Subtitle>
    </CustomHeader>
    <CustomBody>
    <h3>Writing motivations</h3>
    <p>
        I'm recurring to the practice of writing as a means to digest, process and concentrate all the information I acquire whilst working on out-of-hours projects and activities. 
        My hope is not to acquire a readership, as I am simply an amateur writer, but perhaps to spare a few people of making similar mistakes, or showing them the right path to a solution.
        </p>
    <h3>Get in touch</h3>
    <p>
        If you do happen to be reading this and enjoyed any of my writing, I would love to hear from you. Equally, if there are any suggestions, further questions or comments about mistakes I may have made, don't hesitate on reaching out to me.</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/martanunesdea/">Marta Nunes de Abreu</a></p>
    <p>Twitter: <a href="https://twitter.com/martanunesdea">@martanunesdea</a></p>
    </CustomBody>
  </Layout>
)

export default AboutPage
