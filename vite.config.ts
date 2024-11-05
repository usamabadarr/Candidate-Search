// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   envDir: './environment',
//   plugins: [react()],
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 3000,  
    host: '0.0.0.0',  
  },
});
