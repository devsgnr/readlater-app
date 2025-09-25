import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { SendResetPasswordEmail, SendVerifyEmail } from "./email-client";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./prisma-client";

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET!,
      prompt: "select_account",
    },
    twitter: {
      clientId: process.env.BETTER_AUTH_TWITTER_CLIENT_ID!,
      clientSecret: process.env.BETTER_AUTH_TWITTER_CLIENT_SECRET!,
    },
  },
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await SendResetPasswordEmail({
        email: user.email,
        name: user.name,
        url,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    expiresIn: 3600 * 12, // Expires in 12 hours
    sendVerificationEmail: async ({ user, url }) => {
      await SendVerifyEmail({ email: user.email, name: user.name, url });
    },
  },
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  plugins: [nextCookies()],
  trustedOrigins: [
    // Local Development Server
    "http://localhost:3002",
    "http://127.0.0.1:3002",
    // Cloudflare Production Domain
    "https://app.readlater.fyi",
  ],
});
