export const query = {
  query: `
    query {
      allCategory(sort: { position: ASC }, where: { _: { is_draft: false } }) {
        slug {
          current
        }
     	  title
        position
      }
    }
  `
};
