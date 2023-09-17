module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2021,
      ecmaFeatures: {
        jsx: true,
        arrowFunctions: true,
      },
      sourceType: 'module',
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': ['error', { jsxSingleQuote: false }],
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error"
    },
  };