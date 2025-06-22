import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full float-right justify-around h-[5%] p-2 m-2 text-2xl">
      <Link href={"/"} className="hover:text-amber-600">
        Home
      </Link>
      <Link href={"/contact"} className="hover:text-amber-600">
        Contact
      </Link>
      <Link href={"/user"} className="hover:text-amber-600">
        User
      </Link>
      <Link href={"/serverComponent"} className="hover:text-amber-600">
        Server
      </Link>
    </div>
  );
};

export default Navbar;
