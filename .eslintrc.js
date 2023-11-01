module.exports = {
  'env': {
    'es6': true,
    'mocha': true,
    'node':true,
    'browser': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    '$': true,
    '$$': true,
    'browser': true,
    'expect': true,
    'downloadDir':true,
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
    }
  },
  'plugins': [
    'mocha',
    'import'
  ],
  'rules': {
    'no-console': 'off',
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'arrow-parents': [0, 'as-needed'],
    'require-jsdoc': 'off',
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'max-len': 'off',
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'never'],
    'block-spacing': ['warn', 'always'],
    'indent': ['error', 2],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'import/no-unresolved': [ 2,
      {
        'commonjs': true,
        'amd': false,
        'caseSensitive': true
      }
    ]
  },
}
