/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  ROOT_DIR: string;
  APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
