"use client";

import SpecialityForm from "./components/speciality";
import CertificationForm from "./components/certification";
import ChangeNameForm from "./components/name";
import PhoneNumberForm from "./components/phone-number";

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

      {/** Member Section */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Member</h1>
          <p className="text-sm font-medium text-muted-foreground">
            Manage your membership details
          </p>
        </div>

        {/** Phone Number */}
        <PhoneNumberForm />

        {/** Speciality */}
        <SpecialityForm />

        {/** Certification */}
        <CertificationForm />
      </div>
    </div>
  );
};

export default Profile;
