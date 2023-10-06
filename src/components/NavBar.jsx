"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [color, setColor] = useState(false);
  const pathname = usePathname();

  const changeColorHandler = () => {
    if (window.scrollY >= 10) setColor(true);
    else setColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColorHandler);
  }, []);
  return (
    <header
      className={`border-b-[1px] border-b-amber-900 fixed left-0 top-0 w-full z-10 transition-all duration-300 ${
        color
          ? "bg-[rgba(35,35,35,0.95)] h-[50px] md:h-[55px]"
          : "bg-transparent h-[60px] md:h-[70px]"
      }`}
    >
      <nav className="max-w-[1366px] h-full mx-auto flex justify-center items-center p-4">
        <ul className="flex w-full justify-around md:justify-center md:space-x-32 text-xl md:text-2xl">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-blue-500  tracking-wider"
                  : " tracking-wider"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/list"
              className={
                pathname === "/list"
                  ? "text-blue-500  tracking-wider"
                  : " tracking-wider"
              }
            >
              List
            </Link>
          </li>
          <li>
            <Link
              href="/add"
              className={
                pathname === "/add"
                  ? "text-blue-500 tracking-wider"
                  : " tracking-wider"
              }
            >
              Add
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
