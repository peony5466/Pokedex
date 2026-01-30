import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Permet d'utiliser 'describe', 'it', 'expect' sans les importer partout [1]
    globals: true, 
    // Indique à Vitest d'utiliser jsdom pour simuler un navigateur [1]
    environment: 'jsdom', 
    // Indique où se trouve le fichier de nettoyage automatique [1]
    setupFiles: ['./src/setupTests.js'], 
  },
});