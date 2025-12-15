"use client"

import AOS from "aos"

import "aos/dist/aos.css"
import { useEffect } from "react"
import { useTheme } from "next-themes"

import { GlobalStore } from "@/app/GlobalStore"
import Hero from "@/app/segment/Hero"
import Experience from "@/app/segment/experience/page"
import Footer from "@/app/segment/footer/page"
import Porfolio from "@/app/segment/portfolio/page"
import Skills from "@/app/segment/skills/page"

import { BgParticles } from "./particles"
import Certifications from "./segment/certifications/page"

export default function IndexPage() {
  const { theme } = useTheme() // Get the current theme from next-themes
  const { set_is_dark } = GlobalStore()
  // Log theme changes to the console
  useEffect(() => {
    if (theme === "dark") {
      set_is_dark(true)
    } else {
      set_is_dark(false)
    }
    console.log(
      `Current theme: ${theme === "dark" ? "Dark mode" : "Light mode"}`
    )
  }, [theme])

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 20,
    })

    // Fix layout shift issues
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }, [])

  useEffect(() => {
    const handleLoad = () => AOS.refresh()
    window.addEventListener("load", handleLoad)
    return () => window.removeEventListener("load", handleLoad)
  }, [])

  const { is_dark } = GlobalStore()

  return (
    <div className="w-full h-full">
      {/* <BgParticles key={is_dark.toString()} /> */}
      <Hero />
      <Porfolio />
      <Experience />
      <Skills />
      <Certifications />
      {/* <Footer /> */}
    </div>
  )
}
