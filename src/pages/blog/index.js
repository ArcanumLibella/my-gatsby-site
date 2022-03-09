import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'

const BlogPage = ({data}) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map(post => {
				return (
					<article key={post.id}>
						<h2>
							<Link to={`/blog/${post.slug}`}>
								{post.frontmatter.title}
							</Link>
						</h2>
						<p>Posted: {post.frontmatter.date}</p>
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
		slug
	  }
	}
  }
`

export default BlogPage
