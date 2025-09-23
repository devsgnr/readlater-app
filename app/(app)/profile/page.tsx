"use client";

import ChangeNameForm from "./components/name";

const Profile = () => {
  return (
    <div className="container mx-auto py-8 sm:px-20 px-3 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
          <p className="text-sm font-medium text-muted-foreground">Manage your profile</p>
        </div>

        {/** Change Name */}
        <ChangeNameForm />
      </div>
    </div>
  );
};

export default Profile;
