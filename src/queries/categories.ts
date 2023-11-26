export const query = {
  query: `
    query {
      allCategory(sort: { position: ASC }) {
        slug {
          current
        }
     	  title
        position
      }
    }
  `
};
