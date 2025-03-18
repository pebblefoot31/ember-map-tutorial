'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    //ember-cli-build.js
    babel: {
      plugins: [
        require.resolve('ember-concurrency/async-arrow-task-transform'),
      ],
    },
  });

  app.import('dist/assets/tests.js', {
    type: 'test', // Ensure it's only included in the test environment
  });

  return app.toTree();
};
