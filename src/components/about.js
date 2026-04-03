import React, { useState, useEffect } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import selfImage from "./../images/asma_about.jpeg"
import "../styles/about.scss"

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

const About = () => {
  const { language } = useLanguage();
  const [letterClass, setLetterClass] = useState("text-animate-hover");
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setLetterClass("text-animate");
          const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
          }, 3000);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasAnimated]);

  return (
    <div className="section" id="about" ref={sectionRef}>
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>
            <AnimatedTitle text="About me" letterClass={letterClass} />
          </h1>
        </Fade>
        <div className="about-section">
          <div className="content">
            <Fade bottom distance="20px">
              <p>
                {getText(data.aboutParaOne, language)}
                <br />
                <br />
                {getText(data.aboutParaTwo, language)}
                <br />
                <br />
                {getText(data.aboutParaThree, language)}
              </p>
            </Fade>
          </div>
          <Fade bottom duration={1000} distance="20px">
            <div className="image-container">
              <img src={selfImage} alt="Asma Mohseni" className="img-fluid" loading="lazy" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
