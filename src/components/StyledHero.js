import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby';

const getDefaultBgImage = graphql`
	query defaultBgImage {
		defaultBgImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(quality:90,maxWidth:4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const StyledHero = ({img, className, children, home}) => {

	const {defaultBgImage} = useStaticQuery(getDefaultBgImage);
	const defaultBgImg = defaultBgImage.childImageSharp.fluid;
	
	return (
		<BackgroundImage className={className} fluid={img || defaultBgImg } home={home}>
			{children}
		</BackgroundImage>
    )
}

export default styled(StyledHero)`
	min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vw")};
	background: ${props => (props.home ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))" : "none")};
	background-position: center center;
	background-size: cover;
	opacity: 1 !important;
	display: flex;
	justify-content: center;
	align-items: center;
`