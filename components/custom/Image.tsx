/* eslint-disable @next/next/no-img-element */
"use client";

import { cn, isValidImageURL } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes, useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { Image01 } from "@untitled-ui/icons-react";

interface Props extends HTMLAttributes<HTMLPictureElement> {
  src: string;
  alt: string;
}

const DayterImage = ({ src, alt, ...rest }: Props) => {
  return (
    <picture
      draggable={false}
      className={cn("w-full h-full object-cover object-center", rest.className)}
    >
      <source srcSet={src} type="image/png" />
      <source srcSet={src} type="image/jpeg" />
      <img
        draggable={false}
        className="w-full h-full object-cover object-center text-xs"
        {...rest}
        src="/broken.png"
        alt={alt}
        fetchPriority="high"
        decoding="async"
        loading="lazy"
      />
    </picture>
  );
};

/**
 * Broken Image - Component
 */

export const BrokenImage = () => {
  return (
    <div className="w-full h-full bg-background text-muted-foreground flex items-center justify-center pointer-events-none">
      <div className="flex flex-col gap-1 items-center justify-center text-center w-full">
        <Image01 width={13} height={13} />
        <p className="text-xs font-medium">Media is broken or not available</p>
      </div>
    </div>
  );
};

/**
 * Helpers - Placeholder
 */
const shimmer = (theme: "light" | "dark"): string => `
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${theme === "dark" ? "#292929" : "#e6e6e6"}" offset="20%" />
      <stop stop-color="${theme === "dark" ? "#2b2b2b" : "#e3e3e3"}" offset="50%" />
      <stop stop-color="${theme === "dark" ? "#292929" : "#e6e6e6"}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="${theme === "dark" ? "#292929" : "#e6e6e6"}" />
  <rect id="r" width="100%" height="100%" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) => btoa(str);

interface NextImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  onError?: () => void;
  onLoaded?: () => void;
  hasError?: (b: boolean) => void;
}

export const DayterNextImage = React.memo(
  ({ src, alt, onError, onLoaded, hasError, ...rest }: NextImageProps) => {
    const { theme } = useTheme();
    const [URL, setURL] = useState<string>(src);
    const [view, setView] = useState<boolean>(true);

    useEffect(() => {
      setURL(src);
      setView(true);
      hasError && hasError(false);
    }, [hasError, src]);

    const handleLoad = useCallback(() => {
      onLoaded && onLoaded();
    }, [onLoaded]);

    const handleError = useCallback(() => {
      setView(false);
      setURL("/broken.png");
      hasError && hasError(true);
      onError && onError();
    }, [hasError, onError]);

    if (!isValidImageURL(URL) || !view) return null;

    return (
      <Image
        draggable={false}
        {...rest}
        src={URL}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        width={100}
        height={100}
        loading="lazy"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(theme as "light" | "dark"))}`}
        quality={100}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  },
);

DayterNextImage.displayName = "DayterNextImage";

export default DayterImage;
