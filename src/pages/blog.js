import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'

const BlogPage = ({data}) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map(post => {
				return (
					<article key={post.id}>
						<h2>{post.frontmatter.title}</h2>
            <p>Posted: {post.frontmatter.date}</p>
						<MDXRenderer>
							{ post.body }
						</MDXRenderer>
					</article>
				)
			})}
		</Layout>
	)
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage
