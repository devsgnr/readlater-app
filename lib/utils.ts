import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractDomain = (link: string): string => {
  const domain = link.split("//")[1].split("/")[0].replace("www.", "");
  return domain;
};

export const slugify = (text: string): string => {
  return text.toLowerCase().split(" ").join("-");
};

export const isValidImageURL = (str: string): boolean => {
  return str.startsWith("/") || str.startsWith("http://") || str.startsWith("https://");
};

export const formatDate = (d: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const scrollToTop = (selector: string) => {
  const el = document.querySelector(selector) as HTMLElement;
  el.scrollTo({ top: 0, behavior: "smooth" });
};

export const CopyToClipboard = (
  text: string,
  options: { onSucess?: () => void; onError?: () => void },
) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      options.onSucess && options.onSucess();
    })
    .catch(() => {
      options.onError && options.onError();
    });
};

export const sanitizeFBe = (value: string): string => {
  const firstStage: string[] = value.split("/")[1].split("-").join(" ").split(")")[0].split(" ");

  for (let i = 0; i < firstStage.length; i++) {
    firstStage[i] = firstStage[i].charAt(0).toUpperCase() + firstStage[i].slice(1);
  }

  return firstStage.join(" ");
};
