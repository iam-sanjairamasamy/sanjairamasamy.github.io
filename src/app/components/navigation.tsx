import { Navbar, Input, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import { Contact } from "./contact";

export const Navigation = () => {
  return (
    <Navbar isBlurred className="bg-gradient-to-r from-slate-100 to-stone-200">
    <NavbarContent className="md:w-auto md:justify-center bg-[#b1b1b166] mt-10 rounded-lg" >
      <NavbarBrand className="mx-5">
        <Image src="sr.svg" width={50} height={50} alt="Sanjai Ramasamy"/>
      </NavbarBrand>
      <NavbarItem>
        Home
      </NavbarItem>
      <NavbarItem>
        About me
      </NavbarItem>
      <NavbarItem>
        Skills
      </NavbarItem>
      <NavbarItem>
        Testimonals
      </NavbarItem>
      <NavbarItem className="mr-5">
         <div className="flex justify-right mx-2 mt-1">
            <Contact/>
          </div>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
}

