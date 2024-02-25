"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
interface SubLink {
  title: string;
  icon: React.ElementType;
  path: string;
}

const CollapsableLink = ({
  title,
  Icon,
  subLinks,
}: {
  title: string;
  Icon: React.ElementType;
  subLinks: any;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    const matchingLink = subLinks.find(
      (link: SubLink) => link.path === pathname
    );
    if (matchingLink && !isOpen) {
      setIsOpen(true);
    }
    if (!matchingLink && isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);
  return (
    <div className="w-full relative ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full hover:scale-[1.05] flex text-foreground/70 hover:text-foreground flex-row p-3 text-[17px] hover:bg-content2 rounded-lg duration-500 items-center justify-between"
      >
        <div className="flex flex-row gap-2 items-center">
          <Icon />
          {title}
        </div>
        <MdArrowDropDown
          size={20}
          className={`${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-all duration-500`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.3 },
              opacity: { duration: 0.5 },
            }}
            className=" overflow-hidden flex flex-col gap-1 mt-1"
          >
            {subLinks.map((subLink: SubLink) => {
              const { title, path, icon: Icon } = subLink;
              return (
                <Link
                  key={title}
                  href={path}
                  className={`flex flex-row  hover:text-foreground px-6 py-3 text-[17px] rounded-lg duration-500 items-center gap-2 ${
                    pathname === path
                      ? "bg-content2"
                      : "hover:bg-white/10 text-foreground/70 hover:text-foreground"
                  }`}
                >
                  <Icon className="" />
                  {title}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsableLink;
