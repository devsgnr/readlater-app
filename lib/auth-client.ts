import { createAuthClient } from "better-auth/react";
import { polarClient } from "@polar-sh/better-auth";
import { lastLoginMethodClient } from "better-auth/client/plugins";

export const AuthClient = createAuthClient({ plugins: [polarClient(), lastLoginMethodClient()] });
