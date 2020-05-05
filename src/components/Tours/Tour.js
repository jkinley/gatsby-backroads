import React from "react";
import Image from "gatsby-image";
import styles from "../../css/tour.module.css";
import { FaMap } from "react-icons/fa";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from 'gatsby';

const getDefaultImage = graphql`
	query defaultImage {
		defaultImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const Tour = ({ tour }) => {

	const {defaultImage} = useStaticQuery(getDefaultImage);
	const defaultImg = defaultImage.childImageSharp.fluid;

	const { name, price, country, days, slug, images } = tour;

	let featuredImg = images ? images[0].fluid : defaultImg;


	return (
		<article className={styles.tour}>
			<div className={styles.imgContainer}>
				<Image fluid={featuredImg} className={styles.img} alt="tour" />
				<Link className={styles.link} to={`/tours/${slug}`}>
					details
				</Link>
			</div>
			<div className={styles.footer}>
				<h3>{name || "default name"}</h3>

				<div className={styles.info}>
					<h4 className={styles.country}>
						<FaMap className={styles.icon} />
						{country || "default country"}
					</h4>

					<div className={styles.details}>
						<h6>{days || "default days"} Days</h6>
						<h6>From ${price || "default price"}</h6>
					</div>
				</div>
			</div>
		</article>
	);
};

Tour.propTypes = {
	tour: PropTypes.shape({
		name: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		days: PropTypes.number.isRequired,
		images: PropTypes.arrayOf(PropTypes.object).isRequired,
	}),
};

export default Tour;
