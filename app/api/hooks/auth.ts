import { AuthClient } from "@/lib/auth-client";
import { useMutation } from "@tanstack/react-query";

import {
  ForgotPasswordSchemaType,
  ResetPasswordSchemaType,
  SignInSchemaType,
  SignUpSchemaType,
} from "@/schema/input/authentication";
import { UpdateUserSchemaType } from "@/schema/input/profile";

const useEmailSignUp = () => {
  type Omitted = "profession" | "role" | "price" | "membershipFeeId" | "phoneNumber";
  type SignUp = Omit<SignUpSchemaType, Omitted>;

  return useMutation({
    mutationFn: (data: SignUp) => {
      return AuthClient.signUp.email(
        { ...data, callbackURL: "/membership/" },
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

const useSignOut = () => {
  return useMutation({
    mutationFn: () => {
      return AuthClient.signOut();
    },
  });
};

export {
  useEmailSignUp,
  useEmailSignIn,
  useRequestResetPassword,
  useResetPassword,
  useUpdateUser,
  useSignOut,
};
