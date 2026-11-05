import { MetadataRoute } from "next";

// List only published, verified Next.js routes. Avoid fabricated modification dates.
const BASE_URL = "https://thepetdr.ae";
const paths = [
  "/", "/about", "/contact", "/services",
  "/services/veterinary-care",
  "/services/medical-and-diagnostics",
  "/services/pet-surgery-sharjah",
  "/services/pet-dental-cleaning-sharjah",
  "/services/pet-vaccinations-sharjah",
  "/services/preventive-pet-care-sharjah",
  "/services/emergency-vet-sharjah",
  "/services/pet-grooming-sharjah",
  "/services/cat-boarding-pet-stays-sharjah",
  "/services/pet-boarding-daycare-sharjah",
  "/services/pet-shop",
  "/services/dog-park",
  "/services/holistic-regimens",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${BASE_URL}${path === "/" ? "" : path}` }));
}
