"use client"

import { Separator } from "@radix-ui/react-separator"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Event {
  title: string
  sub_title: string
  date: string
  description: string | string[]
  technology: string[]
}

interface TimelineProps {
  events: Event[]
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative w-full p-0 mx-auto space-y-16 overflow-x-hidden sm:p-16">
      {/* Center Line */}
      <div className="absolute top-0 w-0.5 rounded h-full transform -translate-x-1/2 bg-violet-500 left-1/2"></div>

      {events.map((event, index) => {
        const isLeft = index % 2 === 0

        return (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-start ${
              isLeft ? "md:justify-start" : "md:justify-end"
            }`}
            data-aos={isLeft ? "fade-right" : "fade-left"}
          >
            {/* Circle connecting to center line */}
            <div className="absolute z-10 p-1 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full dark:bg-gray-950 left-1/2 top-6 md:top-1/2">
              <div className="w-5 h-5 border-2 border-white rounded-full bg-violet-500 dark:border-gray-950"></div>
            </div>

            {/* Event Card */}
            <div
              className={`w-full mt-[38px] sm:mt-0 md:w-1/2 ${
                isLeft
                  ? "md:pr-8 text-left md:text-left"
                  : "md:pl-8 text-left md:text-left"
              }`}
            >
              <Card className="p-4 transition-all duration-200 border rounded-sm shadow-sm dark:border-gray-700 dark:bg-gray-950">
                <CardHeader>
                  {/* Title (same as Project card) */}
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                    <div className="text-sm font-medium">{event.sub_title}</div>
                  </CardTitle>

                  {/* Date (same styling as the small description in Project card) */}
                  <CardDescription className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    {event.date}
                  </CardDescription>

                  {/* Technology Badges */}
                  <div>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {event.technology?.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Separator
                      orientation="horizontal"
                      className="h-[0.9px] my-4 bg-gray-300"
                    />
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-3">
                  {Array.isArray(event.description) ? (
                    <ul className="pl-5 space-y-3 text-sm text-gray-700 list-disc dark:text-gray-300">
                      {event.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {event.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Timeline
