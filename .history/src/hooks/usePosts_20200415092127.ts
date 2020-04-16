import { graphql, useStaticQuery } from 'gatsby';
import { PostQuery } from '../../graphql-types';

interface Post {
  title: string;
  author: string;
  slug: string;
  image: any;
  excerpt: string;
}

const usePosts = (): Array<Post> => {
  const data: PostQuery = useStaticQuery(graphql`
    query Post {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post =>
    post && post.frontmatter ?
    {
    title: (post && post.frontmatter && post.frontmatter.title) || '',
    // author: post.frontmatter.author,
    // slug: post.frontmatter.slug,
    // image: post.frontmatter.image,
    // excerpt: post.excerpt,
  }));
};
export default usePosts;
