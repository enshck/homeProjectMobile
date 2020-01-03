  
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    '@react-native-community',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'arrow-parens': 0,
    'eol-last': 0,
    'react/jsx-wrap-multiline': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'default-case': 0,
    'no-case-declarations': 0,
    'react/no-unused-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'arrow-body-style': 0,
    'react/jsx-wrap-multilines': 0,
    'no-mixed-operators': 0,
    'function-paren-newline': 0,
    'no-return-assign': 0,
    'no-confusing-arrow': 0,
    'prefer-default-export': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    indent: 0,
    'no-unused-vars': 'error',
    curly: ['error', 'all'],
    'object-curly-newline': 0,
    'react/no-did-mount-set-state': 0,
    'graphql/template-strings': [
      'error',
      {
        // Import default settings for your GraphQL client. Supported values:
        // 'apollo', 'relay', 'lokka', 'literal'
        env: 'apollo',

        // Import your schema JSON here
        schemaJson: require(__dirname + '/graphql/schema.json'),

        // OR provide absolute path to your schema JSON
        // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),

        // tagName is gql by default
      },
    ],
  },
  globals: {
    __DEV__: false,
  },
  plugins: ['graphql', 'react'],
};