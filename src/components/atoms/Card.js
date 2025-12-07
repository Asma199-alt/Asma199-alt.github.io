import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import data, { getText } from "../../data";

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = [".webm", ".mp4", ".mov", ".avi"];
  return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
};

const Card = ({
  id,
  heading,
  paragraph,
  imgUrl,
  projectLink,
  setOpenModal,
  setId,
  type = "project",
  tags = [],
}) => {
  const { language } = useLanguage();
  const isVideo = isVideoFile(imgUrl);
  const isEducation = type === "education";

  const handleClick = () => {
    if (setOpenModal && setId) {
      setOpenModal(true);
      setId(id);
    } else if (projectLink) {
      window.open(projectLink, "_blank");
    }
  };
  
  return (
    <div className={`card ${isEducation ? "card-education" : ""}`}>
      <div className="card-media">
        {isVideo ? (
          <video
            className="card-media-element"
            src={imgUrl}
            autoPlay
            muted
            loop
            playsInline
            loading="lazy"
            preload="metadata"
          />
        ) : isEducation ? (
          <img
            className="card-media-element card-media-education-logo"
            src={imgUrl}
            alt={heading}
            loading="lazy"
          />
        ) : (
          <div
            className="card-media-image"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                imgUrl +
                ")",
            }}
          />
        )}

        {isEducation && (
          <div className="card-media-overlay">
            <h3 className="card-education-title">{heading}</h3>
            <p
              className="card-education-text"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
            <button
              type="button"
              className="card-media-overlay-button card-education-btn"
              onClick={handleClick}
            >
              {getText(data.buttons.explore, language)}
            </button>
          </div>
        )}
      </div>

      {!isEducation && (
        <div className="card-body">
          <h3 className="card-title">{heading}</h3>
          <p
            className="card-text"
            // Allow links / basic formatting from data
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />

          {tags && tags.length > 0 && (
            <div className="card-tags">
              {tags.map((tag, index) => (
                <span key={index} className="card-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <button onClick={handleClick} type="button" className="card-btn">
            {getText(data.buttons.explore, language)}
          </button>
        </div>
      )}
    </div>
  );
};
    
export default Card;
