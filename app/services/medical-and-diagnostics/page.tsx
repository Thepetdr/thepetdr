/* ─── METADATA ───────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Medical & Diagnostic Services in Sharjah | The Pet Dr",
  description:
    "Advanced veterinary diagnostics in Sharjah — in-house lab testing, rapid diagnostics, ultrasound, avian & exotic pet testing, pet travel health certificates. Dogs, cats, birds & exotic animals.",
  keywords: [
    "Veterinary Diagnostics Sharjah",
    "Pet Blood Tests Sharjah",
    "Veterinary Lab Testing UAE",
    "Dog Bloodwork UAE",
    "Cat Blood Analysis Sharjah",
    "Parvo Test Sharjah",
    "Cat Leukemia Testing UAE",
    "Tick Fever Dogs UAE",
    "Rabies Titer Test Sharjah",
    "Pet Relocation UAE",
    "Pet Export Requirements UAE",
    "Parrot DNA Test UAE",
    "PBFD Test Sharjah",
    "Bird Vet UAE",
    "Avian Diagnostics Sharjah",
    "Exotic Pet Vet UAE",
    "Pet Ultrasound Sharjah",
  ],
  alternates: { canonical: "https://thepetdr.com/medical-diagnostic-services-sharjah" },
  openGraph: {
    title: "Medical & Diagnostic Services in Sharjah | The Pet Dr",
    description:
      "Comprehensive in-house and specialised veterinary diagnostics for dogs, cats, birds, and exotic pets in Sharjah, UAE.",
    url: "https://thepetdr.com/medical-diagnostic-services-sharjah",
    siteName: "The Pet Dr",
    locale: "en_AE",
    type: "website",
  },
};

/* ─── JSON-LD ────────────────────────────────────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "The Pet Dr",
  description:
    "Veterinary diagnostic clinic in Sharjah offering in-house lab testing, rapid diagnostics, ultrasound, avian & exotic pet testing, and pet travel health certificates.",
  url: "https://thepetdr.com/medical-diagnostic-services-sharjah",
  areaServed: { "@type": "City", name: "Sharjah" },
  medicalSpecialty: "Veterinary",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Veterinary Diagnostic Services",
    itemListElement: [
      "CBC Blood Testing",
      "Biochemistry Panels",
      "Urinalysis",
      "Fecal Analysis",
      "Parvovirus Rapid Test",
      "FIV/FeLV Testing",
      "Heartworm Testing",
      "Abdominal Ultrasound",
      "Pregnancy Scans",
      "Rabies Titration Testing",
      "Pet Health Certificates",
      "Parrot DNA Sexing",
      "PBFD Testing",
      "Avian Diagnostics",
      "Allergy Testing",
      "PCR Testing",
      "Histopathology",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "MedicalProcedure", name },
    })),
  },
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do blood test results take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In-house blood tests such as CBC and biochemistry panels are typically processed within 30–60 minutes, allowing your vet to discuss results during the same visit. Specialised external tests like histopathology or PCR may take 3–7 business days.",
        },
      },
      {
        "@type": "Question",
        name: "What is a rabies titer test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A rabies titer test (RNATT) measures the level of rabies antibodies in your pet's blood. Many countries require a passing titer result as part of pet import requirements for international relocation.",
        },
      },
      {
        "@type": "Question",
        name: "Is ultrasound safe for my pet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — veterinary ultrasound uses harmless sound waves (not radiation) to create real-time images of internal organs. It is completely safe and non-invasive.",
        },
      },
    ],
  },
};

/* ─── DATA ───────────────────────────────────────────────────────────────────── */

const inHouseLab = {
  groups: [
    {
      label: "Blood & Chemistry",
      items: [
        { name: "CBC (Complete Blood Count)", desc: "Full red/white cell and platelet analysis" },
        { name: "Biochemistry Panels", desc: "Liver, kidney, glucose, protein markers" },
        { name: "Electrolyte Testing", desc: "Sodium, potassium, chloride, bicarbonate" },
      ],
    },
    {
      label: "Urinalysis & Fecal",
      items: [
        { name: "Urinalysis", desc: "Kidney function, infection, crystals" },
        { name: "Fecal Analysis", desc: "Parasite eggs, protozoa, occult blood" },
        { name: "Microscopy", desc: "Cell-level examination of samples" },
      ],
    },
    {
      label: "Cytology & Skin",
      items: [
        { name: "Cytology", desc: "Mass, lesion, and fluid cell analysis" },
        { name: "Skin Scrapings", desc: "Mites, fungi, and dermatitis screening" },
        { name: "Ear Cytology", desc: "Yeast, bacteria, and mite identification" },
      ],
    },
  ],
  seoTags: ["Pet blood tests Sharjah", "Veterinary lab testing UAE", "Dog bloodwork", "Cat blood analysis"],
};

