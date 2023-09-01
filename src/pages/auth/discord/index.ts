import type { APIRoute } from "astro";

import { discordAuth } from "@/lib/auth";

export const GET: APIRoute = async (context) => {
  const [url, state] = await discordAuth.getAuthorizationUrl();

  context.cookies.set("discord_oauth_state", state, {
    httpOnly: true,
    secure: !import.meta.env.DEV,
    path: "/",
    maxAge: 60 * 60,
  });

  return context.redirect(url.toString(), 302);
};
