"use client"

import React, { useState } from "react"
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

import ProjectValues from "./values/project_values.json"

export default function Portfolio() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const handleCardClick = (project: any) => {
    setSelectedProject(project)
    setOpen(true)
  }

  // Convert dynamic image paths
  const getImages = (project: any) => {
    if (!project) return []

    if (Array.isArray(project.images_path)) {
      return project.images_path
    }

    if (typeof project.images_path === "string") {
      const count = project.images_num_web ?? 0
      return Array.from({ length: count }, (_, index) => {
        return `${project.images_path}/${index + 1}.jpg`
      })
    }

    return []
  }

  return (
    <div className="flex flex-col w-full h-auto pt-2 mt-5 pb-28" id="portfolio">
      <div className="md:p-6">
        <div className="sm:container">
          {/* Header */}
          <div
            className="flex flex-col items-center justify-center gap-3 sm:text-4xl md:flex-row md:text-2xl dark:text-white md:gap-5"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <div className="flex flex-row items-center gap-3 uppercase">
              <FontAwesomeIcon icon={faCode} className="text-violet-500" />
              <p>Portfolio</p>
              <Badge variant="secondary">{ProjectValues.length} Projects</Badge>
            </div>
          </div>

          {/* --------------------------- PROJECT CARDS ---------------------------- */}
          <div className="grid grid-cols-1 gap-6 p-7 md:grid-cols-2 min-h-[200px]">
            {ProjectValues.map((project, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(project)}
                className="p-4 transition-all duration-200 border rounded-sm cursor-pointer hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <CardHeader>
                  {(() => {
                    const images = getImages(project)
                    return images.length > 0 ? (
                      <img
                        src={images[0]}
                        alt="Project Screenshot"
                        className="object-cover w-full h-48 border rounded-lg shadow-md"
                      />
                    ) : (
                      <p className="flex items-center justify-center w-full h-48 text-center text-gray-500 bg-gray-200 border rounded-lg shadow-md">
                        No image available
                      </p>
                    )
                  })()}
                  <div className="mt-2"></div>
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                    {project.name}
                  </CardTitle>

                  {/* SHORT DESCRIPTION */}
                  <CardDescription>
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
                      {project.higlights?.map((highlight: any, i: number) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  {/* TECHNOLOGY BADGES */}
                  <div className="flex flex-wrap gap-2">
                    {project.technology?.map((tech: any, i: number) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
