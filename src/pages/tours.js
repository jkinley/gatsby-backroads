import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Tours from '../components/Tours/Tours'

const tours = ({data}) => {
    return (
        <Layout>
         	<StyledHero img={data.bgImage.childImageSharp.fluid}>
       </StyledHero>
			 <Tours />
        </Layout>
    )
}

export default tours

export const query = graphql`
	query {
		bgImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`