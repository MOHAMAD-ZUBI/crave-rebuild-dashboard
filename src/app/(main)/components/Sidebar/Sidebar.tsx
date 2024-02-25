import React, { FC, useEffect } from "react";
import {
  MdDashboard,
  MdOutlineSettingsSuggest,
  MdKeyboardArrowUp,
  MdBusinessCenter,
  MdBubbleChart,
  MdClose,
} from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";

import SidebarLink from "./SidebarLink";
import { FcWorkflow } from "react-icons/fc";
import CollapsableLink from "./CollapsableLink";

interface SidebarProps {
  handleSidebar: () => void;
}

const Links = [
  { title: "Dashboard", icon: MdDashboard, path: "/" },
  {
    title: "Order",
    icon: MdBusinessCenter,
    path: "/",
    subLinks: [{ title: "Orders", path: "/orders", icon: MdBusinessCenter }],
  },
  {
    title: "Settings",
    icon: MdOutlineSettingsSuggest,
    path: "/",
    subLinks: [
      { title: "General", path: "/settings", icon: RiListSettingsFill },
      { title: "SEO", path: "/settings/seo", icon: MdOutlineSettingsSuggest },
    ],
  },
];
const Sidebar: FC<SidebarProps> = ({ handleSidebar }) => {
  return (
    <div className="p-6  bg-background h-full border-r border-content2">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="p-3 flex flex-row gap-2">
          <FcWorkflow size={30} />
          <h1 className="text-2xl  font-semibold">Dashboard</h1>
        </div>
        <button
          onClick={handleSidebar}
          className="bg-white/20 sm:hidden rounded-xl p-1"
        >
          <MdClose size={23} />
        </button>
      </div>
      <div className="h-[1px] w-full bg-content2 my-8"></div>
      <div className="flex flex-col my-4 gap-1">
        {Links.map((link) => {
          const { title, path, icon, subLinks } = link;
          if (subLinks) {
            return (
              <CollapsableLink
                subLinks={subLinks}
                key={title}
                title={title}
                Icon={icon}
              />
            );
          }
          return <SidebarLink key={path} title={title} Icon={icon} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
