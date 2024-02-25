"use client";

import { Button, Skeleton } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="flex rounded-md w-10 h-10" />;

  return (
    <Button
      color="secondary"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      isIconOnly
    >
      {theme === "dark" ? (
        <MdDarkMode
          className=" animate-wiggle rotate-0 duration-300"
          size={20}
        />
      ) : (
        <MdLightMode className="animate-wiggle" size={20} />
      )}
    </Button>
  );
}
