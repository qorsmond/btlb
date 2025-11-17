import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';

export default [
  // Full bundle
  {
    input: 'src/index.css',
    output: {
      file: 'dist/btlb.css',
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
  },
  // Minified bundle
  {
    input: 'src/index.css',
    output: {
      file: 'dist/btlb.min.css',
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        plugins: [
          postcssImport()
        ]
      })
    ]
  }
];
