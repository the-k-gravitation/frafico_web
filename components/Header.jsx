import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";

import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  const logoImgV1 = "/images/header/logoV1.svg",
    logoImgV2 = "/images/header/logoV2.svg";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white p-3 rounded-md drop-shadow-primary" : "py-[2.5rem]"
      } fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[70rem] z-20 flex justify-between items-center transition-all duration-500`}
    >
      {/* logo v1 */}
      <Link href={"/"} legacyBehavior>
        <a>
          <Image
            src={`${header ? logoImgV2 : logoImgV1}`}
            width={header ? 180 : 212}
            height={50}
            alt=""
          />
        </a>
      </Link>
      <div className="hidden lg:flex gap-x-[6rem]">
        <Nav header={header} />
        <button className="btn">Contact us</button>
      </div>
      <div
        onClick={() => setNavMobile((prev) => !prev)}
        className="lg:hidden cursor-pointer"
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </div>
      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
