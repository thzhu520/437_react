import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import checker from 'vite-plugin-checker';

export default {
  plugins: [
    react(),
    tailwindcss(),
    checker({ typescript: true }),
  ],
};
