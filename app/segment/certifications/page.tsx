"use client"

import React, { useEffect, useState } from "react"
import { faCertificate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import certificationData from "@/app/segment/certifications/values.json"

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container h-auto pb-10" id="certifications">
      {/* Header */}
      <div
        className="flex flex-col items-center justify-center gap-3 mt-20 sm:mt-0 sm:text-4xl md:flex-row md:text-2xl dark:text-white md:gap-5"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-offset="200"
      >
        <div className="flex flex-row items-center gap-3 uppercase">
          <FontAwesomeIcon icon={faCertificate} className="text-violet-500" />
          <p>Certifications</p>
          <Badge variant="secondary">
            {certificationData.certifications.length} Documents
          </Badge>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {certificationData.certifications.map((cert, index) => (
          <Card
            key={index}
            className="transition-all duration-200 border rounded-sm cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedImage(cert.image)}
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
            data-aos-duration="800"
          >
            <CardContent className="p-4">
              <div className="flex flex-col items-center gap-3 text-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="object-cover w-full h-40 rounded-md"
                />
                <p className="text-lg font-semibold">{cert.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.description}
                </p>
                <p className="text-xs opacity-70">{cert.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelectedImage(null)}
        >
          <div className="w-full max-w-4xl p-4">
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
