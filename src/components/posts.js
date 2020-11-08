import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

const CleanLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
    box-shadow: none;
    margin: 0px;
    padding: 0px;
    line-height: 16px;
`;


const ArticleHeading = styled.div`
  margin: 0;
  padding: 0 3px;
  padding-left: 0px;
  align-items: center;
  border-bottom: 2px solid #e6e9ed;
  .article-title{
    margin: auto;
    padding: auto;
    text-align: left;
  }
  .tag {
    display: none;
  }
  a {
      padding: 0;
      margin:
  }

  @media screen and (min-width: 650px) {
    margin: 5px 0;
    padding: 5px 5px;
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

const PostsList = styled.div`
  margin: 0;
  padding: 0;
`

export default function Posts({ data }) {
    return (
        <PostsList>
          {data.map((node) => (
            <ArticleHeading key={node.id}>
            <CleanLink to={node.slug}>
                <p>{node.title}</p>
            </CleanLink>
            </ArticleHeading>
        ))}
        </PostsList>
      )
}