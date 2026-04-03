import React from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import SpinningCube from "./SpinningCube"
import AnimatedSectionTitle from "./AnimatedSectionTitle"
import "../styles/footer.scss"

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="contact-row">
          <SpinningCube />
          <div className="footer-container">
          <Fade bottom distance="20px" duration={1000}>
            <AnimatedSectionTitle text={getText(data.sections.contact, language)} />
          </Fade>
          <Fade bottom>
            <a className="email-link" href={`mailto:${data.contactEmail}`}>
              {data.contactEmail}
            </a>
            {/*
              Resume button hidden (kept for later):
              <button
                type="button"
                className="primary-btn"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = withPrefix("/resume");
                  }
                }}
              >
                {getText(data.nav.resume, language)}
              </button>
            */}
          </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
