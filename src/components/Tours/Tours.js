import React from 'react'
import TourList from './TourList'
import { useStaticQuery, graphql } from 'gatsby'

const getToursData = graphql`
	query {
		tours: allContentfulTour{
			totalCount
			edges {
				node{
					name
					price
					slug
					country
					contentful_id
					days
					start
					images{
						fluid{
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`

const Tours = () => {
	const {tours} = useStaticQuery(getToursData);
	return (
		<TourList tours={tours} />
	)
}

export default Tours
