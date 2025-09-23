import { Home, Settings, User } from "lucide-react";
import { nanoid } from "nanoid";

const NavItem = [
  { id: nanoid(), title: "Home", href: "/", icon: Home },
  { id: nanoid(), title: "Profile", href: "/profile", icon: User },
];

const UserDropdownItem = [
  { id: nanoid(), title: "Profile", href: "/profile", icon: User },
  { id: nanoid(), title: "Account Settings", href: "/settings", icon: Settings },
];

export { NavItem, UserDropdownItem };
