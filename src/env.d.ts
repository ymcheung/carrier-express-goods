/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_VITE_SUPABASE_URL: string;
  readonly PUBLIC_VITE_SUPABASE_ANON_KEY: string;
  readonly PUBLIC_VITE_REDIRECT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
