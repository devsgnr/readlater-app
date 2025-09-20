import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { SendResetPasswordEmail, SendVerifyEmail } from "./email-client";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./prisma-client";

export const auth = betterAuth({
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
    "http://localhost:3001",
    "http://127.0.0.1:3001",
    // Cloudflare Production Domain
    "https://nss.org.ng",
    "https://www.nss.org.ng",
  ],
});
