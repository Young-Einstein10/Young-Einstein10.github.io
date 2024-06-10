"use client";
import { useState } from "react";
import { DarkIcon, LightIcon } from "@/app/components/icons";
import { cn } from "@/utils/helpers";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const classes = cn(
    "absolute top-0 left-0 right-0 translate-y-[calc(20px_*_-1)] transition-[opacity_0.15s_linear,_transform_0.75s_cubic-bezier(0.16,_1,_0.3,_1)]",
    theme === "light" ? "opacity-1" : "opacity-0"
  );

  return (
    <button
      onClick={toggleTheme}
      className="p-3 relative rounded-xl border-[.5px] border-transparent transition hover:border-[rgba(242,_242,_242,_.1)] hover:bg-[rgba(242,_242,_242,_.02)] cursor-pointer"
    >
      {theme === "light" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};
