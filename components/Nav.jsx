import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className=" flex space-x-6 py-3 bg-green-500 p-2 rounded-md justify-center">
        <Link href={"/"} className="text-lg font-bold text-black">
          Home
        </Link>
        <Link href={"/blog"} className="text-lg font-bold text-black">
          Blog page
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
