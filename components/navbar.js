import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center py-4 mt-4 sm:mt-2 bg-blue-500">
      <div className="flex items-center py-1 mx-4">
        <img src="./img/racinghorse.png" alt="" className="w-16 h-16" />
        <span className="font-bold ml-2">BMWPHD</span>
      </div>
      <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-landing-blue uppercase text-xs mx-4">
        {/* Wrap the "Home" list item with an anchor element */}
        <Link
          href="/"
          className="cursor-pointer px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded-md transition duration-200 ease-in-out"
        >
          Home
        </Link>

        {/* Wrap the "Deliverables" list item with a Link component */}
        <Link
          href="/deliverables"
          className="cursor-pointer px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded-md transition duration-200 ease-in-out"
        >
          Deliverables
        </Link>

        <Link
          href="https://docs.google.com/spreadsheets/d/1MKZXyynO3wcwTKLdBGi7B_YcODnuBlyMutKCcdEx_lo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded-md transition duration-200 ease-in-out"
        >
          WAR
        </Link>
      </ul>
      <div className="flex sm:hidden flex-1 justify-end mx-4">
        <MenuIcon className="h-8 w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
