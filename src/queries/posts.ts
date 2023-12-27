export function query(categorySlug: string) {
  return {
    query: `query ($slug: String!) {
      allPost(
        where: {
          category: { slug: { current: { eq: $slug } } }
          _: { is_draft: false }
        }
      ) {
        title
        slug {
          current
        }
        _updatedAt
      }
    }
      `,
    variables: {
      slug: categorySlug
    }
  };
}
