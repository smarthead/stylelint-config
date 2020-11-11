module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
    ],
    rules: {
        indentation: 4,

        'no-descending-specificity': null,
    },
};
