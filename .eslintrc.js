module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["airbnb", "plugin:jest/recommended", "plugin:flowtype/recommended"],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
  },
  "rules": {
    "linebreak-style": 0,
    "no-console": 0,
    "indent": [1, 2, {
      "SwitchCase": 1,
    }],
    "global-require": 0,
    "no-underscore-dangle": 0,
    "no-useless-constructor": 1,
    "space-before-function-paren": 1,
    "space-before-blocks": 1,
    "arrow-parens": [2, "always"],
    "no-restricted-syntax": 0,
    "guard-for-in": 0,
    "no-duplicate-imports": 0,
    "no-param-reassign": [1, { "props": false }],
    // React
    "react/jsx-indent": [1, 2],
    "react/prefer-stateless-function": 1,
    "react/no-unused-prop-types": 1,
    "react/jsx-indent-props": [1, 2],
    "react/prop-types": [1, {
      "ignore": [
        "media"
      ]
    }],
    "react/forbid-prop-types": 0,
    "react/sort-comp": [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^handle.+$/',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],
    "react/no-array-index-key": 0,

    // Import
    // "import/extensions": [2, "never", { "svg": "always", "png": "always" }],
    "import/prefer-default-export": 1,

    // jsx-a11y
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/href-no-hash": 0,
  },
  settings: {
    "import/extensions": ['.js', '.jsx'],
    "import/core-modules": [ 'baseStyles', 'rsg-components', 'rsg-codemirror-theme.css', 'styleguide'],
    "import/external-module-folders": [ 'utils' ],
  },
  plugins: [
    "react", "import", "jsx-a11y", "json", "jest", "babel", "flowtype"
  ]
}
