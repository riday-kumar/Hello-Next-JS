"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("Enter Your Password");
    if (password === "1234") {
      console.log(router);
      router.push("/dashboard");
    }
  };
  return (
    <div className="space-y-5 py-10 flex flex-col justify-center items-center rounded-lg bg-linear-60 to-sky-100 from-sky-100 text-black">
      <p className="text-4xl font-bold">Welcome to DevStory</p>
      <button
        onClick={handleBtn}
        className="px-4 py-2 text-2xl bg-sky-500 text-white hover:bg-black duration-200 cursor-pointer rounded-lg"
      >
        Share-Story
      </button>
    </div>
  );
};

export default Banner;
