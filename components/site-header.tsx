"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Menu, Phone, X } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="top-0 z-10 pt-2 pb-2 bg-transparent">
      <div className="container flex items-center justify-between h-full">
        {/* Mobile Menu Button */}
        <button
          className="p-2 sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Contact Info */}
        <div className="items-center hidden space-x-8 text-sm sm:flex">
          <a
            href="tel:+639271789423"
            className="flex items-center gap-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Phone size={18} /> +63 927 178 9423
          </a>

          <a
            href="mailto:merwin.cielo5@gmail.com"
            className="flex items-center gap-2 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Mail size={18} /> merwin.cielo5@gmail.com
          </a>

          {/* Light/Dark Mode */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col px-6 pb-4 space-y-4 text-sm sm:hidden">
          <a
            href="tel:+639123456789"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Phone size={20} /> +63 912 345 6789
          </a>

          <a
            href="mailto:johncielo@example.com"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 transition hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Mail size={20} /> johncielo@example.com
          </a>

          {/* Theme toggle for mobile */}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
