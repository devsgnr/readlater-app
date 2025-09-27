"use client";

import LinkedAccounts from "./components/accounts/connected";
import Password from "./components/password";

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

      {/** Password Section */}
      <Password />
    </div>
  );
};

export default AccountSettings;
