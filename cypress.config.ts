/* eslint-disable import/no-relative-packages */
import './packages/app/load.envs';
import { defineConfig } from 'cypress';

const { NODE_ENV } = process.env;
const PORT = NODE_ENV === 'test' ? 3001 : 3000;

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${PORT}`,
    supportFile: './packages/app/cypress/support/e2e.ts',
    specPattern: './packages/app/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000,
});