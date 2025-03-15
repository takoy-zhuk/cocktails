module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    plugins: ['react', 'react-hooks', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                tabWidth: 2,
                useTabs: false,
                printWidth: 80,
                singleQuote: true,
                trailingComma: 'es5',
            },
        ],
        'react/jsx-indent': ['warn', 2],
        'react/jsx-indent-props': ['warn', 2],
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
    },
};
