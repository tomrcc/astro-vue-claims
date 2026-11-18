import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import editableRegions from "@cloudcannon/editable-regions/astro-integration";

export default defineConfig({
  integrations: [
    editableRegions(),
    vue({
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith("editable-") },
      },
    }),
  ],
});
