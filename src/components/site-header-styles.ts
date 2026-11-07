export const mobileMenuStyles = String.raw`
.mobilePanel {
  display: block;
  clip-path: inset(0 0 100% 0);
  opacity: 0;
  transform: translateY(-12px);
  visibility: hidden;
  pointer-events: none;
  transition:
    clip-path 420ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 300ms ease,
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0s linear 420ms;
}

.mobilePanel[data-open="true"] {
  clip-path: inset(0 0 0 0);
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  pointer-events: auto;
  transition:
    clip-path 420ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 300ms ease,
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0s;
}

.mobilePanelContent {
  min-height: 0;
  overflow: hidden;
}

@media (min-width: 80rem) {
  .mobilePanel {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mobilePanel,
  .mobilePanel[data-open="true"] {
    transform: none;
    transition: none;
  }
}
`;
