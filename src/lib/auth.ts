import { lucia as luciaBuilder } from "lucia";
import { astro } from "lucia/middleware";
import { libsql } from "@lucia-auth/adapter-sqlite";
import { discord } from "@lucia-auth/oauth/providers";

import { client } from "@/lib/db";

export const auth = luciaBuilder({
  env: import.meta.env.DEV ? "DEV" : "PROD",
  middleware: astro(),
  sessionCookie: {
    expires: false,
  },
  adapter: libsql(client, {
    user: "user",
    key: "user_key",
    session: "user_session",
  }),

  getUserAttributes: (data) => {
    return {
      discordUsername: data.discord_username,
      displayName: data.display_name,
      avatarUrl: data.avatar_url,
    };
  },
});

export const discordAuth = discord(auth, {
  clientId: import.meta.env.DISCORD_CLIENT_ID,
  clientSecret: import.meta.env.DISCORD_CLIENT_SECRET,
  redirectUri: import.meta.env.DISCORD_REDIRECT_URI,
});

export type Auth = typeof auth;
