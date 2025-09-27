"use client";

import ThirdPartyButton from "./third-party-button";

const ContinueWithGoogle = () => {
  return (
    <ThirdPartyButton type="google" redirect="/">
      <ThirdPartyButton.Button>Continue with Google</ThirdPartyButton.Button>
    </ThirdPartyButton>
  );
};

export default ContinueWithGoogle;
