import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="lg:flex sm:flex-col lg:flex-row w-full align-center justify-between py-10">
        <div className="w-full">
          <h2 className="text-gray-900">Get in touch! 👋</h2>
          <h4 className="text-gray-900 ">thayanemenezes.dev@gmail.com</h4>
        </div>
        <div className="flex flex-row w-32 justify-between items-center mt-5">
          <Link
            href={"https://www.linkedin.com/in/thayane-menezes-31a5a9191/"}
            className="origin-center duration-200 ease-in-out hover:scale-110 "
          >
            <Image
              width={26}
              height={26}
              src="/linkedin.png"
              alt="linkedin icon"
            />
          </Link>
          <Link
            href={"https://github.com/thayanemenezes"}
            className="origin-center duration-200 ease-in-out hover:scale-110"
          >
            <Image width={26} height={26} src="/github.png" alt="github icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
