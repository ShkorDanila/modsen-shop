import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run modsen-shop:serve',
        production: 'nx run modsen-shop:preview',
      },
      ciWebServerCommand: 'nx run modsen-shop:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
