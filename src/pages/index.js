import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import FeaturedTours from '../components/Home/FeaturedTours'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'

export default ({data}) => (
    <Layout>
			<SEO title="Home" description="the home page description" />
       <StyledHero home="true" img={data.bgImage.childImageSharp.fluid}>
            <Banner title="continue exploring" info="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.">
            <Link to="/tours" className="btn-white">explore tours</Link>
            </Banner>
       </StyledHero>
       <About />
       <Services />
			 <FeaturedTours />
    </Layout>
)

export const query = graphql`
	query {
		bgImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
			childImageSharp {
				fluid(quality:90,maxWidth:4160) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`