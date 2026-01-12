import React, { useEffect, useRef, useState } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/NVIDIA.scss"
import NvidiaModal from "./NvidiaModal"

// Import NVIDIA images from the nvidia folder
import gr1ImitationVideo from "./../images/nvidia/baqer_Vid/Tracer_Lidar.mp4"
import h1FlipGif from "./../images/nvidia/asma_Vid/Archelology2.mp4"
import leatherbackVideo from "./../images/nvidia/baqer_Vid/swarm_robotic_3tracers.mp4"
import h1TrainVideo from "./../images/nvidia/baqer_Vid/anti_tip_paper.mp4"
import frankaMoveitVideo from "./../images/nvidia/asma_Vid/sim.mp4"
import frankaDrawerVideo from "./../images/nvidia/Franka Drawer.mp4"
import carterOutdoorVideo from "./../images/nvidia/Carter Outdoor.mp4"
import agilityWalkVideo from "./../images/nvidia/Agility Walk.mp4"
import gtc_lousd from "./../images/nvidia/IMG_2228.webp"
import gtc_sil from "./../images/nvidia/gtc_sil.webp"
import newton from "./../images/nvidia/asma_Vid/singularity.mp4"
import claw from "./../images/nvidia/asma_Vid/gripper.mp4"
import urLousdVideo from "./../images/nvidia/asma_Vid/follow2.mp4"
import siggraphTalk from "./../images/nvidia/asma_Vid/bimanualpickplace.mp4"



// Helper to detect video media
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = [".webm", ".mp4", ".mov", ".avi"];
  return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
};

const NvidiaPreviewVideo = ({ src, className, previewStart, previewEnd }) => {
  const videoRef = useRef(null);
  const hasPreviewWindow =
    typeof previewStart === "number" && typeof previewEnd === "number";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasPreviewWindow) return;

    const safeStart = Math.max(0, previewStart);
    const safeEnd = Math.max(safeStart, previewEnd);

    const seekToStartIfNeeded = () => {
      try {
        if (
          Number.isFinite(video.currentTime) &&
          (video.currentTime < safeStart || video.currentTime > safeEnd)
        ) {
          video.currentTime = safeStart;
        }
      } catch (_) {
        // ignore
      }
    };

    const handleLoadedMetadata = () => {
      seekToStartIfNeeded();
      video.play().catch(() => {});
    };

    const handleTimeUpdate = () => {
      // Add a tiny cushion so it loops cleanly
      if (video.currentTime >= safeEnd - 0.05) {
        try {
          video.currentTime = safeStart;
          video.play().catch(() => {});
        } catch (_) {
          // ignore
        }
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    // If metadata is already available, apply immediately
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [hasPreviewWindow, previewStart, previewEnd, src]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      muted
      loop={!hasPreviewWindow}
      playsInline
      preload="metadata"
      loading="lazy"
    />
  );
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
                      <NvidiaPreviewVideo
                        className="nvidia-media-element"
                        src={item.media}
                        previewStart={item.previewStart}
                        previewEnd={item.previewEnd}
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
