"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "ABOUT US", href: "#link" },
  { name: "EXPLORE SPACES", href: "#link" },
  { name: "PRICING", href: "#link" },
  { name: "HOW TO BOOK", href: "#link" },
  { name: "CONTACT US", href: "#link" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full pt-2"
      >
        <div
          className={cn(
            "mx-auto md:mx-2 lg:mx-auto sm:mx-2 max-w-7xl rounded-3xl px-6 transition-all  duration-300 lg:px-12",
            scrolled && "bg-black/30 backdrop-blur-3xl"
          )}
        >
          <motion.div
            key={1}
            className={cn(
              "relative flex items-center justify-between py-3 duration-200 lg:py-6",
              scrolled && "lg:py-4"
            )}
          >
            {/* Logo Left (always visible) */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
            </div>

            {/* Desktop Menu Center (lg+) */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-muted-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Button Right (lg+) */}
            <div className="hidden lg:flex items-center ml-auto">
              <Button
                asChild
                size="default"
                variant="outline"
                className="text-black border border-white hover:text-gray-300 px-6 py-2 rounded-2xl"
              >
                <Link href="#">
                  <span>BOOK A SPACE</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Burger Button Right (<lg) */}
            <div className="flex flex-1 lg:hidden justify-end">
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 block cursor-pointer p-2.5"
              >
                <Menu
                  className={`size-6 duration-200 ${
                    menuState ? "rotate-180 scale-0 opacity-0" : ""
                  }`}
                />
                <X
                  className={`absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 ${
                    menuState ? "rotate-0 scale-100 opacity-100" : ""
                  }`}
                />
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
              className={`bg-background rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 dark:shadow-none mb-6 w-full absolute top-16 left-0 z-30 transition-all duration-200 lg:hidden ${
                menuState ? "block" : "hidden"
              }`}
            >
              <ul className="space-y-6 text-base mb-4 text-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="default"
                variant="outline"
                className="w-full cursor-pointer  text-black border hover:text-gray-300 px-6 py-2 rounded-2xl"
              >
                <Link href="#">
                  <span>BOOK A SPACE</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};
