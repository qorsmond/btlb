import StyleDictionary from 'style-dictionary';
import config from '../style-dictionary.config.js';

console.log('🎨 Building BTLB design tokens...\n');

const sd = new StyleDictionary(config);

try {
  await sd.buildAllPlatforms();
  console.log('\n✅ Tokens built successfully!');
  console.log('   - dist/primitives.css');
  console.log('   - dist/semantic.css');
  console.log('   - dist/tokens.css');
} catch (error) {
  console.error('❌ Error building tokens:', error);
  process.exit(1);
}
