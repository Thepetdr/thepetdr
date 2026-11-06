"use client";
import Link from "next/link";
import Image from "next/image";
import GoogleReviews from "@/components/GoogleReviews";
import { useEffect, useRef, useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Veterinary Care",
    href: "/services/veterinary-care",
    description:
      "Calm, thorough veterinary care for cats, dogs, and small pets in Sharjah, from routine visits to complex cases.",
    features: [
      "Consultations",
      "Vaccinations",
      "Sick Pet Visits",
      "Treatment Plans",
    ],
    accent: "pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
        />
      </svg>
    ),
  },
  {
    title: "Medical & Diagnostics",
    href: "/services/medical-and-diagnostics",
    description:
      "State-of-the-art in-house diagnostics — imaging, blood panels, ECG — with results same day.",
    features: [
      "Digital X-ray & Ultrasound",
      "Blood Panels",
      "ECG Monitoring",
      "Endoscopy",
    ],
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Pet Surgery",
    href: "/services/pet-surgery-sharjah",
    description:
      "Safe surgical care with careful preparation, monitoring, pain management, and post-operative support.",
    features: [
      "Spay & Neuter",
      "Soft Tissue Surgery",
      "Mass Removals",
      "Recovery Care",
    ],
    accent: "pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Dental Care",
    href: "/services/pet-dental-cleaning-sharjah",
    description:
      "Dental checks, cleaning, polishing, and treatment to help prevent pain, infection, and tooth loss.",
    features: [
      "Dental Exams",
      "Scaling & Polishing",
      "Extractions",
      "Oral Health Plans",
    ],
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    title: "Vaccinations",
    href: "/services/pet-vaccinations-sharjah",
    description:
      "Vaccination plans for puppies, kittens, adult pets, and travel requirements in the UAE.",
    features: [
      "Cat Vaccines",
      "Dog Vaccines",
      "Rabies Vaccine",
      "Booster Reminders",
    ],
    accent: "pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Preventive Care",
    href: "/services/preventive-pet-care-sharjah",
    description:
      "Routine wellness care to catch problems early and keep your pet healthier through every life stage.",
    features: [
      "Wellness Exams",
      "Parasite Control",
      "Microchipping",
      "Senior Pet Checks",
    ],
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "Emergency Vet",
    href: "/services/emergency-vet-sharjah",
    description:
      "Urgent veterinary support for sudden illness, injury, poisoning, breathing trouble, or worrying symptoms.",
    features: [
      "Urgent Triage",
      "Poisoning Cases",
      "Breathing Issues",
      "Open 7 Days",
    ],
    accent: "pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Cat & Dog Grooming",
    href: "/services/pet-grooming-sharjah",
    description:
      "Professional grooming for cats and dogs, with gentle handling and coat care suited to the UAE climate.",
    features: [
      "Cat Grooming",
      "Dog Grooming",
      "Nail Clipping",
      "Medicated Baths",
    ],
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.3 24.3 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: "Cat Boarding & Pet Stays",
    href: "/services/cat-boarding-pet-stays-sharjah",
    description:
      "A calm, cat-focused boarding space in Sharjah, with comfortable stays for cats and select pets under veterinary supervision.",
    features: [
      "Cat Boarding",
      "Comfortable Suites",
      "Calm Environment",
      "Vet-Supported Care",
    ],
    accent: "pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Pet Shop",
    href: "/services/pet-shop",
    description:
      "A curated pet shop with food, treats, litter, toys, accessories, and care products we would use ourselves.",
    features: ["Cat Supplies", "Dog Supplies", "Nutrition", "Care Products"],
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
        />
      </svg>
    ),
  },
  {
    title: "Holistic Regimens",
    href: "/services/holistic-regimens",
    description:
      "Supportive wellness plans that combine veterinary medicine with nutrition, recovery, and long-term care.",
    features: [
      "Nutrition Support",
      "Wellness Planning",
      "Recovery Support",
      "Chronic Care",
    ],
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];
// Bento layout for the homepage services section. Only real clinic photography is used.
const serviceLayout: {
  title: string;
  tag: string;
  span: string;
  image?: string;
  alt?: string;
  position?: string;
  big?: boolean;
  tone?: "pink" | "teal" | "deep";
}[] = [
  { title: "Veterinary Care", tag: "Consultations", span: "col-span-2 h-64 sm:h-72 lg:h-auto lg:row-span-2", image: "/images/petdr-treatment-room-story.webp", alt: "Treatment room at The Pet Doctor Center", position: "object-[center_65%]", big: true },
  { title: "Cat Boarding & Pet Stays", tag: "Cat-first", span: "col-span-1 h-64 sm:h-72 lg:h-auto lg:row-span-2", image: "/images/Cat_Boarding.png", alt: "Cat relaxing in the boarding area at The Pet Doctor Center" },
  { title: "Medical & Diagnostics", tag: "In-house", span: "col-span-1 h-64 sm:h-72 lg:h-auto", image: "/images/petdr-treatment-room-wide.webp", alt: "Examination room at The Pet Doctor Center" },
  { title: "Emergency Vet", tag: "24/7 support", span: "col-span-2 lg:col-span-1", tone: "deep" },
  { title: "Pet Surgery", tag: "Surgery", span: "", tone: "teal" },
  { title: "Dental Care", tag: "Dental", span: "", tone: "pink" },
  { title: "Vaccinations", tag: "Protection", span: "", tone: "teal" },
  { title: "Preventive Care", tag: "Wellness", span: "", tone: "pink" },
  { title: "Cat & Dog Grooming", tag: "Grooming salon", span: "", tone: "teal" },
  { title: "Pet Shop", tag: "Shop", span: "", tone: "pink" },
  { title: "Holistic Regimens", tag: "Holistic", span: "", tone: "teal" },
];

