import * as path from 'path'
import {defineConfig} from 'vite'
/** @type {import('vite').UserConfig} */
export default defineConfig({
    mode: 'development',
    assetsInclude:'**/*.html',
    plugins:[],
    build: {
        outDir: 'dist',
        lib: {
            fileName:"[name].prod",
            entry:'index.js',
            formats:['es','cjs']
        },
        rollupOptions:{
            external:['three'],
            input:{
                'mindar-image': './src/image-target/index.js',
                'mindar-image-three': './src/image-target/three.js',
                'mindar-face': './src/face-target/index.js',
                'mindar-face-three': './src/face-target/three.js',
            }
        }
    },
   
});