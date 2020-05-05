import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Contact from '../components/Contact/Contact'

const contact = ({data}) => {
    return (
        <Layout>
            	<StyledHero img={data.bgImage.childImageSharp.fluid} />
							<Contact />
        </Layout>
    )
}

export default contact


export const query = graphql`
	query {
		bgImage: file(relativePath: {eq: "connectBcg.jpeg"}) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`