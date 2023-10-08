"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-10 uppercase bg-[#a28089] transition-all duration-400 shadow-md ${
        isScrolled
          ? " h-[30px] md:h-[38px] shadow-md"
          : " h-[60px] md:h-[70px] shadow-none"
      } `}
    >
      <nav className="max-w-[1366px] h-full mx-auto flex justify-center items-center p-4">
        <ul className="flex w-full justify-around md:justify-center md:space-x-32 text-xl md:text-2xl font-semibold tracking-widest transition duration-500">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-white  tracking-widest"
                  : " tracking-widest"
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
                  ? "text-white  tracking-widest "
                  : " tracking-widest"
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
                  ? "text-white tracking-widest"
                  : " tracking-widest"
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
