import Link from "next/link";
import React from "react";

const DashboardLayOut = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2">
        <Link href="/" className="font-bold text-4xl">
          Dev Story
        </Link>
        <div className="flex flex-col gap-5 mt-10 text-white font-medium">
          <Link
            className="py-2 px-4 w-full bg-gray-600"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayOut;
