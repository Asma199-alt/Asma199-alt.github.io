import React, { useEffect, useRef, useState } from "react"
import { withPrefix } from "gatsby"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/NVIDIA.scss"
import NvidiaModal from "./NvidiaModal"

const isVideoFile = (url) => {
  if (!url) return false
  const videoExtensions = [".webm", ".mp4", ".mov", ".avi"]
  return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext))
}

const ProjectsPreviewVideo = ({ src }) => (
  <video
    className="nvidia-media-element"
    src={src}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    loading="lazy"
  />
)

const AnimatedTitle = ({ text, letterClass }) => (
  <>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className={`about-letter ${letterClass}`}
        style={{ animationDelay: `${i * 0.06}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
)

const Projects = () => {
  const { language } = useLanguage()
  const [openModal, setOpenModal] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [letterClass, setLetterClass] = useState("text-animate-hover")
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setLetterClass("text-animate")
          const timer = setTimeout(() => setLetterClass("text-animate-hover"), 3000)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.3 }
    )

    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [hasAnimated])

  const items = data.projectsItems.map((item) => ({
    ...item,
    media: item.media.startsWith("/") ? withPrefix(item.media) : item.media,
    mediaList: [
      item.media.startsWith("/") ? withPrefix(item.media) : item.media,
    ],
    title: getText(item.title, language),
    description: getText(item.description, language),
    tags: item.tags || [],
  }))

  return (
    <div className="section" id="projects" ref={sectionRef}>
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>
            <AnimatedTitle text={getText(data.sections.projects, language)} letterClass={letterClass} />
          </h1>
        </Fade>

        <div className="nvidia-wrapper projects-wrapper">
          <div className="nvidia-projects projects-grid">
            {items.map((item, index) => (
              <button
                type="button"
                className="nvidia-project projects-card"
                key={index}
                aria-label={`Open details for ${item.title}`}
                onClick={() => {
                  setSelectedIndex(index)
                  setOpenModal(true)
                }}
              >
                <Fade bottom distance="20px">
                  <div className="nvidia-media">
                    {item.badge && (
                      <div className="project-badge">
                        {item.badge}
                      </div>
                    )}
                    {isVideoFile(item.media) ? (
                      <ProjectsPreviewVideo src={item.media} />
                    ) : (
                      <img
                        className="nvidia-media-element"
                        src={item.media}
                        alt={item.title}
                        loading="lazy"
                      />
                    )}

                    <div className="nvidia-media-overlay">
                      <div className="nvidia-media-overlay-button">View</div>
                    </div>
                  </div>
                </Fade>

                <Fade bottom distance="20px">
                  <div className="nvidia-project-body">
                    <h2 className="nvidia-project-title">{item.title}</h2>
                    {item.tags && item.tags.length > 0 && (
                      <div className="nvidia-project-tags">
                        {item.tags.map((tag, tIndex) => (
                          <span
                            className="nvidia-project-tag"
                            key={`${item.title}-${tIndex}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="nvidia-project-description">Click for more</p>
                    {item.status && (
                      <p className="nvidia-project-status">{item.status}</p>
                    )}
                  </div>
                </Fade>
              </button>
            ))}
          </div>

          {openModal && (
            <NvidiaModal
              item={items[selectedIndex]}
              id={selectedIndex}
              totalItems={items.length}
              onPrevious={() =>
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
              }
              onNext={() =>
                setSelectedIndex((prev) =>
                  prev < items.length - 1 ? prev + 1 : prev
                )
              }
              closeModal={setOpenModal}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
