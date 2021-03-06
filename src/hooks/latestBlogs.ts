import { graphql, useStaticQuery } from 'gatsby';
import {
  // eslint-disable-next-line @typescript-eslint/camelcase
  PostQuery,
} from '../../graphql-types';
import { makePost, Post } from '../types';

/*
 * Get the most recent 4 blog posts
 */
export const latestBlogs = (): Array<Post> => {
  const data: PostQuery = useStaticQuery(graphql`
    query Post {
      allMdx(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
        nodes {
          frontmatter {
            title
            author
          }
          fields {
            slug
          }
          body
        }
      }
    }
  `);
  return data.allMdx.nodes.map(postMdx => makePost(postMdx));
};
