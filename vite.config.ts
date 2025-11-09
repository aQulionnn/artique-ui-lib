import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'ArtiqueUI',
            formats: ['es', 'umd'],
            fileName: (format) => {
                if (format === 'es') return 'artique-ui.es.js';
                if (format === 'umd') return 'artique-ui.umd.js';
                return `artique-ui.${format}.js`;
            }
        },
        rollupOptions: {
            external: ['lit'],
            output: {
                globals: {
                    lit: 'Lit'
                }
            }
        }
    }
});