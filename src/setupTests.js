import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Nettoie le DOM après chaque test pour éviter les pollutions [1]
afterEach(() => {
  cleanup();
});