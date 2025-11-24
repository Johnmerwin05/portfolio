"use client"

import React from "react"
import { faCode, faToolbox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import skillsData from "@/app/segment/skills/value.json"

export default function Skills() {
  const { frontend, backend, database, others } = skillsData.skills

  // Reusable Component
  const Section = ({ title, data }: any) => (
    <div className="space-y-6" data-aos="fade-up">
      <Badge className="mb-2" variant="secondary">
        {title}
      </Badge>

      <Card className="bg-transparent border-none shadow-none">
        <CardContent className="p-0">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {data.map((tech: any, i: number) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-sm dark:bg-gray-100 w-14 h-14">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="object-contain w-8 h-8"
                  />
                </div>

                <p className="text-sm dark:text-gray-300">{tech.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="container h-auto pb-10 mb-28" id="skills">
      {/* Header */}
      <div
        className="flex flex-col items-center justify-center gap-3 mt-20 sm:mt-0 sm:text-4xl md:flex-row md:text-2xl dark:text-white md:gap-5"
        data-aos="fade-up"
      >
        <div className="flex flex-row items-center gap-3 uppercase">
          <FontAwesomeIcon icon={faToolbox} />
          <p>Tech Stack</p>
          <Badge variant="secondary">Flexible</Badge>
        </div>
      </div>

      {/* Sections */}
      <div className="mt-12 space-y-16">
        <Section title="Front-end" data={frontend} />

        <Separator />

        <Section title="Back-end" data={backend} />

        <Separator />

        <Section title="Database" data={database} />

        <Separator />

        <Section title="Others" data={others} />
      </div>
    </div>
  )
}
