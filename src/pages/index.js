// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Home Page">
      <p>{ data.site.siteMetadata.description }</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

// Step 3: Export your component
export default IndexPage