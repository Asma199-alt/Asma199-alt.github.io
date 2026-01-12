import React from "react"
import Fade from "./animations/Fade"
import "../styles/semesterProgress.scss"

const SemesterProgress = () => {
  const completedSemesters = 4
  const totalSemesters = 8
  const progressPercent = Math.round((completedSemesters / totalSemesters) * 100)

  return (
    <div className="section" id="semester-progress">
      <div className="container">
        <div className="semester-progress-wrapper">
          <Fade bottom distance="20px">
            <div className="semester-progress-header">
              <div className="semester-progress-title">
                University of Tulsa · B.Sc. Computer Science
              </div>
              <div className="semester-progress-subtitle">
                In progress — Semester {completedSemesters} of {totalSemesters}
              </div>
            </div>
          </Fade>
          <Fade bottom distance="20px" delay={150}>
            <div className="semester-progress-bar">
              <div className="semester-progress-track">
                <div
                  className="semester-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="semester-progress-meta">
                <span className="semester-progress-percentage">
                  {progressPercent}% complete
                </span>
                <span className="semester-progress-semesters">
                  {completedSemesters} / {totalSemesters} semesters
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default SemesterProgress


