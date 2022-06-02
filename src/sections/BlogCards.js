import React from 'react';
import { Link } from 'gatsby';
import Card from '../components/Card';

const BlogCards = ({ posts, language }) => (
        language === 'pt' ?
        <>
            {posts.map((post) => (
                <Link to={`/pt/${post.frontmatter.slug}`} key={post.frontmatter.slug}>
                    <Card
                        key={post.id}
                        image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                        tags={post.frontmatter.stacks}
                        title={post.frontmatter.title}
                        excerpt={post.frontmatter.subtitle_br}
                    />
                </Link>
            ))}
        </>
        :
        <>
            {posts.map((post) => (
                <Link to={`/en/${post.frontmatter.slug}`} key={post.frontmatter.slug}>
                    <Card
                        key={post.id}
                        image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                        tags={post.frontmatter.stacks}
                        title={post.frontmatter.title}
                        excerpt={post.frontmatter.subtitle_en}
                    />
                </Link>
            ))}
        </>
);

export default BlogCards;
