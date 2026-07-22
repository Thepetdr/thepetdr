"use client";
import Link from "next/link";
import Image from "next/image";
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
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&auto=format&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=80",
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
const stats = [
  { number: "Sharjah’s First", label: "All-in-one pet hub", accent: "pink" },
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

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=80",
    alt: "Dog playing in park",
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=80",
    alt: "Dogs running together",
  },
  {
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=80",
    alt: "Vet examining cat",
  },
  {
    src: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=800&auto=format&fit=crop&q=80",
    alt: "Dog being groomed",
  },
];

const testimonials = [
  {
    name: "Sara",
    role: "Dog Owner",
    review:
      "ThePetDr has been absolutely incredible for our golden retriever Max. The veterinary team is so gentle and thorough - we have never felt more confident about his health.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "James Thornton",
    role: "Cat Owner",
    review:
      "The grooming salon is world-class. My Persian cat Luna comes back looking like she is fresh off a runway every single time. The staff genuinely care about every animal.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Multi-pet Owner",
    review:
      "We bring all three of our pets here - two dogs and a rabbit. Every single one is treated with the same kindness and expertise. The holistic regimens have been a game changer.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    rating: 5,
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
  const gallerySection = useInView();
  const testimonialsSection = useInView();
  const faqSection = useInView();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-white"
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

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-10 items-center">
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
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg font-light">
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
          <div className="hidden md:block animate-fade-in">
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-[#E07A9A]/10">
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
                <p className="text-xs text-gray-500 font-medium">Happy Pets</p>
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
                  1,000+
                </p>
              </div>

              {/* Floating review badge bottom right */}
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-5 py-3 shadow-lg border border-white/60 flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">Sara</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        fill="#E07A9A"
                        className="w-3 h-3"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
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
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
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
<section id="about" className="bg-white py-20 md:py-24">
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
      <div className="relative h-[390px] md:h-[420px]">
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

      <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#7BB5AD] md:text-5xl">
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
      <section id="services" className="py-28 bg-[#fdf8f9]">
        <div ref={servicesSection.ref} className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              servicesSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-white border border-[#EFBCB0]/70 text-[#E07A9A] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E07A9A] mb-4 tracking-tight">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const a =
                accentStyles[service.accent as keyof typeof accentStyles];
              return (
                <Link
                  href={service.href}
                  key={service.title}
                  className={`group glass-card rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${a.cardBorder} ${
                    servicesSection.inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Card image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div
                      className={`absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center ${a.iconColor} shadow-md`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 font-light">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`flex items-center gap-1 text-xs font-semibold ${a.learnMore} group-hover:gap-2 transition-all duration-300`}
                    >
                      Learn More
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div ref={gallerySection.ref} className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              gallerySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-[#e8f8f7] border border-[#c8ecea] text-[#7ECDC2] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
              Our Clinic
            </span>
            <h2 className="text-4xl font-bold text-[#78B5AD] tracking-tight">
              A Place Pets{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #E07A9A 0%, #E07A9A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Love to Visit
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
            {gallery.map((img, i) => (
              <div
                key={img.alt}
                className={`relative rounded-2xl overflow-hidden shadow-md group transition-all duration-700 ${
                  gallerySection.inView
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  height: i % 2 === 0 ? "280px" : "220px",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section id="why-us" className="py-28 bg-[#fdf8f9]">
        <div ref={whySection.ref} className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              whySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-[#e8f8f7] border border-[#c8ecea] text-[#7ECDC2] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              Why The Pet Doctor
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E07A9A] mb-4 tracking-tight">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => {
              const a = accentStyles[r.accent as keyof typeof accentStyles];
              return (
                <div
                  key={r.title}
                  className={`group flex gap-4 p-6 rounded-2xl border border-transparent bg-white ${a.cardBorder} hover:shadow-lg transition-all duration-300 cursor-default ${
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

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div ref={testimonialsSection.ref} className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              testimonialsSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-white border border-[#EFBCB0]/70 text-[#E07A9A] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#78B5AD]">
              What Pet Owners{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #E07A9A 0%, #E07A9A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Are Saying
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
              Thousands of pet owners trust ThePetDr with their most beloved
              family members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`glass-card rounded-2xl p-8 border border-[#EFBCB0]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  testimonialsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg
                      key={j}
                      viewBox="0 0 20 20"
                      fill="#E07A9A"
                      className="w-4 h-4"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light italic">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-pink-100">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#fdf8f9]">
        <div ref={faqSection.ref} className="max-w-3xl mx-auto px-6">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              faqSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-[#e8f8f7] border border-[#c8ecea] text-[#7ECDC2] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E07A9A] mb-4 tracking-tight">
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

          <div className="space-y-4">
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
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

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #E07A9A 0%, #E07A9A 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, white, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, white, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to Give Your Pet <br /> the Best Care Possible?
          </h2>
          <p className="text-lg text-white/75 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Book an appointment and let our dedicated team provide the
            compassionate, professional care your pet truly deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="tel:+971665573080"
              className="bg-white text-[#E07A9A] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-sm"
            >
              Call Us Now
            </Link>
            <Link
              href="mailto:info@ThePetDr.ae"
              className="bg-transparent border-2 border-white/60 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 text-sm"
            >
              Send an Email
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}