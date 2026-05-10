import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Pet Grooming in Sharjah | The Pet Dr",
  description:
    "Premium pet grooming in Sharjah — full grooming, breed-specific styling, creative grooming, cat grooming, medicated baths, and deshedding for dogs and cats.",
  keywords: [
    "Pet grooming Sharjah",
    "Dog grooming Sharjah",
    "Cat grooming Sharjah",
    "Poodle grooming Sharjah",
    "Teddy bear cut UAE",
    "Asian fusion dog grooming",
    "Creative dog grooming UAE",
    "Pet hair dye Sharjah",
    "Persian cat grooming UAE",
    "Deshedding dog UAE",
    "Medicated pet bath Sharjah",
    "Dog grooming salon Sharjah",
  ],
  alternates: {
    canonical: "https://thepetdr.com/pet-grooming-sharjah",
  },
  openGraph: {
    title: "Professional Pet Grooming in Sharjah | The Pet Dr",
    description:
      "Premium pet grooming in Sharjah — breed-specific styling, creative grooming, cat grooming, medicated baths, and low-stress handling.",
    url: "https://thepetdr.com/pet-grooming-sharjah",
    siteName: "The Pet Dr",
    locale: "en_AE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Pet Dr Grooming",
  description:
    "Professional pet grooming salon in Sharjah offering full grooming, breed-specific styling, creative grooming, cat grooming, and medicated baths.",
  url: "https://thepetdr.com/pet-grooming-sharjah",
  areaServed: { "@type": "City", name: "Sharjah" },
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should my dog be groomed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most dogs benefit from professional grooming every 4 to 8 weeks depending on coat type, breed, and lifestyle. Long-coated and double-coated breeds may need more frequent attention to prevent matting and manage shedding.",
        },
      },
      {
        "@type": "Question",
        name: "Is creative coloring safe for pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, when pet-safe products specifically formulated for animal coats are used. We only use grooming-safe, non-toxic color products designed for pets. Human hair dyes are never used.",
        },
      },
    ],
  },
};

/* ── Data ───────────────────────────────────────────────────── */

const standardServices = [
  { title: "Full Grooming", desc: "Complete bath, blow dry, trim, nail care, ear cleaning, and finishing — tailored to breed and coat type." },
  { title: "Bath & Blow Dry", desc: "Deep cleansing shampoo, conditioning rinse, and professional blow dry suited to your pet's coat." },
  { title: "Nail Trimming", desc: "Safe, precise nail trimming to a comfortable length with optional filing for smooth edges." },
  { title: "Ear Cleaning", desc: "Gentle removal of wax and debris from the ear canal to support hygiene and prevent infection." },
  { title: "Deshedding", desc: "Specialized deshedding treatment to significantly reduce loose undercoat and seasonal shedding at home." },
  { title: "Sanitary Trimming", desc: "Careful trimming of hygiene-sensitive areas including paws, groin, belly, and hindquarters." },
  { title: "Paw Pad Trimming", desc: "Trimming of hair between paw pads for better grip, hygiene, and comfort on smooth surfaces." },
  { title: "Medicated Baths", desc: "Therapeutic bathing using veterinarian-recommended medicated shampoos for skin conditions, allergies, and infections." },
];

const breedStyling = [
  { breed: "Poodle", style: "Teddy bear cuts, puppy cuts, continental, and custom poodle styling." },
  { breed: "Schnauzer", style: "Traditional Schnauzer cuts with beard, eyebrow, and leg fringing detail." },
  { breed: "Pomeranian", style: "Lion cuts, round bear styling, and volume-enhancing finishing techniques." },
  { breed: "Bichon Frise", style: "Round head, full body trimming, and precision scissoring for breed standard appearance." },
  { breed: "Shih Tzu", style: "Puppy cuts, top knots, and full coat maintenance for this double-coated breed." },
  { breed: "Asian Fusion", style: "Japanese and Korean-inspired grooming styles featuring structured volume, rounded shapes, and creative detailing." },
];