const rapidTests = [
  { name: "Parvovirus", sub: "Dogs — rapid viral detection" },
  { name: "Giardia", sub: "Intestinal parasite test" },
  { name: "FIV / FeLV", sub: "Feline immune diseases" },
  { name: "Canine Distemper", sub: "Rapid viral antigen test" },
  { name: "Ehrlichia & Tick Disease", sub: "Tick-borne disease panel" },
  { name: "Heartworm", sub: "Canine heartworm antigen" },
  { name: "Feline Pancreatitis", sub: "Spec fPL pancreatic marker" },
];

const specializedTests = [
  { name: "Allergy Testing", sub: "Environmental & food allergen panels" },
  { name: "Hormonal Testing", sub: "Thyroid, cortisol, reproductive panels" },
  { name: "Histopathology", sub: "Tissue analysis for cancer & disease" },
  { name: "Biopsy Submissions", sub: "External lab with full reporting" },
  { name: "Culture & Sensitivity", sub: "Guides targeted antibiotic therapy" },
  { name: "PCR Testing", sub: "Molecular detection of pathogens" },
];

const conditions = [
  "Vomiting",
  "Diarrhea",
  "Skin Disease",
  "Ear Infections",
  "Weight Loss",
  "Lethargy",
  "Seizures",
  "Chronic Illness",
  "Respiratory Disease",
  "Feather Loss (Birds)",
];

const whyDiagnostics = [
  {
    num: "01",
    title: "Early Disease Detection",
    desc: "Many conditions — kidney disease, diabetes, early cancer — are far more treatable when caught before they become severe.",
  },
  {
    num: "02",
    title: "More Accurate Treatment",
    desc: "A confirmed diagnosis means targeted treatment — the right drug, right dose, right duration. No trial-and-error.",
  },
  {
    num: "03",
    title: "Reduced Complications",
    desc: "Acting on confirmed data prevents under-treating or over-treating and stops conditions from escalating to emergencies.",
  },
  {
    num: "04",
    title: "Better Long-Term Outcomes",
    desc: "Pets who receive timely, accurate diagnostics consistently show better quality of life and longer, healthier lives.",
  },
];

const faqs = [
  {
    q: "How long do blood test results take?",
    a: "In-house blood tests such as CBC and biochemistry panels are typically processed within 30–60 minutes, allowing your vet to discuss results during the same visit. Specialised external tests like histopathology or PCR may take 3–7 business days depending on the laboratory.",
  },
  {
    q: "What is a rabies titer test, and does my pet need one?",
    a: "A rabies titer test (RNATT) measures the level of rabies antibodies in your pet's blood. Many countries — including the UK, Australia, Japan, and EU nations — require a passing titer result as part of pet import requirements. If you are relocating internationally, this test is often mandatory. We handle the full process at The Pet Dr.",
  },
  {
    q: "Does my bird need DNA testing?",
    a: "DNA sexing is the only reliable method to determine the sex of many bird species, including parrots, that show no visible external differences between male and female. It is particularly useful for breeding programmes, behavioural assessment, and hormonal health monitoring. A simple feather or blood sample is all we need.",
  },
  {
    q: "What is PBFD in parrots?",
    a: "Psittacine Beak and Feather Disease (PBFD) is a highly contagious viral disease affecting parrots and other psittacines. It attacks the immune system and causes progressive feather abnormalities, beak deformities, and immunosuppression. Early testing is critical — especially before introducing a new bird — as there is currently no cure. We offer PCR-based PBFD testing.",
  },
  {
    q: "Is ultrasound safe for my pet?",
    a: "Yes — veterinary ultrasound uses harmless sound waves (not radiation) to create real-time images of internal organs. It is completely safe and non-invasive. Most pets do not require sedation for routine abdominal ultrasounds, though light sedation may be recommended for anxious animals.",
  },
  {
    q: "Why does my pet need diagnostics before surgery?",
    a: "Pre-surgical bloodwork confirms your pet is safe to undergo general anaesthesia. We check organ function (liver and kidneys process anaesthetic agents), blood cell counts, and clotting ability — allowing our vets to tailor the protocol to your pet's specific health status and significantly reduce surgical risk.",
  },
];

