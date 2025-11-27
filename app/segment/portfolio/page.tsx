"use client"

import React, { useEffect } from "react"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import ProjectValues from "./values/project_values.json"

export default function Portfolio() {
  return (
    <div className="flex flex-col w-full h-auto pt-2 pb-28" id="portfolio">
      <div className="overflow-hidden md:p-6">
        <div className="sm:container">
          {/* Header */}
          <div
            className="flex flex-col items-center justify-center gap-3 sm:text-4xl md:flex-row md:text-2xl dark:text-white md:gap-5"
            data-aos="fade-up"
          >
            <div className="flex flex-row items-center gap-3 uppercase">
              <FontAwesomeIcon icon={faCode} className="text-violet-500" />
              <p>Portfolio</p>
              <Badge variant="secondary">{ProjectValues.length} Projects</Badge>
            </div>
          </div>

          {/* --------------------------- PROJECT CARDS ---------------------------- */}
          <div className="grid grid-cols-1 gap-6 p-7 md:grid-cols-2">
            {ProjectValues.map((project, index) => (
              <Card
                key={index}
                className="p-4 transition-all duration-200 border rounded-sm"
                data-aos="fade-up"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                    {project.name}
                  </CardTitle>

                  {/* SHORT DESCRIPTION */}
                  <CardDescription className="">
                    <div className="flex flex-col items-start gap-2 text-sm md:flex-row md:items-center">
                      <span>{project.platform}</span>
                      <Separator
                        orientation="vertical"
                        className="hidden h-4 bg-gray-400 md:block"
                      />

                      <span>{project.status}</span>
                      <Separator
                        orientation="vertical"
                        className="hidden h-4 bg-gray-400 md:block"
                      />

                      <span>{project.role}</span>
                      <Separator
                        orientation="vertical"
                        className="hidden h-4 bg-gray-400 md:block"
                      />

                      <span>{project.type}</span>
                    </div>
                  </CardDescription>

                  <CardDescription className="text-xs text-gray-400 ">
                    <ul className="ml-4 space-y-1 list-disc">
                      {project.higlights?.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  {/* TECHNOLOGY BADGES */}
                  <div className="flex flex-wrap gap-2">
                    {project.technology?.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* ACCORDION FOR LONG DESCRIPTION */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-sm">
                        View Full Description
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {project.long_description}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* -------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  )
}
