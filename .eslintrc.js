module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/no-unused-class-component-methods': 0,
    'no-unused-vars': 0,
    'spaced-comment': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-indent': 0,
    'import/no-duplicates': 0,
    'react/jsx-indent-props': 0,
    'react/forbid-prop-types': 0,
    indent: 0,
    semi: 0,

  },
};
