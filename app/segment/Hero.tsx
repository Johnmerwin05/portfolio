"use client"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Separator } from "@/components/ui/separator"
import certificationData from "@/app/segment/certifications/values.json"

import ProjectValues from "./portfolio/values/project_values.json"

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

const Hero = () => {
  const { years, months } = getTotalExperience()

  return (
    <section
      id="home"
      className="container relative flex flex-col h-full pt-16 mb-56 overflow-hidden sm:mb-20 sm:pt-16 sm:pl-28 sm:pe-28"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        {/* TEXT */}
        <div className="relative z-10 sm:mt-[-50px] mt-[-10px] flex flex-col gap-4 text-center sm:w-2/3 sm:text-left">
          <span
            className="text-sm font-semibold text-indigo-500"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Software Developer
          </span>
          <h1
            className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-4xl"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Hello, I&apos;m
            <br />
            john Merwin Cielo
          </h1>

          <p
            className="max-w-md mt-2 text-sm leading-relaxed text-gray-300"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            “I approach software development with purpose—building quality
            solutions while continually elevating my skills. Growth isn’t a
            goal, but a daily practice reflected in how I design, build, and
            refine my work.”
          </p>

          {/* ACTIONS */}
          <div
            className="flex items-center justify-center gap-5 mt-2 ps-2 sm:justify-start"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <a
              href="https://github.com/Johnmerwin05"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-yellow-500 transition-transform border border-yellow-500 rounded-sm hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="pr-2 text-yellow-500"
              />
              Github
            </a>
            <a
              href="https://linkedin.com/in/john-merwin-cielo"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-blue-500 transition-transform border border-blue-500 rounded-sm hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="pr-2 text-blue-500"
              />
              LinkedIn
            </a>
          </div>

          <div
            className="flex flex-col items-center gap-6 mt-5 text-center sm:flex-row sm:justify-center lg:items-start lg:text-left lg:justify-start lg:gap-14"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-4xl font-semibold text-gray-300">{years}+</p>
              <p className="text-xs text-gray-400 sm:w-1/2">Years Experience</p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-4xl font-semibold text-gray-300">
                {ProjectValues.length}
              </p>
              <p className="text-xs text-gray-400 sm:w-1/2">
                Projects Completed
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-4xl font-semibold text-gray-300">
                {certificationData.certifications.length}
              </p>
              <p className="text-xs text-gray-400 sm:w-1/2">
                Trainings Attended
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        {/* UPDATED IMAGE WRAPPER */}
        <div
          className="
            w-full max-w-[350px] 
            sm:max-w-[400px] 
            md:max-w-[450px]
            lg:max-w-[440px]
            rounded-2xl
            hover:scale-105 hover:rotate-3 transition-all
            
          "
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src="/images/profile/johnmerwincielo.png"
            alt="Profile"
            className="w-full h-auto pb-5 rounded-2xl mt-[-20px] opacity-85"
          />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(25px, -20px) scale(1.08);
          }
          66% {
            transform: translate(-20px, 25px) scale(0.92);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

export default Hero
