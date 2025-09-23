import React from "react";
import TimeoutWrapper from "./TimeoutWrapper";
import { TextShimmer } from "../ui/text-shimmer";
import NSSLogoIcon from "../icons/logo-icon";

const Loading = React.memo(() => {
  return (
    <TimeoutWrapper>
      <div className="w-fit h-fit relative">
        <div className="container max-auto flex flex-col justify-center items-center gap-4 w-full h-full ">
          <NSSLogoIcon width={125} height={40} />
          <div className="text-center flex flex-col justify-center">
            <TextShimmer className="font-medium text-sm" duration={3}>
              Loading...
            </TextShimmer>
            <p className="text-muted-foreground text-sm">
              Making sure everything is running smoothly, just a second.
            </p>
          </div>
        </div>
      </div>
    </TimeoutWrapper>
  );
});

Loading.displayName = "Loading";

export default Loading;
