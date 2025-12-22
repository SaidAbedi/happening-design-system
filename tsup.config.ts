import { defineConfig } from 'tsup';

export default defineConfig({
  // Multiple entry points for subpath exports
  entry: {
    index: 'src/index.ts',
    'tokens/index': 'src/tokens/index.ts',
    'web/index': 'src/web/index.ts',
    'native/index': 'src/native/index.ts',
  },

  // Output formats
  format: ['esm', 'cjs'],

  // Generate declaration files
  dts: true,

  // Clean dist before build
  clean: true,

  // Split chunks for better tree-shaking
  splitting: true,

  // Generate sourcemaps for debugging
  sourcemap: true,

  // Target modern environments
  target: 'es2020',

  // Minify output
  minify: false, // Keep readable for debugging; enable in production if needed

  // Tree shaking
  treeshake: true,

  // External dependencies (don't bundle)
  external: ['react', 'react-native'],

  // Output directory
  outDir: 'dist',

  // Add banner with package info
  banner: {
    js: '/* @my-scope/design-system - Platform-agnostic design tokens */',
  },

  // Watch mode settings (for development)
  watch: false,

  // Fail on warnings
  onSuccess: 'echo "Build complete!"',
});
