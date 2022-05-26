import React from "react";
import { NextPage } from "next";
import Link from "next/link";

interface IProps {
  menuHover: boolean;
  setMenuHover: (open: boolean) => void;
}

const Nav: NextPage<IProps> = ({ menuHover, setMenuHover }) => {
  return (
    <div
      className="w-96"
      onMouseOver={() => setMenuHover(true)}
      onMouseLeave={() => setMenuHover(false)}
    >
      <ul className="pr-12 text-opv-pink-900 text-2xl leading-[40px]  h-full flex flex-col justify-center  left-16 absolute capitalize">
        <li
          onClick={() => setMenuHover(false)}
          className="hover:text-opv-pink-500"
        >
          <Link href="/">Spectacles</Link>
        </li>

        <li className="hover:text-opv-pink-500">
          <Link href="/">Histoire</Link>
        </li>

        <li className="hover:text-opv-pink-500">
          <Link href="/">Photos</Link>
        </li>

        <li className="hover:text-opv-pink-500">
          <Link href="/">Vidéos</Link>
        </li>

        <li className="hover:text-opv-pink-500">
          <Link href="/">Information Technique</Link>
        </li>

        <li className="hover:text-opv-pink-500">
          <Link href="/">Contact</Link>
        </li>

        <li className="text-black self-end  bg-gray-400 p-1 text-xs mr-2">
          <Link href="/">EN</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
