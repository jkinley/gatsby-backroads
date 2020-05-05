import React from "react";
import Tour from "../Tours/Tour";
import { useStaticQuery, graphql } from "gatsby";
import Title from "../Title";
import styles from "../../css/items.module.css";
import { Link } from "gatsby";

const getFeaturedTours = graphql`
	query {
		featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
			totalCount
			edges {
				node {
					name
					price
					slug
					country
					contentful_id
					days
					images {
						fluid {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`;

const FeaturedTours = () => {
	const response = useStaticQuery(getFeaturedTours);
	const tours = response.featuredTours.edges;
	//console.log(tours);

	return (
		<section className={styles.tours}>
			<Title title="featured" subtitle="tours" />
			<div className={styles.center}>
				{tours.map(({ node }) => {
					return <Tour key={node.contentful_id} tour={node} />;
				})}
			</div>
			<Link to="/tours" className="btn-primary">
				all tours
			</Link>
		</section>
	);
};

export default FeaturedTours;
