import * as path from 'path'
import {defineConfig} from 'vite'
/** @type {import('vite').UserConfig} */
export default defineConfig({
    mode: 'development',
    assetsInclude:'**/*.html',
    plugins:[],
    build: {
        outDir: 'dist-dev',
        sourcemap:'inline' ,
        lib: {
            fileName:"[name]",
            entry:'index.js',
            formats:['es']
        },
        rollupOptions:{
            external:['three','three/examples/jsm/'],
            input:{
                'mindar-image': './src/image-target/index.js',
                
                'mindar-image-three': './src/image-target/three.js',
                'mindar-face': './src/face-target/index.js',
                
                'mindar-face-three': './src/face-target/three.js',
            }
        }
    },
   
});