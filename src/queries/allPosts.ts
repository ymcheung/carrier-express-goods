export const query = {
  query: `
    query {
      allPost (
        where: {
          _: { is_draft: false }
        }
      ) {
        cover {
          asset {
            url
          }
        }
        slug {
          current
        }
        title
        tags {
          name
        }
        description
        content
        brand
        category {
          title
          slug {
            current
          }
        }
        links {
          title
          href
        }
        price {
          currency {
            name
          }
          amount
          about
        }
        acquired {
          year
          place
          before
        }
        tags {
          title
        }
        made
        views
        likes
        _updatedAt
        _createdAt
      }
    }
  `
};
