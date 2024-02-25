"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //* sidebar state (either closed or open for mobile devices)
  const [isSidebarClosed, setIsSidebarClosed] = useState<boolean>(true);
  //* get current pathname
  const pathname = usePathname();
  //* if pathname changed and the sidebar is open close it
  useEffect(() => {
    if (isSidebarClosed === false) {
      return setIsSidebarClosed(true);
    }
  }, [pathname]);
  const sidebarWidth = isSidebarClosed
    ? "max-md:w-[0px] "
    : "max-md:absolute max-md:top-0 max-md:left-0 max-md:h-full max-md:w-[300px] z-[999]  ";
  //* change the state of the sidebar
  const handleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };
  return (
    <main className="flex flex-row min-h-screen min-w-full  text-foreground ">
      <div
        className={`w-[300px]  z-[9999] ${sidebarWidth} max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:bottom-0  overflow-hidden  transition-all duration-500`}
      >
        <Sidebar handleSidebar={handleSidebar} />
      </div>
      <AnimatePresence>
        {!isSidebarClosed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsSidebarClosed(!isSidebarClosed)}
            className="h-screen w-screen z-[99] absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm transition-all duration-500"
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="w-full flex-1 px-10 py-8  max-md:px-4 bg-content1 ">
        <div>
          <Header handleSidebar={handleSidebar} />
        </div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
