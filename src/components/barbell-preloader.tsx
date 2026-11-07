"use client";

import { useEffect, useState } from "react";
import { PRELOADER_COMPLETE_EVENT } from "@/data/preloader-events";
import { barbellPreloaderStyles } from "./barbell-preloader-styles";

const ASSEMBLY_DURATION = 2600;
const EXIT_DURATION = 320;
const ASSET_TIMEOUT = 3500;

type Phase = "loading" | "exiting" | "hidden";

export default function BarbellPreloader() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    if (phase === "hidden") {
      window.dispatchEvent(new Event(PRELOADER_COMPLETE_EVENT));
    }
  }, [phase]);

  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>("#home video");
    const logo = document.querySelector<HTMLImageElement>("#home header img");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let videoReady = !video || video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;
    let logoReady = !logo || logo.complete;
    let animationFinished = false;
    let exiting = false;
    let exitTimer: number | undefined;

    function finishIfReady() {
      if (exiting || !animationFinished || !videoReady || !logoReady) return;
      exiting = true;
      setPhase("exiting");
      exitTimer = window.setTimeout(() => setPhase("hidden"), EXIT_DURATION);
    }

    function onVideoReady() {
      videoReady = true;
      finishIfReady();
    }

    function onLogoReady() {
      logoReady = true;
      finishIfReady();
    }

    video?.addEventListener("loadeddata", onVideoReady);
    video?.addEventListener("error", onVideoReady);
    logo?.addEventListener("load", onLogoReady);
    logo?.addEventListener("error", onLogoReady);

    const animationTimer = window.setTimeout(() => {
      animationFinished = true;
      finishIfReady();
    }, reducedMotion ? 250 : ASSEMBLY_DURATION);

    const assetTimer = window.setTimeout(() => {
      videoReady = true;
      logoReady = true;
      finishIfReady();
    }, ASSET_TIMEOUT);

    return () => {
      video?.removeEventListener("loadeddata", onVideoReady);
      video?.removeEventListener("error", onVideoReady);
      logo?.removeEventListener("load", onLogoReady);
      logo?.removeEventListener("error", onLogoReady);
      window.clearTimeout(animationTimer);
      window.clearTimeout(assetTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <>
      <style>{barbellPreloaderStyles}</style>
      <div
        className={`barbell-preloader${phase === "exiting" ? " barbell-preloader--exiting" : ""}`}
        role="status"
        aria-label="Loading page"
      >
        <div className="barbell-preloader__assembly" aria-hidden="true">
          <svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="barbell-preloader__bar">
              <rect x="27" y="58" width="266" height="4" rx="2" fill="#A5A5A5" />
              <rect x="25" y="55" width="4" height="10" rx="1" fill="#777777" />
              <rect x="291" y="55" width="4" height="10" rx="1" fill="#777777" />
              <rect x="102" y="53" width="6" height="14" rx="1" fill="#777777" />
              <rect x="212" y="53" width="6" height="14" rx="1" fill="#777777" />
            </g>

            <g className="barbell-preloader__plate barbell-preloader__plate--left barbell-preloader__plate--first">
              <rect x="83" y="20" width="18" height="80" rx="2" fill="#FEFC4C" stroke="rgba(255,255,255,0.22)" />
            </g>
            <g className="barbell-preloader__plate barbell-preloader__plate--right barbell-preloader__plate--first">
              <rect x="219" y="20" width="18" height="80" rx="2" fill="#FEFC4C" stroke="rgba(255,255,255,0.22)" />
            </g>

            <g className="barbell-preloader__plate barbell-preloader__plate--left barbell-preloader__plate--second">
              <rect x="65" y="29" width="15" height="62" rx="2" fill="#FEFC4C" stroke="rgba(255,255,255,0.22)" />
            </g>
            <g className="barbell-preloader__plate barbell-preloader__plate--right barbell-preloader__plate--second">
              <rect x="240" y="29" width="15" height="62" rx="2" fill="#FEFC4C" stroke="rgba(255,255,255,0.22)" />
            </g>

            <g className="barbell-preloader__plate barbell-preloader__plate--left barbell-preloader__plate--third">
              <rect x="51" y="39" width="11" height="42" rx="2" fill="#FEFC4C" stroke="rgba(255,255,255,0.22)" />
            </g>
            <g className="barbell-preloader__plate barbell-preloader__plate--right barbell-preloader__plate--third">
              <rect x="258" y="39" width="11" height="42" rx="2" fill="#FEFC4C" stroke="rgba(255,255,255,0.22)" />
            </g>
          </svg>
          <div className="barbell-preloader__sweep" />
        </div>
      </div>
    </>
  );
}
