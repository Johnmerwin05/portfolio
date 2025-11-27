"use client"

import { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

export default function AosWrapper() {
  useEffect(() => {
    AOS.init({
      once: true, // prevents animation on scroll-up
      mirror: false, // do NOT animate again when scrolling up
      duration: 600,
    })
  }, [])

  return null
}
