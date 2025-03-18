'use strict';

module.exports = {
  singleQuote: true,
  overrides: [
    {
      files: ['*.html', '*.hbs'],
      options: {
        singleQuote: false,
        parser: 'glimmer',
      },
    },
    {
      parser: 'ember-template-tag',
      files: '*.{js,ts,gjs,gts}',
      options: {
        singleQuote: true,
        templateSingleQuote: false,
      },
    },
    {
      files: '*.{css,scss}',
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.java'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.md'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.sql'],
      options: {
        language: 'transactsql',
        keywordCase: 'upper',
        paramTypes: JSON.stringify({
          numbered: ['?'],
        }),
      },
    },
  ],
};
