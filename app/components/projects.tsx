import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 py-40 gap-10">
      <div>
        <div className="bg-gray-200 py-10 cursor-pointer">
          <Image
            width={650}
            height={650}
            className="origin-center duration-200 ease-in-out hover:scale-110"
            src="/s4f.png"
            alt="s4f mockup"
          />
        </div>
        <h2 className="text-gray-800 mt-5">S4F</h2>
        <h3 className="text-gray-800">Layout Development | API Integration</h3>
      </div>
      <div>
        <div className="bg-gray-200 py-10 cursor-pointer">
          <Image
            width={650}
            height={650}
            className="origin-center duration-200 ease-in-out hover:scale-110"
            src="/solution4fleet.png"
            alt="solution mockup"
          />
        </div>
        <h2 className="text-gray-800 mt-5">Solution4Fleet</h2>
        <h3 className="text-gray-800">Layout Development</h3>
      </div>
    </div>
  );
}
