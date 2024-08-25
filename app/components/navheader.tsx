import Link from "next/link";
import React from "react";

export default function NavHeader() {
  return (
    <nav className="w-full h-32">
      <ul className="flex justify-between lg:w-4/12 md:w-full py-12">
        <Link
          href={"/"}
          className="cursor-pointer text-gray-900 hover:font-bold hover:text-violet-800"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="cursor-pointer text-gray-900 hover:font-bold hover:text-violet-800"
        >
          About
        </Link>
        <Link
          href="mailto:thayanemenezes.dev@gmail.com"
          className="cursor-pointer text-gray-900 hover:font-bold hover:text-violet-800"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
