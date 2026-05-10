import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advanced Veterinary Surgery in Sharjah | The Pet Dr",
  description:
    "Safe, modern surgical care for dogs, cats, birds, and exotic pets in Sharjah. Routine procedures, emergency surgery, advanced soft tissue surgery, BOAS airway surgery, ophthalmic surgery, and post-operative recovery care.",
  keywords: [
    "Pet surgery Sharjah",
    "Veterinary surgery Sharjah",
    "Dog surgery UAE",
    "Cat surgery Sharjah",
    "Foreign object surgery dog UAE",
    "Exploratory surgery cat",
    "Emergency abdominal surgery Sharjah",
    "BOAS surgery UAE",
    "Pug breathing surgery",
    "French bulldog airway surgery",
    "Cherry eye surgery Sharjah",
    "Entropion surgery UAE",
    "Pyometra surgery Sharjah",
    "Bladder stone surgery UAE",
    "Emergency vet surgery UAE",
  ],
  alternates: {
    canonical: "https://thepetdr.com/pet-surgery-sharjah",
  },
  openGraph: {
    title: "Advanced Veterinary Surgery in Sharjah | The Pet Dr",
    description:
      "Routine, emergency, soft tissue, BOAS airway, and ophthalmic veterinary surgery in Sharjah for dogs, cats, birds, and exotic pets.",
    url: "https://thepetdr.com/pet-surgery-sharjah",
    siteName: "The Pet Dr",
    locale: "en_AE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "The Pet Dr",
  description:
    "Veterinary surgery clinic in Sharjah offering routine, emergency, soft tissue, BOAS airway, and ophthalmic surgery for pets.",
  url: "https://thepetdr.com/pet-surgery-sharjah",
  areaServed: { "@type": "City", name: "Sharjah" },
  medicalSpecialty: "Veterinary",
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is anesthesia safe for pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern veterinary anesthesia is generally very safe when supported by pre-anesthetic assessment, blood testing, IV access, monitoring equipment, temperature support, and recovery supervision. Risk varies depending on your pet's age, health status, and the type of procedure.",
        },
      },
      {
        "@type": "Question",
        name: "What is BOAS surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BOAS surgery is corrective airway surgery for brachycephalic breeds such as pugs, bulldogs, and French bulldogs. It may include soft palate reduction, stenotic nares correction, and airway assessment to improve breathing and exercise tolerance.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if my pet swallowed something?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common warning signs include repeated vomiting, retching, refusal to eat, abdominal pain, lethargy, drooling, or straining to pass stool. These may indicate a foreign body obstruction requiring urgent imaging and surgery.",
        },
      },
      {
        "@type": "Question",
        name: "What are signs of intestinal blockage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vomiting, drooling, abdominal pain, dehydration, constipation or reduced stool, weakness, and refusal to eat are common signs. Intestinal blockage is an emergency and can worsen quickly without treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Does my pet need blood tests before surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Pre-surgical blood tests help evaluate liver and kidney function, red and white blood cells, hydration, infection, and overall anesthetic safety before any procedure.",
        },
      },
    ],
  },
};

/* ── Data ───────────────────────────────────────────────────── */

const routineProcedures = [
  "Cat spay",
  "Dog spay",
  "Cat neuter",
  "Dog neuter",
  "Lump removals",
  "Wound repair",
  "Abscess treatment",
  "Minor surgical procedures",
];

const softTissueSurgeries = [
  "Foreign body removal surgery",
  "Exploratory surgery",
  "Gastrointestinal surgery",
  "Bladder stone surgery",
  "Mass removals",
  "Splenectomy",
  "Pyometra surgery",
  "Hernia repair",
  "Intestinal surgery",
  "Organ biopsy procedures",
];

const boasServices = [
  "Soft palate correction",
  "Stenotic nares correction",
  "Airway evaluation",
  "Brachycephalic airway surgery",
];

const eyeSurgeries = [
  "Cherry eye correction",
  "Eyelid surgery",
  "Entropion correction",
  "Eye mass removal",
  "Corneal injury procedures",
];

const emergencySurgeries = [
  "Emergency abdominal surgery",
  "Foreign body obstruction surgery",
  "Trauma surgery",
  "Internal bleeding stabilization",
  "Emergency wound repair",
  "Pyometra emergency surgery",
];

const safetyItems = [
  "Pre-anesthetic bloodwork",
  "IV catheter placement",
  "IV fluid therapy",
  "Vital monitoring equipment",
  "Temperature support",
  "Pain management protocols",
  "Recovery monitoring",
];

const aftercareItems = [
  "Pain management",
  "Recovery instructions",
  "Post-op monitoring",
  "Recheck appointments",
  "Home care guidance",
];

