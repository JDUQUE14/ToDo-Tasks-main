import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'react', // Clave para React 19
      jsxRuntime: 'automatic',  // Habilita el nuevo JSX transform
    }),
  ],
});