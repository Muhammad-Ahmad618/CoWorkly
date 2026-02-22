"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png";
import Link from "next/link";

const navLinks = [
  {
    label: "Pricing",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },
];

export function Navbar() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <Image src={logo} alt="Logo" width={30} height={30} />
          <span className="text-xl font-semibold text-gray-950">oworkly</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link, index) => (
            <Link
              href={link.link}
              className="group text-stone-600 hover:text-brand-primary transition-all duration-300 ease-in-out"
              key={index}
            >
              {link.label}
              <div className="w-0 group-hover:w-full h-[2px] bg-brand-primary rounded-full mt-1 transition-all duration-500 ease-in-out"></div>
            </Link>
          ))}
          <Button
            onClick={() => handleNavigation("/authentication/login")}
            className="bg-brand-primary hover:bg-brand-hover text-white cursor-pointer"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
