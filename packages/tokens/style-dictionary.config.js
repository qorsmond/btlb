import StyleDictionary from 'style-dictionary';

// Custom format for CSS variables wrapped in @layer
StyleDictionary.registerFormat({
  name: 'css/variables-layered',
  format: function({ dictionary, options, file }) {
    const layer = options.layer || 'tokens';
    const selector = options.selector || ':root';
    const { outputReferences } = options;

    // Helper to format shadow tokens
    const formatShadow = (token) => {
      if (token.$type === 'shadow' && typeof token.original.$value === 'object') {
        const { offsetX, offsetY, blur, spread, color } = token.original.$value;
        return `${offsetX} ${offsetY} ${blur} ${spread} ${color}`;
      }
      return token.value;
    };

    // Helper to format cubic-bezier
    const formatCubicBezier = (token) => {
      if (token.$type === 'cubicBezier' && Array.isArray(token.original.$value)) {
        return `cubic-bezier(${token.original.$value.join(', ')})`;
      }
      return token.value;
    };

    // Helper to format font family arrays
    const formatFontFamily = (token) => {
      if (token.$type === 'fontFamily' && Array.isArray(token.original.$value)) {
        return token.original.$value.map(f => f.includes(' ') ? `"${f}"` : f).join(', ');
      }
      return token.value;
    };

    // Format each token value
    const formatValue = (token) => {
      // Get the original value from the token
      const origValue = token.original && token.original.$value !== undefined
        ? token.original.$value
        : token.value;

      // Check if we should output a reference
      if (outputReferences && typeof origValue === 'string' && origValue.includes('{')) {
        // Extract the reference and convert to CSS var
        const ref = origValue.replace(/\{(.+?)\}/g, (_, path) => {
          return `var(--${path.replace(/\./g, '-')})`;
        });
        return ref;
      }

      if (token.$type === 'shadow') return formatShadow(token);
      if (token.$type === 'cubicBezier') return formatCubicBezier(token);
      if (token.$type === 'fontFamily') return formatFontFamily(token);

      // Return the original value or the computed value
      return origValue !== undefined ? origValue : token.value;
    };

    const variables = dictionary.allTokens
      .map(token => `  --${token.name}: ${formatValue(token)};`)
      .join('\n');

    return `@layer ${layer} {\n  ${selector} {\n${variables}\n  }\n}\n`;
  }
});

// Custom transform for kebab-case names
StyleDictionary.registerTransform({
  name: 'name/cti/kebab',
  type: 'name',
  transform: (token) => {
    return token.path.join('-');
  }
});

export default {
  log: {
    verbosity: 'verbose'
  },
  source: ['tokens/**/*.json'],

  platforms: {
    css: {
      transforms: ['name/cti/kebab'],
      buildPath: 'dist/',

      files: [
        {
          destination: 'primitives.css',
          format: 'css/variables-layered',
          filter: (token) => {
            return token.filePath.includes('primitives/');
          },
          options: {
            layer: 'primitives',
            selector: ':root',
            outputReferences: false
          }
        },
        {
          destination: 'semantic.css',
          format: 'css/variables-layered',
          filter: (token) => {
            return token.filePath.includes('semantic/');
          },
          options: {
            layer: 'semantic',
            selector: ':root',
            outputReferences: true
          }
        },
        {
          destination: 'tokens.css',
          format: 'css/variables-layered',
          options: {
            layer: 'tokens',
            selector: ':root',
            outputReferences: true
          }
        }
      ]
    }
  }
};
