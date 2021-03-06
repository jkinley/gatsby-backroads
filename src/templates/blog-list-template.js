import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {Link} from 'gatsby'
import styles from '../css/blog.module.css'
import BlogCard from '../components/Blog/BlogCard'
import Title from '../components/Title'
import StyledHero from '../components/StyledHero'

const Blog = (props) => {

	const {currentPage, numPages} = props.pageContext;

	const prevPage = currentPage - 1 === 1? `/blog/` : `/blog/${currentPage - 1}`;
	const nextPage = `/blog/${currentPage + 1}`;
	
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const {data} = props;

	return (

		<Layout>
			<StyledHero img={props.data.bgImage.childImageSharp.fluid} />
			<section className={styles.blog}>
				<Title title="our" subtitle="blog"/>
				<div className={styles.center}>
					{
						data.posts.edges.map(({node}) => {
							return <BlogCard key={node.id}  blog={node} />
						})
					}
				</div>
				
				<section className={styles.links}>

					{ !isFirst&& <Link to={prevPage} className={styles.link}>Previous</Link> }

					{Array.from({ length: numPages }, (_,i) => {
						return (
							<Link key={i} 
							to={ i === 0 ? `/blog/` : `/blog/${i+1}`}
							className={
								i + 1 === currentPage 
								? `${styles.link} ${styles.active}` 
								: `${styles.link}`}>{i + 1}
							</Link>
						) 
					})}

					{ !isLast&&<Link to={nextPage} className={styles.link}>Next</Link> }
						
				</section>

			</section>
		</Layout>
	)
}

export const query = graphql`
	query getPosts($skip:Int!, $limit:Int!) {
		posts: allContentfulPost(limit:$limit, skip:$skip, sort:{fields:published, order:DESC}) {
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
		bgImage: file(relativePath: {eq: "blogBcg.jpeg"}) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`

export default Blog
