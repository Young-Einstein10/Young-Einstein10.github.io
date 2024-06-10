import type { Metadata } from "next";
import { MenuIcon } from "@/app/components/icons";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeToggler } from "./components/ui";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdulrahman Yusuf || Software Engineer",
  description:
    "Software Engineer with 5 years experience based in Lagos, Nigeria",
};

const Navbar = () => {
  const menus = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "Blog",
      href: "https://blog.abdulyusuf.me",
      isExternal: true,
    },
  ];
  return (
    <header className="py-10 wrapper">
      <nav className="flex items-center justify-between">
        {/* <div className="w-10 border-2 border-white flex items-center justify-center p-4"> */}
        <Link href="/">
          <div className="w-10 border-2 border-white flex items-center justify-center p-2">
            <div className="h-8 w-10 border-2 border-white flex items-center justify-center"></div>
          </div>
        </Link>
        {/* </div>/\   */}

        <ul className="hidden sm:flex items-center border-[0.5px] border-[rgba(242,_242,_242,_.1)] bg-[rgba(242,_242,_242,_.02)] gap-2 px-2 py-4 rounded-full text-sm backdrop-blur-lg">
          {menus.map((menu) => (
            <li key={menu.label}>
              <Link
                href={menu.href}
                className="px-6 py-3 hover:bg-zinc-800 transition-colors rounded-3xl"
                {...(menu.isExternal && {
                  target: "_blank",
                  rel: "noreferrer noopener",
                })}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <button className="sm:hidden p-3 rounded-xl border-[.5px] border-transparent transition hover:border-[rgba(242,_242,_242,_.1)] hover:bg-[rgba(242,_242,_242,_.02)] cursor-pointer">
            <MenuIcon />
          </button>
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="mt-24 py-10 wrapper">
      <div className="flex items-center justify-between">
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} All rights reserved
        </p>

        <div className="flex items-center text-sm">
          Built with:
          <ul className="ml-2 flex items-center gap-2">
            <li>
              <Link href="https://next.org" className="hover:underline">
                {/* <Image
                  className="mr-2"
                  src="/next.svg"
                  width={20}
                  height={20}
                  alt="Next.js"
                /> */}
                Next
              </Link>
            </li>
            <li>
              <Link href="https://vercel.com" className="hover:underline">
                {/* <Image
                  className="mr-2"
                  src="/vercel.svg"
                  width={20}
                  height={20}
                  alt="Vercel"
                /> */}
                Vercel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main className="wrapper min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
