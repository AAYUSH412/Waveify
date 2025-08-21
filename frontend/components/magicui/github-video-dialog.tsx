"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GitHubVideoProps {
  videoSrc: string;
  mobilePosterSrc?: string;
  desktopPosterSrc?: string;
  videoAlt?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export function GitHubVideoDialog({
  videoSrc,
  mobilePosterSrc,
  desktopPosterSrc,
  videoAlt = "Waveify demo video",
  className,
  autoPlay = true,
  muted = true,
  loop = true,
}: GitHubVideoProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if the videoSrc is a YouTube URL
  const isYouTubeVideo = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');

  // Viewport intersection observer for auto play/pause
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
        
        // Auto play when in view, pause when out of view
        if (entry.isIntersecting && autoPlay) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
        rootMargin: "-10% 0px -10% 0px", // Add some margin
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  // Handle video play/pause state
  useEffect(() => {
    if (isYouTubeVideo) {
      // YouTube iframes handle autoplay through URL parameters
      // No additional JavaScript control needed
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      video.play().catch((error) => {
        console.log("Video play failed:", error);
        setIsPlaying(false);
      });
    };

    const handlePause = () => {
      video.pause();
    };

    if (isPlaying && isInView) {
      handlePlay();
    } else {
      handlePause();
    }
  }, [isPlaying, isInView, isYouTubeVideo]);

  // Update video muted state
  useEffect(() => {
    if (isYouTubeVideo) {
      // YouTube mute state is controlled by URL parameters
      return;
    }

    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
  }, [isMuted, isYouTubeVideo]);

  const togglePlay = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying(prev => !prev);
  }, []);

  const toggleMute = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsMuted(prev => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  const handleVideoClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    togglePlay();
  }, [togglePlay]);

  return (
    <>
      {/* Main Video Container */}
      <div 
        className={cn("relative w-full aspect-video overflow-hidden rounded-3xl", className)}
        ref={containerRef}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        role="img"
        aria-label={videoAlt}
      >
        {/* Background Images */}
        <div className="absolute inset-0 -z-10">
          {/* Desktop Background */}
          <img
            src="/images/hero-bg-desktop-6cb381873ba2.webp"
            alt=""
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />
          {/* Mobile Background */}
          <img
            src="/images/hero-bg-mobile-b65c4e4cee99.webp"
            alt=""
            className="md:hidden absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] border border-white/10 rounded-3xl">
          {/* YouTube Iframe or Regular Video */}
          {isYouTubeVideo ? (
            <iframe
              ref={iframeRef}
              className="w-full h-full rounded-3xl"
              src={videoSrc}
              title={videoAlt}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-3xl cursor-pointer"
              onClick={handleVideoClick}
              muted={isMuted}
              loop={loop}
              playsInline
              poster={desktopPosterSrc}
              width={1248}
              height={735}
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          

          {/* Loading State */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-3xl opacity-0 peer-loading:opacity-100 transition-opacity">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={toggleFullscreen}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={toggleFullscreen}
                className="absolute -top-12 right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Fullscreen Video */}
              {isYouTubeVideo ? (
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={videoSrc}
                  title={videoAlt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-full object-contain rounded-2xl"
                  src={videoSrc}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  controls
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GitHubVideoDialog;
