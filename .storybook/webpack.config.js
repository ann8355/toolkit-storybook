module.exports = function({ config }) {
    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre'
    });
    config.module.rules.push({
        test: /\.vue$/,
        loader: 'storybook-addon-vue-info/loader',
        enforce: 'post'
    });
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
        ]
    });
    return config;
};
