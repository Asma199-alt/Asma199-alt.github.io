import React, { useState } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/NVIDIA.scss"
import NvidiaModal from "./NvidiaModal"

// Import NVIDIA images from the nvidia folder
import gr1ImitationVideo from "./../images/nvidia/BaqerHassani_Tracer_Lidar_Swarm_Video_Demo.mp4"
import h1FlipGif from "./../images/nvidia/wam_barret.mp4"
import leatherbackVideo from "./../images/nvidia/baqer_Vid/anti_tip_paper.mp4"
import h1TrainVideo from "./../images/nvidia/baqer_Vid/swarm_robotic_3tracers.mp4"
import frankaMoveitVideo from "./../images/nvidia/Franka Moveit.mp4"
import frankaDrawerVideo from "./../images/nvidia/Franka Drawer.mp4"
import carterOutdoorVideo from "./../images/nvidia/Carter Outdoor.mp4"
import agilityWalkVideo from "./../images/nvidia/Agility Walk.mp4"
import gtc_lousd from "./../images/nvidia/IMG_2228.webp"
import gtc_sil from "./../images/nvidia/gtc_sil.webp"
import newton from "./../images/nvidia/newton.webp"
import claw from "./../images/nvidia/claw.mp4"
import urLousdVideo from "./../images/publications/ur_lousd.mp4"
import siggraphTalk from "./../images/nvidia/IMG_2877.webp"

// Helper to detect video media
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = [".webm", ".mp4", ".mov", ".avi"];
  return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
};

const NVIDIA = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Media mapping
  const mediaMap = {
    gr1ImitationVideo,
    h1FlipGif,
    h1TrainVideo,
    urLousdVideo,
    frankaMoveitVideo,
    frankaDrawerVideo,
    claw,
    leatherbackVideo,
    carterOutdoorVideo,
    agilityWalkVideo,
    gtc_lousd,
    gtc_sil,
    newton,
    siggraphTalk
  };

  // Prepare items with resolved media
  const items = data.nvidiaCarouselItems.map((item) => {
    const baseMedia = mediaMap[item.media];
    const galleryKeys = item.gallery || [];
    const galleryMedia = galleryKeys
      .map((key) => mediaMap[key])
      .filter(Boolean);

    const mediaList = [baseMedia, ...galleryMedia];

    return {
    ...item,
      media: baseMedia,
      mediaList,
    title: getText(item.title, language),
      description: getText(item.description, language),
      tags: item.tags || [],
    };
  });

  return (
    <div className="section" id="nvidia">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.nvidia, language)}</h1>
          {/* <h3>{getText(data.nvidiaTime, language)}</h3> */}
        </Fade>
        
        <div className="nvidia-wrapper">
          <div className="nvidia-projects">
            {items.map((item, index) => (
              <section
                className="nvidia-project"
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                  setOpenModal(true);
                }}
              >
                <Fade bottom distance="20px">
                  <div className="nvidia-media">
                    {isVideoFile(item.media) ? (
                      <video
                        className="nvidia-media-element"
                        src={item.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        loading="lazy"
                      />
                    ) : (
                      <img
                        className="nvidia-media-element"
                        src={item.media}
                        alt={item.title}
                        loading="lazy"
                      />
                    )}

                    <div className="nvidia-media-overlay">
                      <div className="nvidia-media-overlay-button">
                        View
                      </div>
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
                    <p className="nvidia-project-description">
                      {item.description}
                    </p>
                  </div>
              </Fade>
              </section>
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

export default NVIDIA
