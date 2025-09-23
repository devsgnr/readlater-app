import Plunk from "@plunk/node";
import { render } from "jsx-email";
import { EmailType } from "@/types/email";
import { createElement } from "react";
import { Template as ResetPassword } from "@/emails/templates/reset-password";
import { Template as VerifyEmail } from "@/emails/templates/verification";

const email = new Plunk(process.env.PLUNK_API_KEY!);

const SendVerifyEmail = async (data: EmailType) => {
  const body = await render(createElement(VerifyEmail, { name: data.name, url: data.url }));

  return await email.emails.send({
    // from: "noreply@mail.readlater.fyi",
    to: data.email,
    subject: "Readlater - Email Verification",
    body,
  });
};

const SendResetPasswordEmail = async (data: EmailType) => {
  const body = await render(createElement(ResetPassword, { name: data.name, url: data.url }));

  return await email.emails.send({
    // from: "noreply@mail.readlater.fyi",
    to: data.email,
    subject: "Readlater - Reset Password",
    body,
  });
};

export { SendVerifyEmail, SendResetPasswordEmail };
