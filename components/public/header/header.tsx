"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useScroll } from "motion/react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "EXPLORE SPACES", href: "#link" },
  { name: "HOW TO BOOK", href: "#link" },
  { name: "CONTACT US", href: "/contact-us" },
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
      <nav className="fixed z-50 w-full pt-2 px-2">
        {/* TOP BAR */}
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-4 transition-all duration-300 lg:px-12",
            scrolled && "bg-black/30 backdrop-blur-3xl"
          )}
        >
          <div
            className={cn(
              "relative flex items-center justify-between py-3 duration-200 lg:py-6",
              scrolled && "lg:py-4"
            )}
          >
            {/* Logo */}
            <Link href="/">
              <Logo
                className={
                  scrolled
                    ? "text-black transition-colors duration-500"
                    : "text-white transition-colors duration-500"
                }
              />
            </Link>

            {/* Desktop Menu */}
            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block text-white transition hover:text-muted-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="ml-auto hidden items-center lg:flex">
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white px-6 py-2 text-black hover:text-gray-300"
              >
                <Link href="#">BOOK A SPACE</Link>
              </Button>
            </div>

            {/* Burger */}
            <div className="flex flex-1 justify-end lg:hidden">
              <button
                onClick={() => setMenuState(true)}
                aria-label="Open menu"
                className="relative z-[60] -m-2.5 p-2.5"
              >
                <Menu className="size-6" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "fixed inset-0 z-40 lg:hidden transition",
            menuState ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div
            onClick={() => setMenuState(false)}
            className={cn(
              "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
              menuState ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Panel */}
          <div
            className={cn(
              "relative mx-3 mt-20 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl transition-all duration-300",
              menuState
                ? "translate-y-0 opacity-100"
                : "-translate-y-6 opacity-0"
            )}
          >
            <div className="px-6 py-6">
              {/* Mobile menu header */}
              <div className="mb-4 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMenuState(false)}
                  className="flex items-center gap-2"
                >
                  <Logo />
                </Link>

                <button
                  onClick={() => setMenuState(false)}
                  aria-label="Close menu"
                  className="rounded-full p-2 transition hover:bg-white/10"
                >
                  <X className="size-6 text-white" />
                </button>
              </div>

              <div className="h-px w-full bg-white/10 mb-10" />

              {/* Links */}
              <ul className="space-y-8 text-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="text-lg font-medium tracking-wide text-white/90 transition hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-12 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-white px-10 text-black hover:bg-white/90"
                >
                  <Link href="#">BOOK A SPACE</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
