import { useEffect, useMemo, useState } from "react"
import {
  MoveDirection,
  OutMode,
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

import { GlobalStore } from "./GlobalStore"

export const BgParticles = () => {
  const [init, setInit] = useState(false)
  const { is_dark } = GlobalStore()
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container)
  }
  const options: ISourceOptions = useMemo(
    () => ({
      key: is_dark.toString(),
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: is_dark ? "#ffffff" : "#000" },
        links: {
          color: is_dark ? "#ffffff" : "#000",
          distance: 190,
          enable: true,
          opacity: 0.2,
          width: 0.2,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 3,
        },
        number: {
          density: { enable: true },
          value: 150,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  )

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  )
}
