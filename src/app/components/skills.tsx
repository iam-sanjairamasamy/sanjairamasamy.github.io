

import { skills } from '../data/skills';
import { Header } from './header';
import Image from "next/image";
export const Skills = () => {
    return (
        <div className="flex flex-col items-center p-10 mx-10 bg-[#b1b1b166] rounded-lg w-full">
        <div className="flex w-full">
            <Header title="Skills" />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 mt-5 lg:gap-5 w-full ">
        {skills.map((item, index) => (
          <div
            key={index}
            className="text-gray-400 hover:text-white m-4"
          >
             <Image
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                />
          </div>
        ))}
         </div>
    </div>
    );
  };
  