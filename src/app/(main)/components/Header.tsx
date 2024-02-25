"use client";
import React, { FC } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import UserDropDown from "./UserDropDown";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

interface HeaderProps {
  handleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ handleSidebar }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <button
          className="md:hidden p-2 bg-white/10 rounded-xl"
          onClick={handleSidebar}
        >
          <HiBars3BottomLeft size={35} />
        </button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <ThemeSwitcher />
        <UserDropDown />
      </div>
    </div>
  );
};

export default Header;
