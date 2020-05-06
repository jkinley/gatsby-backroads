import React from 'react'
import BlogCard from "./BlogCard"
import Title from '../Title'
import {useStaticQuery, graphql} from 'gatsby'
import styles from '../../css/blog.module.css'

const getPosts = graphql`
	query {
		posts:allContentfulPost(sort:{fields:published, order:DESC}){
			totalCount
			edges{
				node{
					id: contentful_id
					title
					slug
					published(formatString:"MMMM D, YYYY")
					image {
						fluid {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`

const BlogList = ({data}) => {

	const {posts} = useStaticQuery(getPosts)

	console.log(posts)
	return (
		<section className={styles.blog}>
			<Title title="our" subtitle="blog" />
			<div className={styles}>
				{
					posts.edges.map(({node}) => {
						return <BlogCard key={node.contentful_id}  blog={node} />
					})
				}
			</div>
		</section>
	)
}

export default BlogList
