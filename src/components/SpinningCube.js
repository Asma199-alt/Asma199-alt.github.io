import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faCss3, faJava, faGithub, faLinux, faReact } from "@fortawesome/free-brands-svg-icons"

const SpinningCube = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faPython} color="#ffd700" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faJava} color="#EC4D28" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faGithub} color="#333" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faLinux} color="#E95420" />
        </div>
      </div>
    </div>
  )
}

export default SpinningCube
