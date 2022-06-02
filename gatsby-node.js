<<<<<<< HEAD
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    
    const index = path.resolve('./src/templates/index.js');
    const blogPost = path.resolve('./src/templates/blog-post.js');

    const result = await graphql(`
      query GetBlogPosts {
        allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
          edges {
            node {
                frontmatter {
                  slug
              }
            }
          }
        }
      }
`);

    if (result.errors) {
        throw result.errors;
    }
    const posts = result.data.allMarkdownRemark.edges;

    // Create paginated index
    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/pt/' : `/pt/${i + 1}`,
            component: index,
            context: {
                language: 'pt',
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: index,
            context: {
                language: 'pt',
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
        createPage({
            path: i === 0 ? '/en/' : `/en/${i + 1}`,
            component: index,
            context: {
                language: 'en',
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

    // Create blog posts pages.
    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: 'pt/' + post.node.frontmatter.slug,
            component: blogPost,
            context: {
                language: 'pt',
                slug:  post.node.frontmatter.slug,
                previous,
                next,
            },
        });

        createPage({
            path: 'en/' + post.node.frontmatter.slug,
            component: blogPost,
            context: {
                language: 'en',
                slug:  post.node.frontmatter.slug,
                previous,
                next,
            },
        });
    });
};
=======
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
>>>>>>> 2d3c98363588059a05c8e4b9f60489cb6ce308b5
