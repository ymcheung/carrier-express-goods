export function query(categorySlug: string) {
  return {
    query: `query ($slug: String!) {
      allPost(where: {category: {slug: {current: {eq: $slug}}}}) {
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
