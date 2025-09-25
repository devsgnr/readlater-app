import { AuthClient } from "@/lib/auth-client";
import { useMutation, useQuery } from "@tanstack/react-query";

import {
  ForgotPasswordSchemaType,
  ResetPasswordSchemaType,
  SignInSchemaType,
  SignUpSchemaType,
} from "@/schema/input/authentication";
import { UpdateUserSchemaType } from "@/schema/input/profile";

const useThirdPartySignIn = (type: string) => {
  return useMutation({
    mutationFn: () => {
      return AuthClient.signIn.social({
        provider: type,
      });
    },
  });
};

const useEmailSignUp = () => {
  type SignUp = SignUpSchemaType;

  return useMutation({
    mutationFn: (data: SignUp) => {
      return AuthClient.signUp.email(
        { ...data, callbackURL: "/" },
        {
          onSuccess: (res) => {
            return res.data;
          },
          onError: (e) => {
            throw new Error(e.error.message, e.error);
          },
        },
      );
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

const useSignOut = () => {
  return useMutation({
    mutationFn: () => {
      return AuthClient.signOut();
    },
  });
};

type useThirdPartySignInType = ReturnType<typeof useThirdPartySignIn>;

export type { useThirdPartySignInType };
export {
  useThirdPartySignIn,
  useEmailSignUp,
  useEmailSignIn,
  useRequestResetPassword,
  useResetPassword,
  useUpdateUser,
  useGetUserAccount,
  useSignOut,
};
