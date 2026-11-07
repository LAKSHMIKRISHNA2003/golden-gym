import { publicAssetPath } from "@/data/site-path";

// Update this list when gallery photography changes; the grid and lightbox share it.
// Width and height match the source files so tiles keep their natural proportions.
export const galleryImages = [
  {
    src: publicAssetPath("/gallery/1.jpg"),
    width: 2304,
    height: 4096,
    alt: "Plate-loaded strength machine on the gym floor",
    category: "STRENGTH",
  },
  {
    src: publicAssetPath("/gallery/2.jpg"),
    width: 4096,
    height: 2304,
    alt: "Resistance training equipment inside Golden Gym",
    category: "EQUIPMENT",
  },
  {
    src: publicAssetPath("/gallery/4.jpg"),
    width: 4096,
    height: 2304,
    alt: "Wide view of the Golden Gym training floor",
    category: "THE GYM",
  },
  {
    src: publicAssetPath("/gallery/3.jpg"),
    width: 2304,
    height: 4096,
    alt: "Strength training station inside Golden Gym",
    category: "TRAINING FLOOR",
  },
  {
    src: publicAssetPath("/gallery/6.jpg"),
    width: 2304,
    height: 4096,
    alt: "Red and black resistance machine at Golden Gym",
    category: "EQUIPMENT",
  },
  {
    src: publicAssetPath("/gallery/5.jpg"),
    width: 4096,
    height: 2304,
    alt: "Weight training machines and benches at Golden Gym",
    category: "STRENGTH",
  },
  {
    src: publicAssetPath("/gallery/7.jpg"),
    width: 4096,
    height: 2304,
    alt: "Row of training machines on the gym floor",
    category: "TRAINING FLOOR",
  },
] as const;
