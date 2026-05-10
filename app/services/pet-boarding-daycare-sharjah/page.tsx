import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Boarding & Daycare in Sharjah | The Pet Dr",
  description:
    "Safe, clean, and comfortable pet boarding and daycare in Sharjah. Supervised care, medication administration, cat suites, and daily hygiene for dogs and cats.",
  keywords: [
    "Pet boarding Sharjah",
    "Dog boarding Sharjah",
    "Cat boarding UAE",
    "Pet daycare Sharjah",
    "Pet hotel Sharjah",
    "Dog kennel Sharjah",
    "Cat hotel UAE",
    "Pet stay Sharjah",
    "Overnight pet care UAE",
  ],
  alternates: {
    canonical: "https://thepetdr.com/pet-boarding-sharjah",
  },
  openGraph: {
    title: "Pet Boarding & Daycare in Sharjah | The Pet Dr",
    description:
      "Safe and comfortable pet boarding and daycare in Sharjah with supervised care, medication support, and clean accommodations for dogs and cats.",
    url: "https://thepetdr.com/pet-boarding-sharjah",
    siteName: "The Pet Dr",
    locale: "en_AE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Pet Dr",
  description:
    "Pet boarding and daycare facility in Sharjah offering supervised stays, medication administration, cat suites, and daily care for dogs and cats.",
  url: "https://thepetdr.com/pet-boarding-sharjah",
  areaServed: { "@type": "City", name: "Sharjah" },
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can pets stay together?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pets from the same household who are accustomed to each other may be accommodated together on request. All introductions between unfamiliar animals are assessed carefully. Dogs and cats are always housed in separate areas.",
        },
      },
      {
        "@type": "Question",
        name: "What if my pet needs medication?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our team is experienced in administering oral medications, eye and ear drops, and routine treatments. Please bring clearly labelled medications with written dosing instructions. For pets with complex medical needs, please speak to our team before booking.",
        },
      },
      {
        "@type": "Question",
        name: "Are updates provided during the stay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide updates during your pet's stay and you are welcome to contact the team for a check-in at any time. We will always reach out if there is anything unusual to report about your pet's health or behaviour.",
        },
      },
    ],
  },
};

/* ── Data ───────────────────────────────────────────────────── */

const boardingFeatures = [
  {
    title: "Spacious Accommodations",
    desc: "Comfortable, well-sized individual spaces designed to give pets room to rest, move, and feel at ease during their stay.",
  },
  {
    title: "Daily Cleaning",
    desc: "Accommodations are cleaned and sanitized daily to maintain a hygienic and odor-free environment throughout every stay.",
  },
  {
    title: "Supervised Care",
    desc: "Trained staff provide attentive monitoring throughout the day to ensure each pet's safety, comfort, and wellbeing.",
  },
  {
    title: "Medication Administration",
    desc: "Oral medications, eye drops, ear treatments, and routine medications can be administered by our experienced team.",
  },
  {
    title: "Cat Suites",
    desc: "Dedicated cat-only accommodation areas to ensure cats have a quiet, dog-free environment suited to their nature.",
  },
  {
    title: "Playtime & Exercise",
    desc: "Scheduled play and exercise sessions to keep pets active, stimulated, and comfortable throughout their stay.",
  },
];

const safetyStandards = [
  {
    title: "Hygiene Protocols",
    desc: "Regular disinfection of all areas, food bowls, bedding, and surfaces using pet-safe cleaning products.",
  },
  {
    title: "Vaccination Requirements",
    desc: "All boarding pets must be up to date on core vaccinations prior to arrival to protect every animal in our care.",
  },
  {
    title: "Health Monitoring",
    desc: "Staff observe each pet's appetite, behaviour, and physical condition daily and report any changes promptly.",
  },
  {
    title: "Veterinary Access",
    desc: "As a veterinary clinic, our team has immediate access to medical support if a pet requires assessment or treatment during their stay.",
  },
];

