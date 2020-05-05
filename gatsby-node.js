const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const { data } = await graphql(`
		{
			tours: allContentfulTour {
				edges {
					node {
						slug
					}
				}
			}
			posts: allContentfulPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);


	data.tours.edges.forEach(({node}) => {
		createPage({
			path:`tours/${node.slug}`,
			component:path.resolve("./src/templates/tour-template.js"),
			context: {
				slug: node.slug,
			},
		})
	})

	data.posts.edges.forEach(({node}) => {
		createPage({
			path: `posts/${node.slug}`,
			component: path.resolve("./src/templates/blog-template.js"),
			context: {
				slug: node.slug,
			}
		})
	})


	// total posts
	const totalPosts = data.posts.edges;
	// posts per page
	const postsPerPage = 5;
	// How many pages 
	const numPages = Math.ceil(totalPosts.length / postsPerPage);

	Array.from({length: numPages}).forEach((_,i) => {
		createPage({
			path: i === 0 ? `/blogs/` : `/blogs/${i+1}`,
			component: path.resolve("./src/templates/blog-list-template.js"),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		})
	})


};


