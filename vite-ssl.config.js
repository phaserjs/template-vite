import { defineConfig } from 'vite';
import mkcert from'vite-plugin-mkcert';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
    },
    server: {
        https: true
    },
    plugins: [ mkcert() ]
});