const whatToBring = [
  {
    title: "Food",
    desc: "Bring your pet's regular food in sufficient quantity for the duration of the stay, clearly labelled with feeding amounts and frequency.",
  },
  {
    title: "Medications",
    desc: "All medications should be in original or clearly labelled packaging with written instructions for dosing, timing, and administration.",
  },
  {
    title: "Comfort Items",
    desc: "A familiar blanket, toy, or bed can significantly reduce stress and help your pet settle more quickly into a new environment.",
  },
];

const faqs = [
  {
    q: "Can pets stay together?",
    a: "Pets from the same household who are accustomed to each other may be accommodated together on request. All introductions between unfamiliar animals are carefully assessed. Dogs and cats are always housed in separate, dedicated areas regardless of household origin.",
  },
  {
    q: "What if my pet needs medication during boarding?",
    a: "Our team is experienced in administering oral medications, eye and ear drops, and routine daily treatments. Please bring clearly labelled medications with written dosing instructions at drop-off. For pets with complex or injectable medication requirements, please speak directly with our team before confirming the booking.",
  },
  {
    q: "Are updates provided during the stay?",
    a: "Yes. We provide updates throughout your pet's stay and you are welcome to contact the team for a check-in at any time. We will always reach out proactively if there is anything unusual to report about your pet's health, appetite, or behaviour.",
  },
];

