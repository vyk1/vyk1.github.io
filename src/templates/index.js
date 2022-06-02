import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { Header, Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import HomepageSidebar from '../sections/HomepageSidebar';
import Footer from '../components/Footer';
import BlogCards from '../sections/BlogCards';

const HomepageSidebarTexts = {
    pt: [
        "Portfólio de",
        "Victoria",
        "Botelho Martins",
        "Olá! Meu nome é Victoria e desenvolvo sistemas para diversos propósitos.",
        "Sou formada em Sistemas para Internet pelo Instituto Federal Farroupilha e sou estudante de Mestrado no Programa de Pós-Graduação em Ciência da Computação na UFSC. Sou desenvolvedora Web apaixonada por JavaScript. Atualmente, trabalho na equipe SAAS.",
        "Próximo",
        "Anterior",
        "Projetos",
    ],
    en: [
        "Victoria",
        "Botelho Martins'",
        "Portfolio",
        "Oi there! I am Victoria and I develop systems for various purposes.",
        "I have a degree in Internet Systems and currently I am a MSc student at the Federal University of Santa Catarina. I am a Web Developer with JavaScript as passion. Currently, I work with the SAAS development team.",
        "Next",
        "Previous",
        "Projects",
    ],
}

const meta = {
    pt: {
        description: "Olá, meu nome é Victoria e sou desenvolvedora web. Bem-vind@ →",
        title: "Portfolio de Victoria",
    },
    en: {
        description: "Oi there, my name is Victoria and I am a web developer. Welcome →",
        title: "Victoria's Portfolio",
    }
}

const IndexPage = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.nodes;
    const { language } = pageContext
    let text = language === 'pt' ? HomepageSidebarTexts.pt : HomepageSidebarTexts.en
    let metaContent = meta[language]
    let baseUrl = language === 'pt' ? '/' : '/en/'

    return (
        <Layout additionalClass={['']}>
            <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest uppercase bg-green-500">
                <Link to={language === 'pt' ? "/en" : '/'}>
                    {language === 'pt' ? "EN" : 'PT'}
                </Link>
            </Header>
            <Helmet>
                <title>{metaContent.title}</title>
                <meta name='language' content={language} />
                <meta
                    name="description"
                    content={metaContent.description}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <HomepageSidebar
                    headerText1={text[0]}
                    headerText2={text[1]}
                    headerText3={text[2]}
                    subheaderText={text[3]}
                    paragraphText={text[4]}
                    list1={language === 'pt' ? "Educação" : "Education"}
                    list2={language === 'pt' ? "Certificações" : "Certifications"}
                />
                <div className="lg:col-span-2 xl:col-span-3 p-5 md:p-10 lg:p-16">
                    <Header
                        level={2}
                        additionalClasses={['mb-5 uppercase !text-2xl md:!text-3xl']}
                    >
                        {text[7]}
                    </Header>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                        <BlogCards posts={posts} language={language} />
                    </div>
                    <Pagination baseUrl={baseUrl} next={text[5]} prev={text[6]} page={pageContext.currentPage} numOfPages={pageContext.numPages} rounded="none" />
                </div>
            </div>
            <Footer additionalClass={['md:hidden']} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}, limit: $limit, skip: $skip) {
            nodes {
                id
                frontmatter {
                    subtitle_br
                    subtitle_en
                    slug
                    title
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.8)
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
