import { nanoid } from "nanoid";

type NavItem = {
  id: string;
  title: string;
  link: string;
};

type CombinedNavItems = {
  name: string;
  links: Array<NavItem>;
};

type NavType = Array<NavItem>;
type CombinedNavType = Array<CombinedNavItems>;

const NAV_ITEM: NavType = [
  { id: nanoid(), title: "Home", link: "/" },
  { id: nanoid(), title: "Contact", link: "/contact" },
];

const UPPER_NAV_ITEM: NavType = [
  { id: nanoid(), title: "Log In", link: "/membership/sign-in" },
  { id: nanoid(), title: "Become a Member", link: "/membership/sign-up" },
];

const COMBINED: CombinedNavType = [
  { name: "Pages", links: NAV_ITEM },
  { name: "Membership", links: UPPER_NAV_ITEM },
];

export type { NavItem, CombinedNavItems, NavType, CombinedNavType };
export { NAV_ITEM, UPPER_NAV_ITEM, COMBINED };
