module.exports = {
    plugins: {
        'postcss-sorting': {
            order: ['custom-properties', 'declarations'],
            'properties-order': 'alphabetical',
        },
    },
}
