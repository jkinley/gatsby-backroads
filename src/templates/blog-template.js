import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
//import StyledHero from '../components/StyledHero'
import styles from '../css/single-blog.module.css'
import {Link} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Blog = ({data}) => {

	console.log(data)

	const {title, published, text:{json}} = data.post;

	const options = {
		renderNode: {
			"embedded-asset-block": (node)=>{
				console.log(node);
				return (
					<div>
						<img width="400" src={node.data.target.fields.file["en-US"].url} alt=""/>
					</div>
				) 
			},
			"embedded-entry-block": (node)=>{
				console.log(node.data.target.fields)

				const {title, image, text} = node.data.target.fields;

				return (
				<div>
					<h2>{title["en-US"]}</h2>
					<img width="400" src={image["en-US"].fields.file["en-US"].url} alt=""/>
					{documentToReactComponents(text['en-US'])}
				</div>
			

				) 
			}
		}
	}
	return (
		<Layout>
				<section className={styles.blog}>
					<div className={styles.center}>
						<h1>{title}</h1>
						<h4>published at: {published}</h4>
						<article className={styles.post}>
							{documentToReactComponents(json,options)}
						</article>
						<Link to="/blog" className="btn-primary">All Posts</Link>
					</div>
				</section>
		</Layout>
	)
}


export const query = graphql`
	query($slug:String!) {
		post: contentfulPost(slug:{eq: $slug}) {
			title
			published(formatString: "MMMM Do YYYY")
			text {
				json
			}
		}
	}
`

export default Blog
