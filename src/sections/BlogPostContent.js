import { Header } from 'flotiq-components-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const bars = {
    pt: [
        "Sobre",
        "Detalhes",
        "Patrocínio",
    ],
    en: [
        "About",
        "Details",
        "Sponsored by",
    ],
}

const Content = ({ title, content }) => (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">{title}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{content}</dd>
    </div>
)

const ContentLink = ({ title, link }) => (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">{title}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <a href={link} className='underline decoration-indigo-500 columns-4 pt-2' target="_blank" rel="noopener noreferrer">
                {link}
            </a>
        </dd>
    </div>
)

const BlogPostContent = ({ post, language }) => (
    <div>
        <div className="px-5 md:px-10 lg:px-16 py-8">
            <div className="flex flex-wrap items-center justify-center font-light lg:space-x-20">
                <div className="basis-full lg:basis-auto flex flex-col lg:flex-row flex-wrap
                    items-center justify-center lg:justify-start lg:space-x-8 mb-5 lg:mb-0">
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <Header
                            alignement="center"
                            additionalClasses={['pt-10 pb-10 uppercase text-center lg:text-left']}
                        >
                            {post.frontmatter.title}
                        </Header>
                        {/* <h3 className="text-lg leading-6 font-medium text-gray-900">{post.frontmatter.title}</h3> */}
                        <a href={post.frontmatter.site} target="_blank" rel="noopener noreferrer">
                            <GatsbyImage image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt={post.frontmatter.title} className="w-100" />
                        </a>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <Content title={bars[language][0]} content={language === 'pt' ? post.frontmatter.subtitle_br : post.frontmatter.subtitle_en} />
                            {post.frontmatter.excerpt_br && post.frontmatter.excerpt_en && <Content title={bars[language][1]} content={language === 'pt' ? post.frontmatter.excerpt_br : post.frontmatter.excerpt_en} />}
                            <ContentLink title="Site" link={post.frontmatter.site} />
                            {post.frontmatter.git && <ContentLink title="Git" link={post.frontmatter.git} />}
                            {post.frontmatter.sponsorships_br && post.frontmatter.sponsorships_en && <Content title={bars[language][2]} content={language === 'pt' ? post.frontmatter.sponsorships_br : post.frontmatter.excerpt_en} />}
                            {post.frontmatter.colabs && <Content title={"Colabs"} content={post.frontmatter.colabs} />}
                            {post.frontmatter.stacks && <Content title={"Stacks"} content={post.frontmatter.stacks.join(", ")} />}
                            {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div> */}
                        </dl>
                    </div>
                </div>

                <div />
            </div>
            <div className="mt-4 mx-0 md:mt-0 basis-full lg:basis-auto
                flex flex-wrap items-center justify-center lg:justify-end space-x-6 
                text-primary font-normal"
            >
            </div>
        </div>
    </div>
);

export default BlogPostContent;
