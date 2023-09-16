import { defineMarkdocConfig, nodes } from '@astrojs/markdoc/config';
// import * as nodes from './src/markdoc/config/nodes';
// import * as tags from './src/markdoc/config/tags';

// const config = defineMarkdocConfig({
//   nodes,
//   tags
// })
// export default config;

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document, // Apply defaults for other options
      render: null, // default 'article'
    },
  },
});

// export default defineMarkdocConfig({
//   nodes
//   // tags
// });
