"use client";
import { Avatar, Button, Card, CardFooter, Divider, Navbar } from "@nextui-org/react";
import Image from "next/image";
import { skills } from "./data/skills";
import { Testimonals } from "./components/testimonal";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { About } from "./components/about";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-gradient-to-r from-slate-100 to-stone-200 w-full" suppressHydrationWarning>
    <Navigation/>
      <div className="flex flex-grow items-center justify-center p-10 m-10 w-full">
        <Hero/>
      </div>
      <div className="flex flex-grow items-center justify-center p-10 m-10 w-full">
        <About/>
      </div>
      <div className="flex flex-grow items-center justify-center p-10 m-10 w-full">
        <Skills/>
      </div>
      <div className="flex flex-grow items-center justify-center p-10 m-10 w-full">
        <Testimonals/>
      </div>
    </main>
  );
}

