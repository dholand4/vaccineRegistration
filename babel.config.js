module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./'],
        alias: {
          '~': './src',
          '@src': './src',
        },
        extensions: ['.js', '.ios.js', '.android.js', '.svg'],
      },
    ],
  ],
};
