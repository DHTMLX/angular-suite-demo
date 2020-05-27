module.exports = {
  stories: ['../src/**/*.stories.ts'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts)$/,
      loader: require.resolve('awesome-typescript-loader'),
    });
    config.resolve.extensions.push('.ts');
    return config;
  },
};
