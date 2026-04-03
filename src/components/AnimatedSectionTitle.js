import React, { useEffect, useRef, useState } from "react"
import "../styles/sectionAnimatedTitle.scss"

const AnimatedSectionTitle = ({ text }) => {
  const [letterClass, setLetterClass] = useState("section-text-animate-hover")
  const [hasAnimated, setHasAnimated] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setLetterClass("section-text-animate")
          const timer = setTimeout(() => {
            setLetterClass("section-text-animate-hover")
          }, 3000)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.3 }
    )

    const el = titleRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [hasAnimated])

  return (
    <h1 ref={titleRef}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`section-animated-letter ${letterClass}`}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  )
}

export default AnimatedSectionTitle
