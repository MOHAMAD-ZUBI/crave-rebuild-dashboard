import Link from "next/link";
import React from "react";

const SidebarLink = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) => {
  return (
    <Link
      href="/"
      className="flex hover:scale-[1.05] text-foreground/70 hover:text-foreground flex-row p-3 text-[17px] hover:bg-content2 rounded-lg duration-500 items-center gap-2"
    >
      <Icon className="" />
      {title}
    </Link>
  );
};

export default SidebarLink;
