import { AuthClient } from "@/lib/auth-client";
import { useMutation, useQuery } from "@tanstack/react-query";

import {
  ChangePasswordSchemaType,
  ForgotPasswordSchemaType,
  ResetPasswordSchemaType,
  SetPasswordSchemaType,
  SignInSchemaType,
  SignUpSchemaType,
} from "@/schema/input/authentication";
import { UpdateUserSchemaType } from "@/schema/input/profile";
import { LinkSocial, UnlinkSocial } from "@/types/link-accounts";
import { SetPassword } from "./api-call";

const useThirdPartySignIn = (type: string) => {
  return useMutation({
    mutationFn: () => {
      return AuthClient.signIn.social({
        provider: type,
        callbackURL: "/",
      });
    },
  });
};

const useLinkSocial = (type: string) => {
  return useMutation({
    mutationFn: (data?: LinkSocial) => {
      console.log({
        provider: type,
        ...data,
      });
      return AuthClient.linkSocial({
        provider: type,
        ...data,
      });
    },
  });
};

const useUnlinkSocial = (type: string) => {
  return useMutation({
    mutationFn: (data: UnlinkSocial) => {
      return AuthClient.unlinkAccount(data);
    },
  });
};

const useEmailSignUp = () => {
  return useMutation({
    mutationFn: (data: SignUpSchemaType) => {
      return AuthClient.signUp.email(data, {
        onSuccess: (res) => {
          return res.data;
        },
        onError: (e) => {
          throw new Error(e.error.message, e.error);
        },
      });
    },
  });
};

const useEmailSignIn = () => {
  return useMutation({
    mutationFn: (data: SignInSchemaType) => {
      return AuthClient.signIn.email(data, {
        onSuccess: (res) => {
          return res.data;
        },
        onError: (e) => {
          throw new Error(e.error.message, e.error);
        },
      });
    },
  });
};

const useRequestResetPassword = () => {
  return useMutation({
    mutationFn: (data: ForgotPasswordSchemaType) => {
      return AuthClient.requestPasswordReset(data, {
        onSuccess: (res) => {
          return res.data;
        },
        onError: (e) => {
          throw new Error(e.error.message, e.error);
        },
      });
    },
  });
};

const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordSchemaType) => {
      return AuthClient.resetPassword(data, {
        onSuccess: (res) => {
          return res.data;
        },
        onError: (e) => {
          throw new Error(e.error.message, e.error);
        },
      });
    },
  });
};

const useSetPassword = () => {
  return useMutation({
    mutationFn: (data: SetPasswordSchemaType) => {
      return SetPassword(data);
    },
  });
};

const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: ChangePasswordSchemaType) => {
      return AuthClient.changePassword(data);
    },
  });
};

const useUpdateUser = () => {
  return useMutation({
    mutationFn: (data: UpdateUserSchemaType) => {
      return AuthClient.updateUser(data);
    },
  });
};

const useGetUserAccount = () => {
  return useQuery({
    queryKey: ["getUsersAccounts"],
    queryFn: () => {
      return AuthClient.listAccounts();
    },
  });
};

const useGetLastLoginMethod = () => {
  return useQuery({
    queryKey: ["getLastLoginMethod"],
    queryFn: () => {
      return AuthClient.getLastUsedLoginMethod();
    },
  });
};

const useSignOut = () => {
  return useMutation({
    mutationFn: () => {
      return AuthClient.signOut();
    },
  });
};

type useThirdPartySignInType = ReturnType<typeof useThirdPartySignIn>;
type useLinkSocialType = ReturnType<typeof useLinkSocial>;
type useUnlinkSocialType = ReturnType<typeof useUnlinkSocial>;

export type { useThirdPartySignInType, useLinkSocialType, useUnlinkSocialType };
export {
  useThirdPartySignIn,
  useLinkSocial,
  useUnlinkSocial,
  useEmailSignUp,
  useEmailSignIn,
  useRequestResetPassword,
  useResetPassword,
  useSetPassword,
  useChangePassword,
  useUpdateUser,
  useGetUserAccount,
  useGetLastLoginMethod,
  useSignOut,
};