const creativeServices = [
  { title: "Creative Coat Styling", desc: "Bold sculptural shapes and imaginative patterns crafted with precision scissor work on the coat." },
  { title: "Pet-Safe Temporary Color", desc: "Non-toxic, grooming-safe color products applied to ears, tail tips, or full coat sections." },
  { title: "Tail & Ear Coloring", desc: "Accent coloring on specific areas for a striking, social-media-ready finish." },
  { title: "Wild Side Looks", desc: "Full creative transformations — from fantasy creatures to bold editorial styles." },
  { title: "Event Grooming", desc: "Custom grooming for photoshoots, breed shows, pet events, and special occasions." },
  { title: "Luxury Finishing", desc: "Bandana, spritz, paw balm, coat gloss, and presentation finishing touches after every session." },
];

const catServices = [
  { title: "Lion Cuts", desc: "The classic cat shave leaving a mane, tail pom, and leg cuffs — popular for long-haired breeds in warm climates." },
  { title: "De-matting", desc: "Careful removal of tangles and matted sections with minimal discomfort using specialist tools and technique." },
  { title: "Deshedding", desc: "Targeted treatment for heavy-shedding breeds like Maine Coons, Persians, and Ragdolls." },
  { title: "Hygiene Trims", desc: "Trimming of sanitary areas, paw pads, and facial fur to maintain cleanliness and comfort." },
  { title: "Sensitive Handling", desc: "Patient, cat-specific handling techniques to reduce stress and create a calm experience for nervous or reactive cats." },
];

const skinCoatItems = [
  "Medicated baths for skin conditions and infections",
  "Sensitive skin and allergy-friendly shampoos",
  "Flea and tick support bathing",
  "Deep coat conditioning treatments",
  "Dry and flaky skin management",
  "Post-treatment coat protection and moisturizing",
];

const lowStressItems = [
  "Calm, quiet grooming environment",
  "Gentle, patient handling techniques",
  "Anxiety-aware approach for nervous pets",
  "One-pet-at-a-time focused sessions",
  "Senior and mobility-impaired pet accommodations",
  "No forced restraint or harsh handling",
];

const packages = [
  {
    name: "Monthly Maintenance Plan",
    desc: "Regular grooming on a monthly schedule — consistent coat health, reduced matting, and priority booking.",
    includes: ["Full grooming or bath & trim", "Nail care", "Ear cleaning", "Priority appointment slots"],
  },
  {
    name: "Puppy Introduction Package",
    desc: "A gentle first grooming experience designed to familiarize puppies with handling, water, and the salon environment.",
    includes: ["First bath and blow dry", "Nail trim", "Ear check", "Complimentary bandana"],
  },
  {
    name: "Luxury Spa Package",
    desc: "The complete premium grooming experience with premium products, deep conditioning, and luxury finishing.",
    includes: ["Full groom with premium shampoo", "Deep conditioning treatment", "Paw balm", "Coat gloss and spritz"],
  },
  {
    name: "Deshedding Package",
    desc: "Intensive deshedding treatment for heavy-shedding breeds — dramatically reduces loose coat and hair at home.",
    includes: ["Deshedding shampoo and conditioner", "High-velocity blow out", "Undercoat removal brush", "Coat finishing spray"],
  },
];

