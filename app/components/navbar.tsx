import Link from "next/link";
import UpperNavBar from "./upper-nav";
import { NAV_ITEM } from "./constants";

const NavBar = () => {
  return (
    <nav className="sticky top-0 left-0 z-999 flex flex-col">
      <UpperNavBar />

      <div className="bg-white sm:block hidden text-zinc-700 w-full shadow-[0_0_0_1px_var(--color-zinc-200)]">
        <div className="container mx-auto max-w-7xl flex items-center gap-px text-sm h-full font-mono font-medium uppercase">
          {NAV_ITEM.map((link) => (
            <Link
              className="py-3 px-5 h-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors duration-300 shadow-[0_0_0_1px_var(--color-zinc-200)]"
              href={link.link}
              key={link.id}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
