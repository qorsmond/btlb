import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';

export default {
  input: 'src/index.css',
  output: {
    file: 'dist/behaviors.css',
    format: 'es'
  },
  plugins: [
    postcss({
      extract: true,
      minimize: false,
      plugins: [
        postcssImport()
      ]
    })
  ]
};
