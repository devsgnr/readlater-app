"use client";

import ThirdPartyButton from "./third-party-button";

const ContinueWithTwitter = () => {
  return (
    <ThirdPartyButton type="twitter" redirect="/">
      <ThirdPartyButton.Button>
        <ThirdPartyButton.Icon type="x" />
        Continue with X
      </ThirdPartyButton.Button>
    </ThirdPartyButton>
  );
};

export default ContinueWithTwitter;
