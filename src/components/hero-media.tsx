"use client";

import { useEffect, useRef, useState } from "react";
import { PRELOADER_COMPLETE_EVENT } from "@/data/preloader-events";
import { publicAssetPath } from "@/data/site-path";

export default function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let cancelled = false;
    let attempted = false;
    audio.volume = 0.6;

    function startAudio() {
      if (cancelled || attempted || !audio) return;
      attempted = true;
      audio.muted = false;
      void audio.play().catch(() => {
        if (cancelled) return;
        audio.muted = true;
        setIsMuted(true);
      });
    }

    window.addEventListener(PRELOADER_COMPLETE_EVENT, startAudio);
    if (!document.querySelector(".barbell-preloader")) startAudio();

    return () => {
      cancelled = true;
      window.removeEventListener(PRELOADER_COMPLETE_EVENT, startAudio);
      audio.pause();
    };
  }, []);

  function updateProgress() {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      setProgress(0);
      return;
    }

    setProgress((video.currentTime / video.duration) * 100);
  }

  async function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);

      try {
        await audio.play();
      } catch {
        audio.muted = true;
        setIsMuted(true);
      }
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onLoadedMetadata={updateProgress}
        onDurationChange={updateProgress}
        onTimeUpdate={updateProgress}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src={publicAssetPath("/hero-web.mp4")} type="video/mp4" />
      </video>
      <audio ref={audioRef} src={publicAssetPath("/audio2.mp3")} muted={isMuted} loop preload="metadata" />

      <div className="absolute inset-x-0 bottom-8 z-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div aria-hidden="true" className="h-px w-full bg-white/[0.28]" />
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div
                role="progressbar"
                aria-label="Video progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                className="pointer-events-none h-[3px] w-12 shrink-0 overflow-hidden rounded-full bg-white/20 sm:w-16 md:w-24 lg:w-32"
              >
                <div className="h-full rounded-full bg-white/95" style={{ width: `${progress}%` }} />
              </div>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                aria-pressed={!isMuted}
                className="inline-flex size-10 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                  {isMuted ? (
                    <path d="m16 9 5 6m0-6-5 6" />
                  ) : (
                    <>
                      <path d="M15 9a4 4 0 0 1 0 6" />
                      <path d="M18 6a8 8 0 0 1 0 12" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            <a
              href="#contact"
              aria-label="Contact Golden Gym"
              className="inline-flex size-10 shrink-0 items-center justify-center bg-transparent text-[#fefc4c] transition-opacity duration-[250ms] hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fefc4c]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M21 16.5v3a1.5 1.5 0 0 1-1.65 1.5A18 18 0 0 1 3 4.65 1.5 1.5 0 0 1 4.5 3h3A1.5 1.5 0 0 1 9 4.3l.5 3a1.5 1.5 0 0 1-.43 1.3L7.4 10.8a14 14 0 0 0 5.8 5.8l2.2-2.17a1.5 1.5 0 0 1 1.3-.43l3 .5A1.5 1.5 0 0 1 21 16.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
