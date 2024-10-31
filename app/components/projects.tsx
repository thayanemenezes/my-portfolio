import Image from "next/image";
import React from "react";
import { projectsData } from "../utils/projects";
import { FaReact } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 py-40 gap-10">
      {projectsData.map((value: any) => {
        return (
          <div key={value.id}>
            <div className="bg-gray-200 py-10 cursor-pointer">
              <Image
                width={650}
                height={650}
                className="origin-center duration-200 ease-in-out hover:scale-110"
                src={value.imagePath}
                alt="s4f mockup"
              />
            </div>
            <div className="flex items-center justify-between mt-5">
              <h2 className="text-gray-800">{value.projectName}</h2>
              <div className="flex">
                {value?.technologiesUsed.map((technologie: any, index: number) => (
                  <span className="mx-1" key={index}>{technologie.icon}</span>
                ))}
              </div>
            </div>
            <h3 className="text-gray-800">{value.subtitle}</h3>
          </div>
        )
      })}
    </div>
  );
}
