import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import BlogPostSidebar from '../sections/BlogPostSidebar';
import BlogPostContent from '../sections/BlogPostContent';
import Footer from '../components/Footer';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const { language } = pageContext
    let baseTitle = language === 'pt' ? 'Projeto: ' : 'Project: '

    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <meta name='language' content={language} />
                <title>{baseTitle + post.frontmatter.title}</title>
                <meta
                    name="description"
                    content={language === 'en' ? 'About: ' + post.frontmatter.excerpt_en : 'Sobre: ' + post.frontmatter.excerpt_br}
                />
                <meta
                    name='author'
                    content='Victoria Botelho Martins'
                />
                <meta
                    name='keywords'
                    content='Victoria Botelho Martins, Desenvolvedora Web, Software, Unfold Software Development, portifolio, projetos, sistemas, Victoria, Botelho, Martins, dev, web dev, fullstack, Sistemas'
                />
            </Helmet>
            <div className="flex flex-wrap">
                <div className="flex flex-col md:fixed w-full md:w-[130px]">
                    <BlogPostSidebar
                        additionalClass={['w-full md:basis-auto md:w-[130px]']}
                    />
                </div>

                <div className="basis-full md:basis-auto md:pl-[130px]">
                    <BlogPostContent
                        language={language}
                        post={post}
                        additionalClass={['']}
                    />
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark( frontmatter: { slug: { eq: $slug } } ) {
            id
            frontmatter {
                title
                subtitle_br
                subtitle_en
                sponsorships_br
                sponsorships_en
                excerpt_br
                excerpt_en
                site
                git
                stacks
                colabs
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(width:200)
                    }
                }
            }
        }
    }
`;

export default BlogPostTemplate;
