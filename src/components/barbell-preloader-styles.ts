export const barbellPreloaderStyles = String.raw`
html:has(.barbell-preloader),
body:has(.barbell-preloader) {
  overflow: hidden !important;
}

.barbell-preloader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: #080808;
  transition: opacity 320ms ease;
}

.barbell-preloader--exiting {
  opacity: 0;
  pointer-events: none;
}

.barbell-preloader__assembly {
  position: relative;
  width: clamp(170px, 23vw, 280px);
  aspect-ratio: 8 / 3;
  animation: barbell-settle 150ms ease-out 1810ms both;
}

.barbell-preloader--exiting .barbell-preloader__assembly {
  transform: scaleX(0.82);
  opacity: 0;
  filter: blur(4px);
  transition: transform 300ms ease, opacity 300ms ease, filter 300ms ease;
  animation: none;
}

.barbell-preloader__assembly svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.barbell-preloader__bar {
  transform-origin: center;
  animation: barbell-bar-in 300ms ease-out both;
}

.barbell-preloader__plate {
  opacity: 0;
  animation: barbell-plate-in 400ms cubic-bezier(0.4, 0, 0.2, 1) both;
}

.barbell-preloader__plate--left {
  --plate-start: -62px;
}

.barbell-preloader__plate--right {
  --plate-start: 62px;
}

.barbell-preloader__plate--first {
  animation-delay: 350ms;
}

.barbell-preloader__plate--second {
  animation-delay: 850ms;
}

.barbell-preloader__plate--third {
  animation-delay: 1350ms;
}

.barbell-preloader__sweep {
  position: absolute;
  top: calc(50% - 1px);
  right: 7.8%;
  left: 7.8%;
  height: 2px;
  overflow: hidden;
}

.barbell-preloader__sweep::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 24%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #fefc4c, transparent);
  content: "";
  animation: barbell-sweep 450ms ease-in-out 2030ms both;
}

@keyframes barbell-bar-in {
  from { opacity: 0; transform: scaleX(0.75); }
  to { opacity: 1; transform: scaleX(1); }
}

@keyframes barbell-plate-in {
  from { opacity: 0; transform: translateX(var(--plate-start)); }
  18% { opacity: 1; }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes barbell-settle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(2px) scaleY(0.98); }
}

@keyframes barbell-sweep {
  from { transform: translateX(-110%); }
  to { transform: translateX(430%); }
}

@media (prefers-reduced-motion: reduce) {
  .barbell-preloader__assembly,
  .barbell-preloader__bar,
  .barbell-preloader__plate,
  .barbell-preloader__sweep::after {
    animation: none;
  }

  .barbell-preloader__plate {
    opacity: 1;
  }

  .barbell-preloader__sweep {
    display: none;
  }

  .barbell-preloader--exiting .barbell-preloader__assembly {
    filter: none;
    transform: none;
  }
}
`;