const stats = [
  { number: "Al Zahia", label: "Sharjah veterinary care", accent: "pink" },
  { number: "Dedicated Cattery", label: "Designed for cats", accent: "teal" },
  { number: "7 Days", label: "Of compassionate care", accent: "pink" },
  { number: "Modern Medicine", label: "Advanced care", accent: "teal" },
];

const reasons = [
  {
    title: "Feline-Friendly, Multi-Pet Care",
    desc: "A calm approach for cats, dogs, and small pets, with extra care for nervous patients.",
    accent: "pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Fear-Free, Low-Stress Handling",
    desc: "Gentle techniques designed to keep pets calm and comfortable.",
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Comprehensive Care for All Pets",
    desc: "From cats and dogs to birds and exotic animals—everything under one roof.",
    accent: "pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "Experienced Veterinary Team",
    desc: "Highly trained vets delivering expert care across all species.",
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Treatment Plans",
    desc: "Tailored care based on your pet’s unique needs and lifestyle.",
    accent: "pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    title: "Modern, Purpose-Built Facility",
    desc: "Designed for safety, efficiency, and a better patient experience.",
    accent: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Do you treat cats and dogs at The Pet Doctor?",
    answer:
      "Yes. The Pet Doctor provides veterinary care for cats, dogs, and small pets in Sharjah, with a strong focus on calm, feline-friendly care.",
  },
  {
    question: "Do you offer cat boarding in Sharjah?",
    answer:
      "Yes. We offer cat-focused boarding in Sharjah, with comfortable spaces and veterinary support nearby.",
  },
  {
    question: "Do you groom both cats and dogs?",
    answer:
      "Yes. Our grooming salon provides grooming for cats and dogs, including bathing, trimming, nail clipping, ear cleaning, and coat care.",
  },
  {
    question: "Do you have a pet shop?",
    answer:
      "Yes. The Pet Doctor has a curated retail shop with pet food, supplies, accessories, and care products.",
  },
  {
    question: "When should I visit an emergency vet?",
    answer:
      "If your pet has difficulty breathing, collapses, has seizures, repeated vomiting, suspected poisoning, severe pain, or sudden weakness, seek veterinary care immediately.",
  },
];

