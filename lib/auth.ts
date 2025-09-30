import { Polar } from "@polar-sh/sdk";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { polar, checkout } from "@polar-sh/better-auth";
import { SendResetPasswordEmail, SendVerifyEmail } from "./email-client";
import { nextCookies } from "better-auth/next-js";
import { lastLoginMethod } from "better-auth/plugins";
import { prisma } from "./prisma-client";

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
});

export const auth = betterAuth({
  account: {
    accountLinking: {
      enabled: true,
    },
  },
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
  plugins: [
    lastLoginMethod(),
    nextCookies(),
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          authenticatedUsersOnly: true,
          products: [
            {
              productId: "c5f5a69e-2042-493b-9093-6fe0fdbe9ac8",
              slug: "Readlater",
            },
          ],
        }),
      ],
    }),
  ],
  trustedOrigins: [
    // Local Development Server
    "http://localhost:3002",
    "http://127.0.0.1:3002",
    // Cloudflare Production Domain
    "https://app.readlater.fyi",
  ],
});
