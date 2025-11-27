"use client"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Separator } from "@/components/ui/separator"

const Hero = () => {
  return (
    <section
      id="home"
      className="container relative flex flex-col h-full pt-16 overflow-hidden sm:pt-36 sm:pl-28 sm:pe-28"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        {/* TEXT */}
        <div className="relative z-10 sm:mt-[-50px] mt-[-10px] flex flex-col gap-4 text-center sm:w-2/3 sm:text-left">
          <span className="text-sm font-semibold text-violet-500">
            Software Developer
          </span>
          <h1
            className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl dark:text-gray-200"
            data-aos="fade-right"
          >
            Hello, I&apos;m
            <br />
            john Merwin Cielo
          </h1>

          <p
            className="max-w-md mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
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
              href="mailto:merwin.cielo5@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
            <Separator orientation="vertical" className="bg-gray-400 h-7" />
            <a
              href="https://github.com/Johnmerwin05"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <Separator orientation="vertical" className="bg-gray-400 h-7" />
            <a
              href="http://linkedin.com/in/john-merwin-cielo"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </div>
        </div>

        {/* IMAGE */}
        {/* UPDATED IMAGE WRAPPER */}
        <div
          className="
            w-full max-w-[380px] 
            sm:max-w-[420px] 
            md:max-w-[480px]
            lg:max-w-[520px]
            rounded-2xl
            hover:scale-105 hover:rotate-3 transition-all
          "
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src="/images/profile/johnmerwincielo.png"
            alt="Profile"
            className="w-full h-auto pb-5 rounded-2xl mt-[-20px]"
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
