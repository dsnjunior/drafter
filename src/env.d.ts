/// <reference types="astro/client" />

/// <reference types="lucia" />
declare namespace App {
  interface Locals {
    auth: import("lucia").AuthRequest;
  }
}

declare namespace Lucia {
  type Auth = import("./lib/auth").Auth;
  type DatabaseUserAttributes = {
    avatar_url: string | null;
    display_name: string | null;
    discord_username: string;
  };
  type DatabaseSessionAttributes = {};
}

interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  readonly DATABASE_AUTH_TOKEN: string | undefined;

  readonly DISCORD_CLIENT_ID: string;
  readonly DISCORD_CLIENT_SECRET: string;
  readonly DISCORD_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