/* ─── SMALL COMPONENTS ───────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
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
  return <span className="w-1.5 h-1.5 rounded-full bg-[#c9748f] flex-shrink-0 mt-1.5" aria-hidden="true" />;
}

/* ─── PAGE ───────────────────────────────────────────────────────────────────── */

export default function DiagnosticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-20 bg-white">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fdf8f9] py-20 md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 w-[580px] h-[580px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 65%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8">
              <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <Link href="/services" className="hover:text-[#c9748f] transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-gray-600">Medical & Diagnostics</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Copy */}
              <div>
                <SectionLabel>Veterinary Diagnostics · Sharjah, UAE</SectionLabel>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
                  Advanced Veterinary{" "}
                  <br className="hidden md:block" />
                  <span
                    style={{
                      background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Diagnostics
                  </span>
                  {" "}in Sharjah
                </h1>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-lg">
                  Comprehensive in-house and specialised veterinary diagnostics for dogs, cats, birds, and exotic pets — supporting faster diagnosis, accurate treatment, and better long-term health outcomes.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book a Diagnostic
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                  <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp Us
                  </a>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-pink-100">
                  {[
                    { num: "10+", label: "Diagnostic Services" },
                    { num: "In-House", label: "Same-Day Results" },
                    { num: "Exotic", label: "& Avian Specialist" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-xl md:text-2xl font-bold text-[#c9748f]">{s.num}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero image */}
              <div className="relative">
                <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-50 overflow-hidden">
                  <Image
                    src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7f80d440e3b6c7b024524ebd899dbb7706408841.jpg"
                    alt="Veterinary diagnostic laboratory with hematology analyzer and microscope equipment"
                    width={800}
                    height={533}
                    className="w-full h-64 md:h-72 object-cover"
                    priority
                  />
                  <div className="grid grid-cols-3 divide-x divide-pink-100 border-t border-pink-100">
                    {[
                      { value: "CBC", label: "Blood Panel" },
                      { value: "Rapid", label: "Test Results" },
                      { value: "Ultrasound", label: "Imaging" },
                    ].map((s) => (
                      <div key={s.label} className="py-4 px-2 text-center">
                        <p className="text-sm font-bold text-gray-900 leading-none mb-0.5">{s.value}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-4 right-4 mx-4 flex items-start gap-3 bg-pink-50 border border-pink-200 rounded-2xl p-4 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9748f" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                  <p className="text-xs text-[#a85570] font-medium leading-relaxed">
                    <strong>In-house lab</strong> — most blood results ready within the same appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ──────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="overview-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Why Diagnostics Matter</SectionLabel>
              <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
                Modern veterinary medicine starts with accurate diagnostics.
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                Modern veterinary medicine relies on accurate diagnostics to identify illness early, monitor health conditions, and guide effective treatment plans. At The Pet Dr, we offer a wide range of veterinary diagnostic services for companion and exotic animals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Early Detection", desc: "Catch illness before it worsens" },
                  { title: "Accurate Treatment", desc: "Diagnose precisely, treat effectively" },
                  { title: "Fewer Complications", desc: "Reduce risk with faster diagnosis" },
                  { title: "Better Outcomes", desc: "Improved long-term pet health" },
                ].map((p) => (
                  <div key={p.title} className="bg-[#fdf8f9] border border-pink-100 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-[#c9748f] mb-3" aria-hidden="true" />
                    <p className="text-sm font-semibold text-gray-900 mb-1">{p.title}</p>
                    <p className="text-xs text-gray-400">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50 aspect-[5/4]">
              <Image
                src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/edd60ba452644b391b4a77858e406b83e1cfd202.jpg"
                alt="Modern veterinary laboratory workspace with diagnostic equipment"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── IN-HOUSE LAB ─────────────────────────────────────────────── */}
        <section id="lab" className="py-16 md:py-24 bg-gray-50/70" aria-labelledby="lab-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <SectionLabel>In-House Laboratory</SectionLabel>
              <h2 id="lab-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                In-House Laboratory Testing
              </h2>
              <p className="text-gray-500 font-light max-w-xl leading-relaxed">
                Comprehensive blood work and laboratory analysis performed on-site — faster results, faster treatment decisions for your pet.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="relative rounded-3xl overflow-hidden shadow-md shadow-pink-50 aspect-[3/2]">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/23d8c8441c67d8d4b1272ef7ffab9357625c7386.jpg"
                  alt="Veterinarian collecting a blood sample from a small dog for laboratory testing"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-4">
                {inHouseLab.groups.map((group) => (
                  <div key={group.label} className="bg-white border border-gray-100 rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#c9748f] mb-3">{group.label}</p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex items-start gap-2.5">
                          <Dot />
                          <div>
                            <span className="text-sm font-medium text-gray-800">{item.name}</span>
                            <span className="text-xs text-gray-400 ml-2">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex flex-wrap gap-2 p-4 bg-pink-50 border border-pink-100 rounded-xl">
                  {inHouseLab.seoTags.map((t) => <SeoTag key={t} label={t} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RAPID TESTING ────────────────────────────────────────────── */}
        <section id="rapid" className="py-16 md:py-24 bg-white" aria-labelledby="rapid-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
            <div>
              <SectionLabel>Rapid Diagnostics</SectionLabel>
              <h2 id="rapid-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Rapid & Point-of-Care Testing
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-lg">
                Fast, accurate rapid tests for common and critical conditions — results often available within minutes to guide immediate treatment decisions.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {rapidTests.map((t) => (
                  <div key={t.name} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <Dot />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Parvo test Sharjah", "Cat leukemia testing UAE", "Tick fever dogs UAE"].map((t) => (
                  <SeoTag key={t} label={t} />
                ))}
              </div>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-md shadow-pink-50 aspect-[3/2] mb-5">
                <Image
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/63fbe5d7c6e5ec9bbdd543da87059a8aaa154a9c.jpg"
                  alt="Veterinarian performing a rapid blood test on a dog in a veterinary clinic"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="bg-gradient-to-br from-[#c9748f] to-[#a85570] rounded-2xl p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-pink-200 mb-2">Why It Matters</p>
                <p className="text-sm leading-relaxed text-white/90">
                  Rapid tests enable same-visit treatment decisions — critical for life-threatening conditions like Parvovirus, where every hour counts for survival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMAGING ──────────────────────────────────────────────────── */}
        <section id="imaging" className="py-16 md:py-24 bg-gray-50/70" aria-labelledby="imaging-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <SectionLabel>Imaging & Ultrasound</SectionLabel>
              <h2 id="imaging-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Imaging & Ultrasound Services
              </h2>
              <p className="text-gray-500 font-light max-w-xl leading-relaxed">
                Non-invasive imaging that gives our veterinarians a clear picture of your pet&apos;s internal health — without surgery.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-white border border-gray-100 rounded-2xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c9748f" strokeWidth={1.6} className="w-5 h-5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
                  </div>
                  <p className="text-base font-semibold text-gray-900 mb-1">Abdominal Ultrasound</p>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">Detailed visualisation of internal organs — liver, kidneys, spleen, bladder, and GI tract to detect disease, masses, or abnormalities.</p>
                </div>
                {[
                  { name: "Pregnancy Scans", desc: "Count litter size, monitor fetal health" },
                  { name: "Foreign Body Detection", desc: "Locate swallowed objects quickly" },
                ].map((s) => (
                  <div key={s.name} className="bg-white border border-gray-100 rounded-2xl p-5">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{s.name}</p>
                    <p className="text-xs text-gray-400">{s.desc}</p>
                  </div>
                ))}
                <div className="col-span-2 bg-white border border-gray-100 rounded-2xl p-5">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Orthopedic Imaging</p>
                  <p className="text-xs text-gray-400">Evaluate joints, limbs, and skeletal structure</p>
                </div>
              </div>
              <div>
                <div className="relative rounded-3xl overflow-hidden shadow-md shadow-pink-50 aspect-[16/10] mb-4">
                  <Image
                    src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/863998a9a526436ff9b3120a68602a07234df9ca.jpg"
                    alt="Two veterinarians performing an ultrasound scan on a white dog in a clinic"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <p className="text-xs text-gray-400 px-1 leading-relaxed">
                  Ultrasound is completely safe — no radiation, no sedation needed in most cases. Real-time imaging helps guide treatment immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRAVEL & AVIAN ───────────────────────────────────────────── */}
        <section id="travel" className="py-16 md:py-24 bg-white" aria-labelledby="specialist-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Specialist Services</SectionLabel>
              <h2 id="specialist-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Specialist Diagnostic Programmes
              </h2>
              <p className="text-gray-500 font-light mt-3 max-w-xl mx-auto leading-relaxed">
                High-value services with significant SEO differentiation — pet travel testing and avian & exotic diagnostics.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Travel Card */}
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/pet-travel-airport/800/450"
                    alt="Pet travel health certificate and documentation for international relocation"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold uppercase tracking-wider mb-4">
                    High SEO Value
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pet Travel & Relocation Testing</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                    Moving abroad with your pet? We provide the complete suite of documentation and testing required by international authorities — from UAE export to destination country entry requirements.
                  </p>
                  <ul className="space-y-2 mb-5">
                    {[
                      "Rabies titration testing",
                      "Official health certificates",
                      "Microchip verification & implantation",
                      "Export blood testing panels",
                      "Travel documentation support",
                    ].map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Dot />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {["Pet relocation UAE", "Rabies titer test Sharjah", "Pet export requirements UAE"].map((t) => (
                      <SeoTag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Avian Card */}
              <div id="avian" className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c481891d30498ee8d8806f643f347e3e835fc5e5.jpg"
                    alt="Veterinarian holding and examining a green parrot during an avian physical examination"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold uppercase tracking-wider mb-4">
                    Niche Traffic Gold
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Avian & Exotic Animal Diagnostics</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                    Specialised diagnostics for birds, reptiles, and exotic pets — an area where most UAE clinics have zero online presence. Rank for high-intent niche searches with confidence.
                  </p>
                  <ul className="space-y-2 mb-5">
                    {[
                      "Parrot DNA sexing",
                      "PBFD (Psittacine Beak & Feather Disease) testing",
                      "Avian fecal & crop analysis",
                      "Reptile parasite screening",
                      "Exotic animal diagnostics",
                    ].map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Dot />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {["Parrot DNA test UAE", "PBFD test Sharjah", "Bird vet UAE", "Avian diagnostics"].map((t) => (
                      <SeoTag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIALIZED ──────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" aria-labelledby="specialized-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <SectionLabel>Premium Diagnostics</SectionLabel>
              <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Specialized Testing
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Advanced diagnostics for complex, chronic, or unclear presentations — supporting premium clinical positioning and confident diagnosis.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {specializedTests.map((t) => (
                <div key={t.name} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <Dot />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONDITIONS ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="conditions-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <SectionLabel>Conditions We Investigate</SectionLabel>
              <h2 id="conditions-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Common Conditions We Investigate
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gray-500 font-light leading-relaxed mb-6">
                  If your pet is showing any of these symptoms, diagnostics can identify the underlying cause and guide the right treatment plan quickly.
                </p>
                <div className="flex flex-wrap gap-3">
                  {conditions.map((c) => (
                    <div key={c} className="flex items-center gap-2 bg-[#fdf8f9] border border-pink-100 rounded-xl px-4 py-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9748f] flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
                  Why diagnostics matter for your pet
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                  Many symptoms overlap between different diseases. Without diagnostics, treatment is guesswork. Our testing removes uncertainty and helps your vet act with confidence.
                </p>
                <div className="space-y-5">
                  {whyDiagnostics.map((w) => (
                    <div key={w.num} className="flex gap-4">
                      <span className="text-2xl font-bold text-[#c9748f] leading-none min-w-[2.5rem]">{w.num}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{w.title}</h4>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section id="faq" className="py-16 md:py-24 bg-white" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>FAQs</SectionLabel>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Diagnostic questions answered
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-100 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <span className="text-base font-semibold text-gray-900">{faq.q}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-500 font-light leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c9748f] mb-4">Book Today</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Ready to get answers for your pet.<br />
              <span className="text-[#c9748f]">Book a diagnostic now.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Whether it&apos;s a routine health check, a specific concern, or travel documentation — our diagnostic team in Sharjah is ready.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Diagnostic Appointment
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

