"use client";

import { useEffect, useState } from "react";
import { House, Info, GraduationCap, Code, FolderOpen, Mail, Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Home", Icon: House },
  { href: "#about", label: "About", Icon: Info },
  { href: "#education", label: "Education", Icon: GraduationCap },
  { href: "#skills", label: "Skills", Icon: Code },
  { href: "#projects", label: "Projects", Icon: FolderOpen },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    localStorage.theme = dark ? "dark" : "light";
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 py-4 transition ${scrolled ? "bg-page shadow-sm" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <a href="#hero" className="text-2xl font-bold">
          <span className="text-primary">HS</span>Works
        </a>

        <div className="flex items-center gap-2">
          <ul
            className={`fixed inset-y-0 right-0 flex w-16 flex-col items-center gap-2 bg-page pt-4 transition-transform lg:static lg:w-auto lg:translate-x-0 lg:flex-row lg:bg-transparent lg:pt-0 ${open ? "" : "translate-x-full"}`}
          >
            <li className="lg:hidden">
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <X size={26} />
              </button>
            </li>
            {links.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-label={label}
                  className="flex p-2 font-medium hover:text-primary lg:px-4"
                >
                  <Icon size={26} className="lg:hidden" />
                  <span className="hidden lg:inline">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid size-10 place-items-center rounded-full border border-line hover:border-primary hover:bg-primary hover:text-white"
          >
            <Moon size={18} className="dark:hidden" />
            <Sun size={18} className="hidden dark:block" />
          </button>

          <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-2 lg:hidden">
            <Menu size={26} />
          </button>
        </div>
      </div>
    </nav>
  );
}