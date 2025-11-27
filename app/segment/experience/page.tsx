import React, { useEffect } from "react"
import { faCode, faTimeline } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AOS from "aos"

import "aos/dist/aos.css"
import { Badge } from "@/components/ui/badge"
import Timeline from "@/app/segment/experience/component/timeline"
import events from "@/app/segment/experience/value.json"

function getTotalExperience() {
  const startDate = new Date("2023-03-01")
  const now = new Date()

  let years = now.getFullYear() - startDate.getFullYear()
  let months = now.getMonth() - startDate.getMonth()
  let days = now.getDate() - startDate.getDate()

  if (days < 0) {
    months -= 1
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return { years, months }
}

export default function Experience() {
  const { years, months } = getTotalExperience()
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div className="container pt-8 sm:pb-28" id="experience">
      {/* Header */}
      <div
        className="flex flex-col items-center justify-center gap-3 mt-20 mb-5 sm:mt-0 sm:text-4xl md:flex-row md:text-2xl dark:text-white md:gap-5"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <div className="flex flex-row items-center gap-3 uppercase">
          <FontAwesomeIcon icon={faTimeline} className="text-violet-500" />
          <p>Experience</p>
          <Badge variant="secondary">
            {years} years & {months} months
          </Badge>
        </div>
      </div>

      <Timeline events={events} />
    </div>
  )
}
