/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	/* Your site config here */

	siteMetadata: {
		title: "BackRoads",
		description:
			"Explore worldwide tours & discover what makes them unique. Say yes to adventure!",
		author: "jkinley",
		data: {
			name: "Jeff Kinley",
			age: 46,
			birthday: "23 Oct 1973",
		},
		twitterUsername: "@jlkinley",
		image: '/defaultBcg.jpeg',
		siteUrl: 'https://youthful-gates-25d716.netlify.app',
	},

	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-transition-link`,
		`gatsby-plugin-playground`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
 				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			},
		},
	],
};
