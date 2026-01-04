"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);

  if (pathName.startsWith("/dashboard")) return <></>;

  return (
    <div className="p-4 border-b-2 border-gray-500 flex justify-between items-center">
      <Link href="/" className="font-bold text-4xl">
        Dev Story
      </Link>
      <nav className="text-2xl font-medium space-x-5">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/about">About</NavLink>

        <NavLink href="/tutorials">tutorials</NavLink>
        <NavLink href="/login">login</NavLink>
        <NavLink href="/register">register</NavLink>
      </nav>
    </div>
  );
};

export default Header;
