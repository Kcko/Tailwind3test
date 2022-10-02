module.exports = {
    parser: 'postcss-scss',
    plugins: {
        // 'postcss-import': {},
        'postcss-easy-import': { prefix: '_', extensions: ['.css', '.scss'] },
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
    },
};
