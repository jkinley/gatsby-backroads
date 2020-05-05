import React from "react";
import Title from "../Title";
import styles from "../../css/about.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const getAboutImage = graphql`
	query aboutImage {
		aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(maxWidth:600) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const About = () => {
	const {aboutImage} = useStaticQuery(getAboutImage);
	//console.log({aboutImage})

	return (
		<section className={styles.about}>
			<Title title="about" subtitle="us" />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
				<Img fluid={aboutImage.childImageSharp.fluid} alt="awesome landscape"
					/>
				</article>

				<article className={styles.aboutInfo}>
					<h4>explore the difference</h4>
					<p>
						Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
						Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies
						vehicula ut id elit.
					</p>

					<p>
						Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
						vestibulum. Etiam porta sem malesuada magna mollis euismod. Cum
						sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus.
					</p>
					<button type="button" className="btn-primary">
						Read More
					</button>
				</article>
			</div>
		</section>
	);
};

export default About;
