"use client";

import React, { SVGProps } from "react";
import XIcon from "../icons/x-icon";
import RedditIcon from "../icons/reddit";
import LinkIcon from "../icons/link";
import GreenCheckIcon from "../icons/green-check";
import BlueCheckIcon from "../icons/blue-check";
import PDFIcon from "../icons/pdf";
import ChromeIcon from "../icons/chrome";
import GithubIcon from "../icons/github";
import GoogleIcon from "../icons/google";

interface Props extends SVGProps<SVGSVGElement> {
  type: string;
  size?: number;
}

const IconPicker = React.memo(({ type, size = 18, ...rest }: Props) => {
  const Icons: Record<string, JSX.Element> = {
    google: <GoogleIcon width={size} height={size} {...rest} />,
    twitter: <XIcon width={size} height={size} {...rest} />,
    x: <XIcon width={size} height={size} {...rest} />,
    reddit: <RedditIcon width={size} height={size} {...rest} />,
    github: <GithubIcon width={size} height={size} {...rest} />,
    link: <LinkIcon width={size} height={size} {...rest} />,
    check: <GreenCheckIcon width={size} height={size} {...rest} />,
    bluecheck: <BlueCheckIcon width={size} height={size} {...rest} />,
    PDF: <PDFIcon width={size} height={size} {...rest} />,
    chrome: <ChromeIcon width={size} height={size} {...rest} />,
  };

  const Resolved = () => Icons[type];

  if (!type) return null;

  return (
    <div
      className="overflow-hidden rounded-sm flex items-center justify-center pl-0.5"
      style={{ width: size, height: size, minHeight: size, minWidth: size }}
    >
      <Resolved />
    </div>
  );
});

IconPicker.displayName = "IconPicker";

export default IconPicker;
