import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute right-0 left-0 bottom-0">
      <hr />
      <div className="lg:flex sm:flex-col lg:flex-row w-full align-center justify-between py-10 px-5">
        <div className="w-full">
          <h2 className="text-gray-50">Get in touch! 👋</h2>
          <Link
          href="mailto:thayanemenezes.dev@gmail.com"
          className="text-gray-50 hover:font-bold hover:text-violet-100"
        >thayanemenezes.dev@gmail.com</Link>
        </div>
        <div className="flex flex-row w-20 justify-between items-center mt-5">
          <Link
            href={"https://www.linkedin.com/in/thayane-menezes-31a5a9191/"}
            className="origin-center duration-200 ease-in-out hover:scale-110 "
          >
            <FaLinkedin size={30} color="#ffffff" />
          </Link>
          <Link
            href={"https://github.com/thayanemenezes"}
            className="origin-center duration-200 ease-in-out hover:scale-110"
          >
            <FaGithub size={30} color="#ffffff" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
