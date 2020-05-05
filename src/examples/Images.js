import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import img from "../images/connectBcg.jpeg";
import Img from 'gatsby-image';

const getImages = graphql`
	query Images {
		fixed:file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fixed(width: 300, height: 300, grayscale: true) {
					...GatsbyImageSharpFixed
				}
			}
		}
		fluid:file(relativePath: { eq: "blogBcg.jpeg" }) {
			childImageSharp {
				fluid {
				...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const Images = () => {
	const data = useStaticQuery(getImages);
	console.log(data)
	return (
		<Wrapper>
			<article>
				<h3>Basic Image</h3>
				<img src={img} className="basic" alt=""/>
			</article>
			<article>
				<h3>Fixed Image</h3>
				<Img fixed={data.fixed.childImageSharp.fixed} alt=""/>
			</article>
			<article>
				<h3>Fluid Image</h3>
				<Img fluid={data.fluid.childImageSharp.fluid} alt=""/>
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	text-align: center;
	text-transform: capitalize;
	width: 80vw;
	margin: 0 auto 10rem auto;
	.basic {
		width: 100%;
	}
	article {
		border: 1px solid blue;
		padding: 1rem;
		margin: 1rem;
	}
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}
`;

export default Images;
