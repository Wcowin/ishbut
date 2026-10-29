import { defineConfig } from 'vite';
import { resolve } from 'node:path';
const pages = ['', 'research', 'awards', 'publication', 'patents', 'teaching', 'services'];
// Relative asset URLs support both a domain root and a GitHub Pages project path.
export default defineConfig({base:'./',build:{rollupOptions:{input:Object.fromEntries(pages.map(p=>[p||'home',resolve(p,'index.html')]))}}});
