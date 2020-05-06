import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import {Link} from 'gatsby'


const BlogCard = ({blog}) => {
	const {title, slug, image, published} = blog;
	return (
		<article className={styles.blog}>
				<div className={styles.imgContainer}>
				<Image className={styles.img} fluid={image.fluid} alt=""/>
				<Link className={styles.link} to={`posts/${slug}`}>read more</Link>
				<h6 className={styles.date}>{published}</h6>
			</div>
			<div className={styles.footer}>
				<h4>{title}</h4>
			</div>
		</article>
	)
}

export default BlogCard
