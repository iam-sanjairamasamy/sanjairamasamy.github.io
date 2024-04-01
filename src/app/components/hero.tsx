"use client";

import Image from "next/image";
import { Contact } from "./contact";
export const Hero = () => {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between lg:space-x-8">
        {/* Left Content */}
        <div className="lg:text-left lg:ml-0 lg:mr-10">
          <h2 className="text-3xl lg:text-4xl mb-4 mx-1 lg:mx-0 text-center lg:text-left text-gray-400">Hello, I'm</h2>
          <h1 className="bg-gradient-to-r from-slate-900 via-amber-600 to-slate-900 bg-clip-text text-transparent text-5xl lg:text-6xl lg:leading-[4.2rem] mx-1 lg:mx-0 text-center lg:text-left">
            Sanjai Ramasamy
          </h1>
          <p className="mx-1 mb-3 text-normal text-gray-600 text-center lg:text-left">
            Software Engineer | Architect | Designer ツ
          </p>
        </div>
      
        {/* Right Content (Image) */}
        <div className="lg:ml-10 lg:p-10">
          <Image
            src="/me.jpeg"
            alt="xx"
            width={250}
            height={350}
            className="rounded-xl"
          />
        </div>
       
      </div>
      
    );
};
