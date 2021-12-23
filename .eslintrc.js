module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    // eslint-config-prettier 的缩写
    // 'prettier',
  ],
  // vue 单页面解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    camelcase: process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    // 'prettier/prettier': 'error',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never',
      },
    ],
    'vue/valid-v-model': 'off',
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    // 'vue/no-multiple-template-root': 0,
    // 此配置是因为组件名字过短造成 template 飘红
    'vue/multi-word-component-names': 'off',
    //   [
    //   'error',
    //   {
    //     // 排除一些 过短的命名
    //     ignores: ['index', 'home'],
    //   },
    // ],
    // 'vue/attribute-hyphenation': 0,
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-parsing-error': 0,
    'vue/no-v-model-argument': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          // 'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'no-useless-catch': 0,
    'no-prototype-builtins': 0,
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
