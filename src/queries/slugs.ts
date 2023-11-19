export function query(slug: string) {
  return {
    query: `query ($slug: String!) {
      allPost(where: {category: {slug: {current: {eq: $slug}}}}) {
        title,
        description,
        slug {
          current
        }
        tags {
          name
        },
        _updatedAt,
        _createdAt
      }
    }
      `,
    variables: {
      slug
    }
  };
}
