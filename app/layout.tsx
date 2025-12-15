import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* ENTIRE APP BACKGROUND */}
          <div
            className="relative w-auto min-h-screen 
            bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] 
            from-[#111827] via-[#111827] to-[#111827]"
          >
            {/* GLOBAL BOX PATTERN */}
            <div
              className="absolute inset-0 pointer-events-none -z-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff20 2px, transparent 2px)",
                backgroundSize: "15px 15px",
              }}
            />

            {/* APP CONTENT */}
            <SiteHeader />
            {children}
          </div>

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