/* ── UI ─────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
      {children}
    </span>
  );
}

function SeoTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium">
      {label}
    </span>
  );
}

function Dot() {
  return (
    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0 mt-[6px]" aria-hidden="true" />
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

export default function PetBoardingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-20 bg-white">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#f0fafb] py-20 md:py-28" aria-labelledby="hero-heading">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #99f6e4 0%, transparent 65%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-10">
              <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-teal-600 transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Pet Boarding</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionLabel>Pet Boarding & Daycare · Sharjah</SectionLabel>

                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-5"
                >
                  Pet Boarding & Daycare{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    in Sharjah
                  </span>
                </h1>

                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-xl">
                  Safe, clean, and comfortable boarding designed to provide pets with attentive care,
                  routine, and a low-stress stay in Sharjah.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-800 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Boarding
                    <ChevronRight />
                  </Link>
                  <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                  >
                    WhatsApp Us
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-teal-100">
                  {[
                    { value: "Daily", label: "Supervised Care" },
                    { value: "Clean", label: "Accommodations" },
                    { value: "Vet", label: "On Site" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-xl md:text-2xl font-bold text-teal-600">{s.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="relative">
                <div className="bg-white rounded-3xl border border-teal-100 shadow-xl shadow-teal-50 overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/pet-boarding-sharjah-dogs/900/600"
                    alt="Dogs and cats resting comfortably in clean, supervised boarding accommodations in Sharjah"
                    width={900}
                    height={600}
                    className="w-full h-64 md:h-72 object-cover"
                    priority
                  />
                  <div className="grid grid-cols-3 divide-x divide-teal-100 border-t border-teal-100">
                    {[
                      { label: "Dog Boarding", sub: "Spacious Stays" },
                      { label: "Cat Suites", sub: "Dog-Free Zones" },
                      { label: "Daycare", sub: "Daily Sessions" },
                    ].map((item) => (
                      <div key={item.label} className="py-4 px-2 text-center">
                        <p className="text-sm font-bold text-gray-900 leading-none mb-0.5">{item.label}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-5 left-6 right-6 flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-2xl p-4 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <p className="text-xs text-teal-800 font-medium leading-relaxed">
                    Boarding within a veterinary clinic means immediate medical support is always available if your pet needs it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY BOARD WITH US ─────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Why Board at The Pet Dr</SectionLabel>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">
                The difference of boarding inside a veterinary clinic
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-prose">
                Most boarding facilities are staffed by pet handlers. Boarding at The Pet Dr means your
                pet is cared for in the same environment as their veterinary team — with trained staff,
                established hygiene standards, and immediate access to medical support if something changes
                during their stay.
              </p>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                We focus on keeping your pet's routine as close to normal as possible — familiar feeding
                schedules, consistent handling, and a calm environment designed to reduce stress rather
                than add to it.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Medical backup on site", text: "Veterinary team available if health concerns arise during the stay." },
                  { title: "Consistent daily routine", text: "Feeding, cleaning, and exercise at regular, predictable intervals." },
                  { title: "Separated species", text: "Cats and dogs housed in entirely separate, dedicated areas." },
                  { title: "Familiar food", text: "We feed only what you bring — no sudden diet changes during boarding." },
                ].map((item) => (
                  <div key={item.title} className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mb-3" />
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-teal-50 aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/vet-boarding-clinic-care/900/700"
                alt="Veterinary staff caring for a dog in a boarding facility connected to a clinic in Sharjah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── BOARDING FEATURES ─────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="features" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Boarding Features</SectionLabel>
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Everything included in every boarding stay
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Every pet that stays with us receives the same standard of care — clean accommodations,
                supervised attention, proper feeding, and daily health monitoring regardless of the length of stay.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {boardingFeatures.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Dot />
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed pl-4">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <SeoTag label="Pet boarding Sharjah" />
              <SeoTag label="Dog kennel Sharjah" />
              <SeoTag label="Cat hotel UAE" />
            </div>
          </div>
        </section>

        {/* ── SAFETY STANDARDS ──────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="safety" aria-labelledby="safety-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-teal-50 aspect-[5/4]">
              <Image
                src="https://picsum.photos/seed/pet-boarding-hygiene-standards/900/720"
                alt="Clean and sanitized pet boarding accommodation with bedding and food bowls prepared"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionLabel>Safety Standards</SectionLabel>
              <h2 id="safety-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Hygiene, health monitoring, and safety at every step
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                We take the safety of every pet in our care seriously. Our boarding area follows the same
                hygiene and monitoring standards as the clinic — with vaccination requirements, daily
                disinfection, and a team trained to recognize early signs of illness or distress.
              </p>
              <div className="space-y-4">
                {safetyStandards.map((item) => (
                  <div key={item.title} className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
                    <div className="flex items-start gap-3 mb-1">
                      <Dot />
                      <p className="text-sm font-bold text-gray-900">{item.title}</p>
                    </div>
                    <p className="text-sm text-gray-500 font-light leading-relaxed pl-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT TO BRING ─────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="what-to-bring" aria-labelledby="bring-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>What to Bring</SectionLabel>
              <h2 id="bring-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                What to pack for your pet's stay
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Bringing the right items from home helps your pet feel comfortable and ensures
                their daily routine continues as closely as possible during their stay with us.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whatToBring.map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-3xl p-8">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                    {item.title === "Food" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth={1.8} className="w-5 h-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    )}
                    {item.title === "Medications" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth={1.8} className="w-5 h-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                      </svg>
                    )}
                    {item.title === "Comfort Items" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth={1.8} className="w-5 h-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-teal-50 border border-teal-200 rounded-3xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-teal-900 mb-1">A note on feeding</p>
                  <p className="text-sm text-teal-800 font-light leading-relaxed max-w-3xl">
                    Sudden changes to diet can cause digestive upset, especially in a new environment. Bringing
                    your pet's regular food — including any supplements or prescription diets — helps maintain
                    consistency and avoids unnecessary stress on the digestive system during their stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="faq" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Boarding questions answered
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
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-4">Book a Stay</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Planning a trip?
              <br />
              <span className="text-teal-400">Your pet is in safe hands.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              The Pet Dr boarding facility in Sharjah provides attentive, clean, and professionally managed
              care for dogs and cats while you are away — with a vet team on site throughout.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-teal-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Boarding
                <ChevronRight />
              </Link>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                WhatsApp Us
              </a>
              <Link
                href="/pet-boarding-sharjah#what-to-bring"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-200"
              >
                What to Bring
                <ChevronRight />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}