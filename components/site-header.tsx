"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background sm:sticky top-0 border-b z-10 pt-1 pb-1">
      <div className="container flex h-full items-center justify-between">

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center space-x-5">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#portfolio">Portfolio</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#certifications">Certifications</NavItem>
          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {open && (
        <div className="sm:hidden flex flex-col px-6 pb-4 space-y-3">
          <NavItem href="#home" onClick={() => setOpen(false)}>Home</NavItem>
          <NavItem href="#portfolio" onClick={() => setOpen(false)}>Portfolio</NavItem>
          <NavItem href="#experience" onClick={() => setOpen(false)}>Experience</NavItem>
          <NavItem href="#skills" onClick={() => setOpen(false)}>Skills</NavItem>
          <NavItem href="#certifications" onClick={() => setOpen(false)}>Certifications</NavItem>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}

function NavItem({ href, children, onClick }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}
