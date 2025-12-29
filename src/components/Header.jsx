import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-4 border-b-2 border-gray-500 flex justify-between items-center">
      <p className="font-bold text-4xl">Dev Story</p>
      <nav className="text-2xl font-medium space-x-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/contact">contact</Link>
        <Link href="/about/team">teams</Link>
        <Link href="/tutorials">tutorials</Link>
        <Link href="/login">login</Link>
        <Link href="/register">register</Link>
      </nav>
    </div>
  );
};

export default Header;