const faqs = [
  {
    q: "How often should my dog be groomed?",
    a: "Most dogs benefit from professional grooming every 4 to 8 weeks depending on coat type, breed, and lifestyle. Long-coated breeds such as Poodles, Shih Tzus, and Maltese typically need more frequent grooming to prevent matting. Double-coated breeds benefit from regular deshedding sessions, particularly during shedding seasons.",
  },
  {
    q: "Do cats need professional grooming?",
    a: "Yes. While cats are self-grooming, long-haired breeds such as Persians, Maine Coons, and Ragdolls are prone to matting, hairballs, and coat hygiene issues that benefit significantly from professional grooming. Even short-haired cats benefit from periodic deshedding and hygiene trims.",
  },
  {
    q: "Is creative coloring safe for pets?",
    a: "Yes, when pet-safe products specifically formulated for animal coats are used. We exclusively use grooming-safe, non-toxic color products designed for pets. Human hair dyes, bleach, and chemical developers are never used on animals. Results are temporary and fade naturally over time.",
  },
  {
    q: "What is a teddy bear cut?",
    a: "A teddy bear cut is a popular grooming style — most often seen on Poodles, Doodles, Bichons, and Shih Tzus — where the coat is trimmed to a soft, rounded, plush finish that resembles a stuffed toy. It is a lower-maintenance alternative to breed-standard cuts and suits an active lifestyle.",
  },
  {
    q: "Can anxious or nervous pets be groomed?",
    a: "Yes. Our grooming team is experienced with anxious, reactive, and sensitive pets. Sessions are paced carefully, handled gently, and never rushed. For very anxious pets, we recommend beginning with shorter introductory sessions and gradually building comfort over multiple visits.",
  },
  {
    q: "What are medicated baths?",
    a: "Medicated baths use therapeutic shampoos prescribed or recommended by a veterinarian to treat specific skin conditions including bacterial infections, fungal infections, allergies, seborrhea, and skin parasites. They may be recommended as part of an ongoing dermatology treatment plan.",
  },
];

