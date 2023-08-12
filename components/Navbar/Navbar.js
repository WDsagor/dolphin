"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
const menuItem = (
  <>
    <li className="mx-2">
      <Link href="/products">Products</Link>
    </li>
    <li className="mx-2">
      <Link href="/about">About Us</Link>
    </li>
    <li className="mx-2">
      <Link href="/contact">Contact</Link>
    </li>
    <li className="mx-2">
      <Link href="/login">Log In</Link>
    </li>
  </>
);

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState("fixed");

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    window.onscroll = function () {
      let currentScrollPo = window.scrollY;
      if (prevScrollPos > currentScrollPo) {
        setStickyNav("fixed bg-white");
      } else {
        setStickyNav("top-[-100]");
      }
      prevScrollPos = currentScrollPo;
    };
  }, []);
  return (
    <nav
      className={`${stickyNav} container rounded-3xl left-1/2 translate-x-[-50%] z-50 backdrop-filter: blur(10px) shadow-lg `}
    >
      <div className="navbar max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <>
            <Link href="/">
              <Image width={80} height={40} src="/images/logo.png" alt="logo" />
            </Link>
          </>
        </div>
        <div className="navbar-center">
          <input
            type="text"
            placeholder="Search products here..."
            className="input input-bordered bg-transparent input-sm lg:min-w-[350px] "
          />
          <button className="ml-[-30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
