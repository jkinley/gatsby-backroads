import React from "react";
//import { Link } from "gatsby";
import Layout from "../components/Layout";
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import BlogList from '../components/Blog/BlogList'

const blog = ({ data }) => {
	return (
		<Layout>
			<StyledHero img={data.bgImage.childImageSharp.fluid} />
			<BlogList />
		</Layout>
	);
};

export default blog;

export const query = graphql`
	query {
		bgImage: file(relativePath: {eq: "blogBcg.jpeg"}) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`