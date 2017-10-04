const path = require('path');

const context = process.cwd();

module.exports = {
  title: 'Material StyleGuide',
  baseStyles: path.resolve(__dirname, './lib/styles.pcss'),
  contextDependencies: [
    path.resolve(context, 'src/components'),
  ],
  getExampleFilename: (componentpath) => path.join(path.dirname(componentpath), 'demo/demo.md'),
  getChangelogFilename: (componentpath) => path.join(path.dirname(componentpath), 'demo/changelog.md'),
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
      sections: [{
        name: 'Welcome',
        content: 'docs/introduction.md',
        sections: [{
          name: 'Example',
          content: 'docs/example.md',
        }],
      }],
    },
    {
      name: 'UI Components',
      components: 'lib/components/[J-Z]*/[J-Z]*.jsx',
    },
  ],
  components: 'lib/components/[A-F]*/[A-F]*.jsx',
  updateWebpackConfig(webpackConfig) {
    const dir = path.resolve(__dirname, 'lib');
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: dir,
        use: 'babel',
      },
      {
        test: /\.pcss$/,
        include: dir,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              sourceMap: true,
              localIdentName: '[path]--[local]',
              context: '/',
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.json$/,
        include: path.dirname(require.resolve('dog-names/package.json')),
        use: 'json',
      }
    );
    return webpackConfig;
  },
};
