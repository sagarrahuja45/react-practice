// graphql.config.js
module.exports = {
  projects: {
    app: {
      schema: ['data/schema.graphql'],
      documents: [
        '**/*.{graphql,js,ts,jsx,tsx}',
        '**/*.fragment.{graphql,js,ts,jsx,tsx}',
      ],
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:49333',
          },
        },
      },
    },
  },
};