const commonConditions = [
  "Vomiting from foreign body obstruction",
  "Difficulty breathing in flat-faced breeds",
  "Pyometra",
  "Eye irritation",
  "Intestinal blockage",
  "Bladder stones",
  "Tumors and masses",
];

const faqs = [
  {
    q: "Is anesthesia safe for pets?",
    a: "Modern veterinary anesthesia is generally very safe when supported by pre-anesthetic assessment, blood testing, IV access, monitoring equipment, temperature support, and recovery supervision. Risk varies depending on your pet's age, health status, and the procedure type.",
  },
  {
    q: "How long does recovery take?",
    a: "Recovery time depends on the procedure. Routine surgeries such as spay or neuter usually involve faster recovery, while abdominal or airway surgery may require more monitoring, activity restriction, and follow-up visits.",
  },
  {
    q: "What is BOAS surgery?",
    a: "BOAS surgery is corrective airway surgery for brachycephalic breeds such as pugs, bulldogs, and French bulldogs. It may include soft palate reduction, stenotic nares correction, and airway assessment to improve breathing, comfort, and exercise tolerance.",
  },
  {
    q: "How do I know if my pet swallowed something?",
    a: "Common warning signs include repeated vomiting, retching, refusal to eat, abdominal pain, drooling, lethargy, or straining to pass stool. These may indicate a foreign body obstruction and require urgent imaging and possibly surgery.",
  },
  {
    q: "What are signs of intestinal blockage?",
    a: "Vomiting, drooling, abdominal pain, weakness, dehydration, reduced appetite, constipation, or very small amounts of stool can all be signs. Intestinal blockage is an emergency and should be assessed quickly.",
  },
  {
    q: "Does my pet need blood tests before surgery?",
    a: "Yes. Pre-surgical blood tests help assess liver and kidney function, red and white blood cells, hydration, infection, and overall anesthetic safety before any procedure.",
  },
  {
    q: "When should masses be removed?",
    a: "Masses should be checked as soon as they are noticed. Some grow quickly, ulcerate, or extend deeper than they appear. Early removal may allow easier surgery and better pathology assessment.",
  },
];

const relatedArticles = [
  {
    title: "Signs your dog swallowed a foreign object",
    href: "/blog/signs-your-dog-swallowed-a-foreign-object",
  },
  {
    title: "BOAS in pugs and French bulldogs",
    href: "/blog/boas-in-pugs-and-french-bulldogs",
  },
  {
    title: "Pyometra in dogs and cats",
    href: "/blog/pyometra-in-dogs-and-cats",
  },
  {
    title: "Signs your pet needs emergency surgery",
    href: "/blog/signs-your-pet-needs-emergency-surgery",
  },
  {
    title: "Cherry eye explained",
    href: "/blog/cherry-eye-explained",
  },
  {
    title: "Recovery after pet surgery",
    href: "/blog/recovery-after-pet-surgery",
  },
];

