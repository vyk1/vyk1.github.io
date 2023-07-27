import { useStaticQuery, graphql } from "gatsby"

export const QueryProjects = () => {
    const { allMdx } = useStaticQuery(
    graphql`
    query {
        allMdx(filter: {frontmatter: {type: {eq: "project"}}}) {
          nodes {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    `
    )
    return allMdx
}