/* ── UI ─────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
      {children}
    </span>
  );
}

function SeoTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium">
      {label}
    </span>
  );
}

function Dot() {
  return (
    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[6px]" aria-hidden="true" />
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function PetGroomingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-20 bg-white">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fffbf0] py-20 md:py-28" aria-labelledby="hero-heading">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #fcd34d 0%, transparent 65%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-10">
              <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-amber-600 transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Pet Grooming</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionLabel>Professional Pet Grooming · Sharjah</SectionLabel>

                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-5"
                >
                  Professional Pet Grooming{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    in Sharjah
                  </span>
                </h1>

                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-xl">
                  Premium grooming services designed for hygiene, coat health, comfort, and style — from routine
                  grooming to creative breed styling and specialty looks.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-700 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Grooming
                    <ChevronRight />
                  </Link>
                  <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                  >
                    WhatsApp Grooming Team
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-amber-100">
                  {[
                    { value: "Breed", label: "Specific Styling" },
                    { value: "Creative", label: "& Color" },
                    { value: "Cat", label: "Grooming Too" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-xl md:text-2xl font-bold text-amber-600">{s.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="relative">
                <div className="bg-white rounded-3xl border border-amber-100 shadow-xl shadow-amber-50 overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/luxury-groomed-dog-salon/900/600"
                    alt="Beautifully groomed Poodle with a teddy bear cut in a premium pet grooming salon in Sharjah"
                    width={900}
                    height={600}
                    className="w-full h-64 md:h-72 object-cover"
                    priority
                  />
                  <div className="grid grid-cols-3 divide-x divide-amber-100 border-t border-amber-100">
                    {[
                      { label: "Breed Styling", sub: "Bespoke Cuts" },
                      { label: "Creative", sub: "Color & Art" },
                      { label: "Cat Grooming", sub: "Specialist Care" },
                    ].map((item) => (
                      <div key={item.label} className="py-4 px-2 text-center">
                        <p className="text-sm font-bold text-gray-900 leading-none mb-0.5">{item.label}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-5 left-6 right-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <p className="text-xs text-amber-800 font-medium leading-relaxed">
                    Grooming is part of your pet's health — not just their appearance. Low-stress handling, coat care, and hygiene at every session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GROOMING EXPERIENCE ───────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="experience-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>The Grooming Experience</SectionLabel>
              <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">
                Grooming designed around health, comfort, and individuality
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-prose">
                At The Pet Dr, grooming is more than appearance — it is part of your pet's health, comfort,
                and confidence. Our grooming team focuses on low-stress handling, coat care, hygiene, and
                personalized styling tailored to your pet's breed, lifestyle, and personality.
              </p>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Every session is approached with patience and care — from the first brush to the finishing
                spritz. We pay close attention to skin condition, coat health, and any changes that may
                indicate a dermatological concern worth discussing with the veterinary team.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Health-First Approach", text: "Skin and coat assessed at every session." },
                  { title: "Breed Knowledge", text: "Styled to suit your pet's breed standards and lifestyle." },
                  { title: "Low-Stress Environment", text: "Calm, quiet salon with one-on-one attention." },
                  { title: "Clinic Integration", text: "Dermatology and vet team available if needed." },
                ].map((item) => (
                  <div key={item.title} className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mb-3" />
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-amber-50 aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/pet-grooming-salon-session/900/700"
                alt="Professional pet groomer carefully styling a dog's coat in a premium grooming salon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── STANDARD SERVICES ────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="standard" aria-labelledby="standard-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Standard Grooming Services</SectionLabel>
              <h2 id="standard-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Core grooming services for every pet
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                From a straightforward bath and blow dry to a full groom with trimming, finishing, and
                health checks — our standard services cover everything your pet needs for regular hygiene and coat maintenance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {standardServices.map((s) => (
                <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <Dot />
                    <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed pl-4">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BREED STYLING ─────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="breed-styling" aria-labelledby="breed-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-amber-50 aspect-[5/4]">
              <Image
                src="https://picsum.photos/seed/poodle-teddy-bear-cut-uae/900/720"
                alt="Poodle with a professional teddy bear cut at a grooming salon in Sharjah UAE"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionLabel>Breed-Specific Grooming</SectionLabel>
              <h2 id="breed-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Breed-specific grooming and styling
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Every breed has a coat type, growth pattern, and styling tradition that requires specific
                knowledge and technique. Our groomers are trained in breed-standard cuts as well as modern
                lifestyle and Asian fusion styles tailored to the UAE climate and your pet's personality.
              </p>
              <div className="space-y-3 mb-6">
                {breedStyling.map((item) => (
                  <div key={item.breed} className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <Dot />
                      <div>
                        <p className="text-sm font-bold text-gray-900 mb-0.5">{item.breed}</p>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{item.style}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <SeoTag label="Poodle grooming Sharjah" />
                <SeoTag label="Teddy bear cut UAE" />
                <SeoTag label="Asian fusion dog grooming" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CREATIVE GROOMING ─────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-950" id="creative" aria-labelledby="creative-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
              <div>
                <span className="inline-block bg-white/10 border border-white/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                  Creative & Specialty Grooming
                </span>
                <h2 id="creative-heading" className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  Creative grooming and specialty styling
                </h2>
                <p className="text-gray-400 font-light leading-relaxed mb-6 max-w-prose">
                  Bold, artistic, and social-media-worthy — our creative grooming service transforms your
                  pet's coat into something truly expressive. All styling products are 100% pet-safe.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">Safety Note</p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    All coloring products used are pet-safe and specifically formulated for animal coats.
                    Human hair dyes, bleach, and chemical developers are never used. Color results
                    are temporary and fade naturally over time.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <SeoTag label="Creative dog grooming UAE" />
                  <SeoTag label="Pet hair dye Sharjah" />
                  <SeoTag label="Crazy color pet grooming" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {creativeServices.map((s) => (
                  <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-200">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mb-3" />
                    <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CAT GROOMING ─────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="cats" aria-labelledby="cat-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Cat Grooming</SectionLabel>
              <h2 id="cat-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Professional cat grooming for all breeds
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Many grooming salons avoid cats entirely. We don't. Our cat grooming service is designed
                specifically for feline needs — with handling techniques, tools, and a calm environment
                that respects how differently cats respond to grooming compared to dogs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {catServices.map((s) => (
                  <div key={s.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <Dot />
                      <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 font-light leading-relaxed pl-4">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <SeoTag label="Cat grooming Sharjah" />
                <SeoTag label="Persian cat grooming UAE" />
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-amber-50 aspect-[5/4]">
              <Image
                src="https://picsum.photos/seed/persian-cat-lion-cut-sharjah/900/720"
                alt="Persian cat being professionally groomed with a lion cut at a pet salon in Sharjah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── SKIN & COAT / LOW STRESS side by side ────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" aria-labelledby="health-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
            {/* Skin & Coat */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8">
              <SectionLabel>Skin & Coat Health</SectionLabel>
              <h2 id="health-heading" className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                Grooming that supports skin and coat health
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-prose">
                Coat health and skin condition are closely connected. Our grooming team is trained to identify
                early signs of skin irritation, infection, parasites, and dryness — and to use appropriate
                products that support rather than aggravate sensitive skin.
              </p>
              <ul className="space-y-3" role="list">
                {skinCoatItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Dot />
                    <span className="text-sm text-gray-600 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Low Stress */}
            <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
              <SectionLabel>Low-Stress Handling</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                A calm, patient environment for every pet
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-prose">
                Grooming can be a stressful experience for nervous, reactive, elderly, or previously
                traumatized pets. Our team is trained in gentle, anxiety-aware handling that prioritizes
                your pet's comfort and builds trust over time.
              </p>
              <ul className="space-y-3" role="list">
                {lowStressItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Dot />
                    <span className="text-sm text-gray-700 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── GALLERY ──────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="gallery" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Before & After Gallery</SectionLabel>
              <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Transformations from our grooming salon
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Every dog and cat that comes through our salon leaves looking and feeling different.
                Follow us on Instagram and TikTok for full before-and-after reels, creative grooming showcases,
                and behind-the-scenes sessions.
              </p>
            </div>

            {/* Grid placeholder gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {[
                { seed: "poodle-before-after-groom", alt: "Poodle before and after teddy bear cut grooming" },
                { seed: "golden-retriever-deshedding", alt: "Golden Retriever after professional deshedding treatment" },
                { seed: "creative-color-dog-grooming", alt: "Dog with creative pet-safe color grooming look" },
                { seed: "persian-cat-after-groom", alt: "Persian cat after professional grooming and lion cut" },
                { seed: "schnauzer-breed-cut-uae", alt: "Schnauzer with traditional breed-specific styling cut" },
                { seed: "pomeranian-round-cut-salon", alt: "Pomeranian with round bear styling after grooming" },
                { seed: "bichon-puppy-first-groom", alt: "Bichon Frise puppy after first grooming session" },
                { seed: "asian-fusion-doodle-groom", alt: "Doodle with Asian fusion grooming style" },
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer"
                >
                  <Image
                    src={`https://picsum.photos/seed/${img.seed}/600/600`}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href="https://www.instagram.com/thepetdr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Follow on Instagram
                <ChevronRight />
              </a>
              <a
                href="https://www.tiktok.com/@thepetdr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gray-950 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300"
              >
                Watch on TikTok
                <ChevronRight />
              </a>
            </div>
          </div>
        </section>

        {/* ── PACKAGES ─────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="packages" aria-labelledby="packages-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Grooming Memberships & Packages</SectionLabel>
              <h2 id="packages-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Grooming packages tailored to your pet's needs
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Regular grooming is more effective — and more affordable — when planned ahead.
                Our packages are designed to support consistent coat health throughout the year.
                Contact us to discuss pricing and what is right for your pet.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                >
                  <div className="mb-4">
                    <div className="w-8 h-1 rounded-full bg-amber-400 mb-4" />
                    <h3 className="text-base font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{pkg.desc}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Includes</p>
                    <ul className="space-y-2" role="list">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-[5px]" aria-hidden="true" />
                          <span className="text-xs text-gray-500 font-light leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQS ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="faq" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Grooming questions answered
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-gray-100 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <span className="text-base font-semibold text-gray-900">{faq.q}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-4 text-sm text-gray-500 font-light leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">Book Today</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Ready to book a grooming
              <br />
              <span className="text-amber-500">session for your pet?</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              From routine baths and breed cuts to creative styling and medicated treatments, The Pet Dr
              grooming team in Sharjah is ready to take care of your pet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-700 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-amber-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Grooming
                <ChevronRight />
              </Link>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                WhatsApp Grooming Team
              </a>
              <Link
                href="/pet-grooming-sharjah#packages"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-200"
              >
                View Packages
                <ChevronRight />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}