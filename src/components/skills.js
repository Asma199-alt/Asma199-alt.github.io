import React from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import AnimatedSectionTitle from "./AnimatedSectionTitle"
import "../styles/skills.scss"

const Skills = () => {
  const { language } = useLanguage();
  return (
    <div className="section" id="skills">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <AnimatedSectionTitle text={getText(data.sections.skills, language)} />
        </Fade>
        <div className="skills-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {data.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.img} alt={skill.title} loading="lazy" />
                  <h3>{skill.title}</h3>
                  <p>{skill.para}</p>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
