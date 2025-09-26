"use client";

import LinkedAccounts from "./components/accounts/connected";
import SetPasswordForm from "./components/set-password";

const AccountSettings = () => {
  return (
    <div className="container mx-auto py-8 sm:px-20 px-3 flex flex-col gap-10">
      <div className="flex flex-col gap-0">
        <h1 className="text-2xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-sm font-medium text-muted-foreground">
          Manage and modify your account here
        </p>
      </div>

      {/** Linked Accounts Section */}
      <LinkedAccounts />

      {/** Set Password Section */}
      <SetPasswordForm />
    </div>
  );
};

export default AccountSettings;