// ─── ACCENT STYLES ────────────────────────────────────────────────────────────

const accentStyles = {
  pink: {
    iconBg: "from-[#f3c4d0] to-[#fdf0f3]",
    iconColor: "text-[#E07A9A]",
    dot: "bg-[#E07A9A]",
    statColor: "text-[#E07A9A]",
    cardBorder:
      "border-[#EFBCB0]/40 hover:border-[#EFBCB0]/70 hover:bg-[#fff8fa]",
    learnMore: "text-[#E07A9A]",
  },
  teal: {
    iconBg: "from-[#b2deda] to-[#e8f8f7]",
    iconColor: "text-[#7ECDC2]",
    dot: "bg-[#7ECDC2]",
    statColor: "text-[#7ECDC2]",
    cardBorder: "border-[#c8ecea] hover:border-[#a8deda] hover:bg-[#f4fbfa]",
    learnMore: "text-[#7ECDC2]",
  },
};

// ─── INTERSECTION OBSERVER HOOK ───────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const servicesSection = useInView();
  const whySection = useInView();
  const statsSection = useInView();
  const aboutSection = useInView();
  const faqSection = useInView();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative md:min-h-[620px] flex items-center overflow-hidden bg-white"
      >
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #f3c4d0 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #b2deda 0%, transparent 70%)",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 pt-24 pb-12 md:pb-14 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-white border border-[#EFBCB0]/70 text-[#E07A9A] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A9A] animate-pulse" />
              Vet Clinic in Sharjah
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E07A9A] leading-[1.08] mb-6 tracking-tight max-w-3xl">
              Veterinary Care, Cat Boarding & Grooming in{" "}
              <span className="text-[#7BB5AD]">Sharjah</span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #7BB5AD 0%, #7BB5AD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              ></span>
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg font-light">
              The Pet Doctor is a feline-focused veterinary clinic and pet care
              destination in Sharjah, offering calm medical care, cat boarding,
              grooming, and a curated pet shop for cats, dogs, and small pets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#E07A9A] to-[#E07A9A] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:shadow-[#E07A9A]/20 hover:-translate-y-1 transition-all duration-300 text-sm"
              >
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-[#7ECDC2] hover:text-[#7ECDC2] hover:-translate-y-1 transition-all duration-300 shadow-sm text-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="block animate-fade-in">
            <div className="relative">
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-[#E07A9A]/10">
                <Image
                  src="/images/cat-hero-sharjah.png"
                  alt="Cat receiving calm veterinary care in Sharjah"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating badge top left */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 shadow-lg border border-white/60">
                <p className="text-xs text-gray-500 font-medium">Our approach</p>
                <p
                  className="text-xl font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #E07A9A 0%, #E07A9A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Cat-first care
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden">
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Scroll
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E07A9A"
            strokeWidth={2}
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <div ref={statsSection.ref} className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const a = accentStyles[stat.accent as keyof typeof accentStyles];
            return (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  statsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p
                  className={`text-lg md:text-xl font-bold leading-tight mb-1 ${a.statColor}`}
                >
                  {stat.number}
                </p>
                <p className="text-sm text-gray-500 font-normal">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
   {/* ── ABOUT ────────────────────────────────────────────────────────── */}
<section id="about" className="overflow-x-clip bg-white py-14 md:py-16">
  <div
    ref={aboutSection.ref}
    className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 lg:gap-14"
  >
    {/* Images */}
    <div
      className={`relative mx-auto w-full max-w-xl transition-all duration-700 ${
        aboutSection.inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10"
      }`}
    >
      <div className="relative h-[330px] md:h-[360px]">
        <div className="absolute left-0 top-8 h-[245px] w-[48%] overflow-hidden rounded-2xl shadow-lg md:h-[270px]">
          <Image
            src="/images/petdr-treatment-room-story.webp"
            alt="Treatment room at The Pet Doctor in Sharjah"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute right-0 top-32 h-[235px] w-[48%] overflow-hidden rounded-2xl shadow-lg md:h-[260px]">
          <Image
            src="/images/petdr-reception-story.webp"
            alt="Reception area at The Pet Doctor in Sharjah"
            fill
            className="object-cover"
          />
        </div>

        <div className="glass absolute bottom-3 left-1/2 -translate-x-1/2 rounded-2xl border border-white/60 px-5 py-3 text-center shadow-xl">
          <p
            className="text-2xl font-bold"
            style={{
              background: "linear-gradient(135deg, #E07A9A 0%, #E07A9A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            3+
          </p>
          <p className="text-xs font-medium text-gray-500">
            Years of Excellence
          </p>
        </div>
      </div>
    </div>

    {/* Text */}
    <div
      className={`transition-all duration-700 delay-200 ${
        aboutSection.inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10"
      }`}
    >
      <span className="mb-5 inline-block rounded-full border border-[#EFBCB0]/70 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#E07A9A] shadow-sm">
        Our Story
      </span>

      <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-[#7BB5AD] md:text-4xl">
        Built from love.{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #E07A9A 0%, #E07A9A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Designed for better care.
        </span>
      </h2>

      <p className="mb-5 font-light leading-relaxed text-gray-500">
        The Pet Dr was created by pet owners who knew veterinary care could feel
        calmer, warmer, and more complete.
      </p>

      <p className="mb-8 font-light leading-relaxed text-gray-500">
        What started as a love for animals grew into a purpose-built pet care hub
        in Sharjah, bringing together veterinary care, grooming, boarding,
        wellness, and rescue support under one roof.
      </p>

      <div className="flex flex-col gap-3">
        {[
          "Created by pet owners",
          "Advanced veterinary medicine in a warmer setting",
          "Built for calm, compassionate care",
          "Supporting rescue, rehabilitation, and second chances",
        ].map((point) => (
          <div key={point} className="flex items-center gap-3">
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f3c4d0] to-[#fdf0f3]">
              <svg viewBox="0 0 20 20" fill="#E07A9A" className="h-3 w-3">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-600">{point}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="py-14 md:py-16 bg-[#fdf8f9]">
        <div ref={servicesSection.ref} className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-8 transition-all duration-700 ${
              servicesSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-white border border-[#EFBCB0]/70 text-[#E07A9A] text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest shadow-sm">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E07A9A] mb-3 tracking-tight">
              Comprehensive Care{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7BB5AD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Under One Roof
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
              Leading Veterinary Clinic in Sharjah Offering Preventive Care,
              Advanced Diagnostics, Surgery, Dental Care &amp; 24/7 Emergency
              Services
            </p>
          </div>

          {/* Bento layout: real clinic photography for the flagship services,
              on-brand illustrated tiles for the rest (no stock photos). */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[188px] lg:grid-cols-4">
            {serviceLayout.map((slot, i) => {
              const service = services.find((s) => s.title === slot.title);
              if (!service) return null;
              const reveal = servicesSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4";
              if (slot.image) {
                return (
                  <Link
                    href={service.href}
                    key={service.title}
                    className={`group relative isolate overflow-hidden rounded-3xl bg-[#FDEFF4] shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F38BB0]/20 ${slot.span} ${reveal}`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <Image
                      src={slot.image}
                      alt={slot.alt ?? service.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className={`-z-10 object-cover transition-transform duration-700 group-hover:scale-105 ${slot.position ?? ""}`}
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950/85 via-gray-950/35 to-gray-950/5" />
                    <div className="flex h-full flex-col justify-end p-3 sm:p-4">
                      <div className="rounded-2xl bg-gray-950/45 p-3.5 ring-1 ring-white/10 backdrop-blur-md sm:p-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
                      <span className="mb-2 inline-flex w-fit items-center rounded-full bg-white px-2.5 [text-shadow:none] py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#B8466F]">
                        {slot.tag}
                      </span>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
                      <p className={`mt-1 max-w-md text-sm leading-relaxed text-white ${slot.big ? "hidden sm:[display:-webkit-box] line-clamp-2" : "hidden"}`}>
                        {service.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                        Explore <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                      </div>
                    </div>
                  </Link>
                );
              }
              const pink = slot.tone === "pink";
              const deep = slot.tone === "deep";
              return (
                <Link
                  href={service.href}
                  key={service.title}
                  className={`group relative isolate flex min-h-[150px] flex-col justify-between overflow-hidden rounded-3xl p-5 ring-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                    deep
                      ? "bg-gradient-to-br from-[#D9608C] to-[#B8466F] text-white ring-[#D9608C]"
                      : pink
                        ? "bg-gradient-to-br from-[#FFF4F8] to-[#FDE3EC] text-gray-900 ring-[#F7DCE6] hover:shadow-[#F38BB0]/15"
                        : "bg-gradient-to-br from-[#F3FBF9] to-[#DDF1EE] text-gray-900 ring-[#CDE8E4] hover:shadow-[#92CAC2]/20"
                  } ${slot.span} ${reveal}`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {/* Oversized icon as a soft illustration */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-6 -right-6 -z-10 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110 [&>svg]:h-32 [&>svg]:w-32 ${
                      deep ? "text-white/25" : pink ? "text-[#F38BB0]/25" : "text-[#92CAC2]/40"
                    }`}
                  >
                    {service.icon}
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-sm ${
                      deep ? "bg-white/20 text-white" : pink ? "bg-white text-[#E46C98]" : "bg-white text-[#2F7F76]"
                    }`}
                  >
                    {service.icon}
                  </span>
                  <span>
                    <span className="block text-base font-semibold leading-snug">{service.title}</span>
                    <span className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${deep ? "text-white/90" : "text-gray-500 group-hover:text-[#B8466F]"}`}>
                      {slot.tag} <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </span>
                </Link>
              );
            })}
            <a
              href="tel:+97165573080"
              className={`group relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-3xl bg-gray-900 p-5 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F38BB0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#92CAC2]" />
              </span>
              <span>
                <span className="block text-base font-semibold leading-snug">Not sure what your pet needs?</span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#F7B6CD]">
                  Call reception <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section id="why-us" className="py-14 md:py-16 bg-white">
        <div ref={whySection.ref} className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-8 transition-all duration-700 ${
              whySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-[#e8f8f7] border border-[#c8ecea] text-[#7ECDC2] text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest shadow-sm">
              Why The Pet Doctor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E07A9A] mb-3 tracking-tight">
              Why Choose{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #7BB5AD 0%, #7BB5AD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                The Pet Doctor
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
              Trusted by Pet Parents Across Sharjah for Exceptional Veterinary
              Care
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r, i) => {
              const a = accentStyles[r.accent as keyof typeof accentStyles];
              return (
                <div
                  key={r.title}
                  className={`group flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white ${a.cardBorder} hover:shadow-lg transition-all duration-300 cursor-default ${
                    whySection.inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${a.iconBg} flex items-center justify-center ${a.iconColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                      {r.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      {r.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <GoogleReviews />


      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-16 bg-white">
        <div ref={faqSection.ref} className="max-w-3xl mx-auto px-6">
          <div
            className={`text-center mb-8 transition-all duration-700 ${
              faqSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-[#e8f8f7] border border-[#c8ecea] text-[#7ECDC2] text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest shadow-sm">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E07A9A] mb-3 tracking-tight">
              Common{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #78B5AD 0%, #78B5AD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Questions
              </span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Everything you need to know before your first visit.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                  faqSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900 text-sm pr-4 group-hover:text-[#E07A9A] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === i ? "rotate-45" : "bg-gray-100"
                    }`}
                    style={
                      openFaq === i
                        ? {
                            background:
                              "linear-gradient(135deg, #E07A9A, #E07A9A)",
                          }
                        : {}
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={openFaq === i ? "white" : "#6b7280"}
                      strokeWidth={2.5}
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-48 pb-5" : "max-h-0"}`}
                >
                  <p className="px-6 text-sm text-gray-500 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}