/* ── Shared components ──────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
      {children}
    </span>
  );
}

function SeoTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-medium">
      {label}
    </span>
  );
}

function Dot() {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full bg-[#c9748f] flex-shrink-0 mt-[6px]"
      aria-hidden="true"
    />
  );
}

function ServiceItem({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-4">
      <Dot />
      <p className="text-sm font-medium text-gray-700 leading-relaxed">{label}</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function PetSurgeryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-20 bg-white">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fdf8f9] py-20 md:py-28" aria-labelledby="hero-heading">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 65%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-10">
              <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-[#c9748f] transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Veterinary Surgery</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <SectionLabel>Veterinary Surgery · Sharjah</SectionLabel>

                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-5"
                >
                  Advanced Veterinary Surgery{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    in Sharjah
                  </span>
                </h1>

                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-xl">
                  Safe, modern surgical care for dogs, cats, birds, and exotic pets — including routine procedures,
                  emergency surgery, advanced soft tissue surgery, and airway corrective procedures.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Surgical Consultation
                    <ChevronRight />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-pink-200 bg-pink-50 text-[#c9748f] px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-white hover:border-[#c9748f] transition-all duration-200"
                  >
                    Emergency Surgery Support
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

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-pink-100">
                  {[
                    { value: "Routine", label: "Surgical Care" },
                    { value: "Advanced", label: "Soft Tissue" },
                    { value: "24/7", label: "Emergency Support" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-xl md:text-2xl font-bold text-[#c9748f]">{s.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="relative">
                <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-50 overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/vet-surgery-sharjah/900/600"
                    alt="Veterinary surgery team preparing a patient in a modern operating room in Sharjah"
                    width={900}
                    height={600}
                    className="w-full h-64 md:h-72 object-cover"
                    priority
                  />
                  <div className="grid grid-cols-3 divide-x divide-pink-100 border-t border-pink-100">
                    {[
                      { label: "BOAS", sub: "Airway Surgery" },
                      { label: "Soft Tissue", sub: "Advanced Care" },
                      { label: "Emergency", sub: "Surgical Support" },
                    ].map((item) => (
                      <div key={item.label} className="py-4 px-2 text-center">
                        <p className="text-sm font-bold text-gray-900 leading-none mb-0.5">{item.label}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-5 left-6 right-6 flex items-start gap-3 bg-pink-50 border border-pink-200 rounded-2xl p-4 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9748f" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <p className="text-xs text-[#a85570] font-medium leading-relaxed">
                    Patient safety comes first — with anesthetic planning, monitoring, temperature support, pain control, and supervised recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="overview-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Surgical Care Overview</SectionLabel>
              <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
                Compassionate, precise, and carefully monitored surgical treatment
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Our surgical team focuses on patient safety, careful anesthetic monitoring, pain management,
                and personalized recovery care. From routine sterilization procedures to advanced soft tissue
                and emergency surgeries, we aim to provide compassionate and precise surgical treatment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Routine Surgery", text: "Spay, neuter, lump removal, minor procedures" },
                  { title: "Advanced Soft Tissue", text: "Foreign body, pyometra, GI and abdominal surgery" },
                  { title: "Emergency Intervention", text: "Urgent abdominal, trauma, and bleeding support" },
                  { title: "Recovery Focused", text: "Pain control, monitoring, and clear home care guidance" },
                ].map((item) => (
                  <div key={item.title} className="bg-[#fdf8f9] border border-pink-100 rounded-2xl p-4">
                    <div className="w-2 h-2 rounded-full bg-[#c9748f] mb-3" />
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50 aspect-[5/4]">
              <Image
                src="https://picsum.photos/seed/vet-recovery-overview/900/720"
                alt="Veterinarian monitoring a pet after surgery in a recovery ward"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── ROUTINE ──────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="routine" aria-labelledby="routine-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Routine Surgical Procedures</SectionLabel>
              <h2 id="routine-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Routine procedures performed with careful planning and recovery support
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Routine surgery still deserves advanced standards. We approach sterilization, wound repair,
                and minor procedures with the same attention to safety, comfort, and recovery as more complex surgeries.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {routineProcedures.map((item) => (
                <ServiceItem key={item} label={item} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SOFT TISSUE ──────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="soft-tissue" aria-labelledby="soft-tissue-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
            <div>
              <SectionLabel>Advanced Soft Tissue Surgery</SectionLabel>
              <h2 id="soft-tissue-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Advanced soft tissue surgery for abdominal, internal, and complex cases
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                We perform advanced soft tissue surgery for pets requiring abdominal, internal, and complex
                mass-related procedures. These surgeries are often critical for pets with vomiting, intestinal
                obstruction, bladder disease, internal masses, severe infection, or unexplained abdominal pain.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {softTissueSurgeries.map((item) => (
                  <ServiceItem key={item} label={item} />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <SeoTag label="Foreign object surgery dog UAE" />
                <SeoTag label="Exploratory surgery cat" />
                <SeoTag label="Emergency abdominal surgery Sharjah" />
              </div>
            </div>

            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-md shadow-pink-50 aspect-[4/3] mb-5">
                <Image
                  src="https://picsum.photos/seed/soft-tissue-surgery-vet/900/700"
                  alt="Veterinary surgeon performing advanced soft tissue surgery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="bg-gradient-to-br from-[#c9748f] to-[#a85570] rounded-3xl p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-pink-200 mb-2">Clinical Priority</p>
                <p className="text-sm text-white/90 leading-relaxed">
                  Foreign body obstruction, pyometra, splenic disease, bladder stones, and intestinal emergencies
                  often require urgent surgical intervention. Fast evaluation can make a significant difference in outcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOAS ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="boas" aria-labelledby="boas-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50 aspect-[5/4]">
              <Image
                src="https://picsum.photos/seed/brachycephalic-dog-vet/900/720"
                alt="Flat-faced dog being assessed for BOAS airway breathing difficulties"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionLabel>BOAS & Airway Corrective Surgery</SectionLabel>
              <h2 id="boas-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Airway surgery for flat-faced breeds with breathing difficulty
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-prose">
                Flat-faced breeds such as pugs, bulldogs, and French bulldogs may experience breathing difficulties
                caused by Brachycephalic Obstructive Airway Syndrome (BOAS). Surgical correction can significantly
                improve breathing, exercise tolerance, sleep quality, and overall quality of life.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {boasServices.map((item) => (
                  <ServiceItem key={item} label={item} />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <SeoTag label="BOAS surgery UAE" />
                <SeoTag label="Pug breathing surgery" />
                <SeoTag label="French bulldog airway surgery" />
              </div>
            </div>
          </div>
        </section>

        {/* ── EYE SURGERY ──────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="ophthalmic" aria-labelledby="eye-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Eye & Ophthalmic Surgery</SectionLabel>
              <h2 id="eye-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Surgical treatment for common eye and eyelid conditions
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Eye and eyelid problems can become painful quickly and may threaten vision if left untreated.
                We assess each case carefully and recommend the appropriate surgical or corrective procedure.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">
              {eyeSurgeries.map((item) => (
                <ServiceItem key={item} label={item} />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <SeoTag label="Cherry eye surgery Sharjah" />
              <SeoTag label="Entropion surgery UAE" />
            </div>
          </div>
        </section>

        {/* ── EMERGENCY ────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="emergency" aria-labelledby="emergency-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Emergency Surgery</SectionLabel>
              <h2 id="emergency-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Urgent surgical support for life-threatening conditions
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Some surgical conditions cannot wait. Our emergency surgical support is designed for pets
                with intestinal obstruction, abdominal emergencies, trauma, pyometra, or internal bleeding
                requiring urgent stabilization and intervention.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {emergencySurgeries.map((item) => (
                  <ServiceItem key={item} label={item} />
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50 aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/emergency-vet-surgery-sharjah/900/700"
                alt="Emergency veterinary surgical team preparing urgent care for a pet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── SAFETY ───────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="safety" aria-labelledby="safety-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
            <div>
              <SectionLabel>Surgical Safety & Anesthesia</SectionLabel>
              <h2 id="safety-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Safety built into every step of anesthesia and surgery
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Before anesthesia, we assess your pet carefully, review bloodwork, and create an anesthetic
                and pain-control plan based on age, breed, condition, and procedure type. Monitoring continues
                throughout surgery and into recovery.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {safetyItems.map((item) => (
                <div key={item} className="bg-[#fdf8f9] border border-pink-100 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <Dot />
                    <p className="text-sm font-medium text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AFTERCARE ────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="aftercare" aria-labelledby="aftercare-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Recovery & Aftercare</SectionLabel>
              <h2 id="aftercare-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Recovery support that continues after the operation
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Good surgical outcomes depend as much on aftercare as on the procedure itself. Recovery care
                includes pain management, home instructions, incision monitoring, feeding guidance, follow-up
                rechecks, and ongoing support to help your pet heal comfortably and safely.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {aftercareItems.map((item) => (
                  <ServiceItem key={item} label={item} />
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50 aspect-[5/4]">
              <Image
                src="https://picsum.photos/seed/post-op-pet-recovery/900/720"
                alt="Pet resting comfortably during post-operative recovery care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── CONDITIONS ───────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="conditions" aria-labelledby="conditions-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-10">
              <SectionLabel>Common Conditions Requiring Surgery</SectionLabel>
              <h2 id="conditions-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                When does a pet need surgical intervention?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {commonConditions.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 bg-[#fdf8f9] border border-pink-100 rounded-xl px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9748f] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQS ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="faq" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Surgical questions answered
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-gray-100 rounded-2xl bg-white hover:bg-gray-50/50 transition-colors duration-200 overflow-hidden"
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
                  <div className="px-6 pb-5 text-sm text-gray-500 font-light leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ─────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="articles" aria-labelledby="articles-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Related Articles</SectionLabel>
              <h2 id="articles-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Learn more about pet surgery topics
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                These articles cover the most common surgical concerns and help pet owners recognize
                warning signs early — from foreign body obstruction and BOAS to pyometra, eye conditions,
                and post-operative recovery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {relatedArticles.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="group bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center mb-4 text-[#c9748f]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#c9748f] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Read more about this topic and how early recognition can improve outcomes.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── EMERGENCY STRIP ──────────────────────────────────── */}
        <section className="py-12 bg-[#fdf8f9] border-y border-pink-100">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c9748f] mb-2">Emergency Support</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                24/7 Emergency Veterinary Care
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Immediate care from an experienced emergency vet team in Sharjah.
              </p>
            </div>
            <div className="lg:text-right space-y-1">
              <p className="text-sm font-semibold text-gray-900">24/7 Emergency & Critical Veterinary Care</p>
              <p className="text-sm font-semibold text-[#c9748f]">Priority Same-Day Appointments for Urgent Cases</p>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c9748f] mb-4">Book Today</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Need a surgical consultation
              <br />
              <span className="text-[#c9748f]">for your pet?</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              From routine procedures to urgent surgical cases, The Pet Dr provides modern veterinary surgery
              with careful monitoring, pain control, and recovery support in Sharjah.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Surgical Consultation
                <ChevronRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-200"
              >
                Emergency Surgery Support
              </Link>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}