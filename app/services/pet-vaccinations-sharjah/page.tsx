import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Vaccinations in Sharjah | Dogs, Cats, Puppies & Kittens | The Pet Dr",
  description:
    "Safe, up-to-date vaccinations for dogs, cats, puppies, and kittens in Sharjah. Core vaccines, rabies, kennel cough, anti-tick & fungal protocols. Book at The Pet Dr.",
  keywords: [
    "Pet Vaccinations Sharjah",
    "Dog Vaccinations Sharjah",
    "Cat Vaccinations Sharjah",
    "Puppy Vaccine Schedule Sharjah",
    "Kitten Vaccine Schedule Sharjah",
    "Rabies Vaccination Sharjah",
    "Kennel Cough Vaccine UAE",
    "Anti Tick Vaccination Sharjah",
    "Pet Immunisation Sharjah",
  ],
  alternates: { canonical: "https://thepetdr.com/pet-vaccinations-sharjah" },
  openGraph: {
    title: "Pet Vaccinations in Sharjah | The Pet Dr",
    description:
      "Protect your pets from preventable diseases with safe, up-to-date vaccination protocols for dogs, cats, puppies, and kittens at The Pet Dr, Sharjah.",
    url: "https://thepetdr.com/pet-vaccinations-sharjah",
    siteName: "The Pet Dr",
    locale: "en_AE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "The Pet Dr",
  description: "Pet vaccination clinic in Sharjah offering core and lifestyle vaccines for dogs, cats, puppies, and kittens.",
  url: "https://thepetdr.com/pet-vaccinations-sharjah",
  areaServed: { "@type": "City", name: "Sharjah" },
  medicalSpecialty: "Veterinary",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pet Vaccination Services",
    itemListElement: [
      "Dog Core Vaccinations", "Cat Core Vaccinations",
      "Puppy Vaccine Schedule", "Kitten Vaccine Schedule",
      "Rabies Vaccination", "Kennel Cough Vaccine",
      "Anti-Tick Vaccination", "Fungal Vaccination",
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
        name: "Are vaccines necessary for indoor pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Indoor pets are still exposed to airborne pathogens, parasites brought in on clothing, and stress-related immune suppression. Core vaccines are recommended regardless of lifestyle.",
        },
      },
      {
        "@type": "Question",
        name: "How often are boosters needed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most core vaccines require annual or triennial boosters. Rabies boosters are required annually in the UAE.",
        },
      },
      {
        "@type": "Question",
        name: "What vaccines does my puppy need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies need DHPP at 6–8, 10–12, and 14–16 weeks, plus Rabies at 12–16 weeks.",
        },
      },
    ],
  },
};

const vaccineGroups = [
  {
    id: "dog-vaccinations",
    pet: "Dogs",
    color: "from-blue-50 to-sky-50",
    border: "border-blue-100",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    accent: "#3b82f6",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/afaabbb6171a6f521b0855f74bcf72ad40bee204.jpg",
    imageAlt: "Veterinarian holding a husky puppy during a dog vaccination appointment",
    core: [
      { name: "DHPP", full: "Distemper, Hepatitis, Parvovirus & Parainfluenza", type: "Core" },
      { name: "Rabies", full: "Legally required in the UAE — annual booster", type: "Core" },
      { name: "Leptospirosis", full: "Bacterial infection spread through contaminated water", type: "Recommended" },
      { name: "Bordetella", full: "Kennel cough — essential for social or boarded dogs", type: "Lifestyle" },
      { name: "Anti-Tick (Lyme)", full: "Protection against tick-borne Lyme disease", type: "Lifestyle" },
      { name: "Fungal (Ringworm)", full: "Preventive immunisation for dermatophytosis", type: "Optional" },
    ],
  },
  {
    id: "cat-vaccinations",
    pet: "Cats",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    accent: "#8b5cf6",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/df069aafe97124525584c3e91b728b4f72dc15bf.jpg",
    imageAlt: "Cat receiving a vaccination injection from a veterinarian",
    core: [
      { name: "FVRCP", full: "Feline Herpesvirus, Calicivirus & Panleukopenia", type: "Core" },
      { name: "Rabies", full: "Required for travel, boarding, and by UAE law", type: "Core" },
      { name: "FeLV", full: "Feline Leukaemia Virus — for at-risk or outdoor cats", type: "Recommended" },
      { name: "FIV", full: "Feline Immunodeficiency Virus prevention", type: "Lifestyle" },
      { name: "Chlamydophila", full: "Respiratory infection prevention in multi-cat households", type: "Lifestyle" },
      { name: "Fungal (Ringworm)", full: "Preventive immunisation for dermatophytosis", type: "Optional" },
    ],
  },
  {
    id: "puppy-schedule",
    pet: "Puppies",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-100",
    accent: "#f59e0b",
    schedule: [
      { age: "6–8 weeks", vaccines: "DHPP (1st dose)", note: "Start of primary series" },
      { age: "10–12 weeks", vaccines: "DHPP (2nd dose) + Bordetella", note: "Booster + social protection" },
      { age: "14–16 weeks", vaccines: "DHPP (3rd dose) + Rabies", note: "Final primary series" },
      { age: "12–16 months", vaccines: "DHPP booster + Rabies booster", note: "Annual reinforcement" },
      { age: "Every 1–3 years", vaccines: "DHPP + Rabies + Lifestyle vaccines", note: "Ongoing adult protection" },
    ],
  },
  {
    id: "kitten-schedule",
    pet: "Kittens",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    accent: "#c9748f",
    schedule: [
      { age: "6–8 weeks", vaccines: "FVRCP (1st dose)", note: "Maternal immunity wanes" },
      { age: "10–12 weeks", vaccines: "FVRCP (2nd dose) + FeLV (1st)", note: "Protection builds" },
      { age: "14–16 weeks", vaccines: "FVRCP (3rd dose) + Rabies + FeLV (2nd)", note: "Final primary series" },
      { age: "12–16 months", vaccines: "FVRCP booster + Rabies booster", note: "Adult protocol begins" },
      { age: "Every 1–3 years", vaccines: "FVRCP + Rabies + Lifestyle vaccines", note: "Ongoing adult protection" },
    ],
  },
];

const specialtyVaccines = [
  {
    name: "Rabies Vaccination",
    desc: "Legally mandated in the UAE for all dogs and cats. Annual boosters required. We issue official vaccination certificates accepted at UAE airports, pet hotels, and veterinary authorities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    tag: "UAE Legal Requirement",
    tagColor: "bg-red-50 text-red-600 border-red-200",
  },
  {
    name: "Kennel Cough (Bordetella)",
    desc: "Essential for any dog that socialises, attends dog parks, boarding, or grooming. Spreads rapidly in close-contact environments and can cause severe respiratory distress.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    tag: "Required for Boarding & Grooming",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Anti-Tick Vaccination",
    desc: "Tick-borne diseases like Lyme and Ehrlichiosis are a real risk in the UAE's warm climate year-round. Recommended for dogs that spend time outdoors or in grassy environments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    tag: "Recommended for Outdoor Pets",
    tagColor: "bg-green-50 text-green-700 border-green-200",
  },
  {
    name: "Fungal (Ringworm) Vaccination",
    desc: "Common in multi-pet households and transferable to humans. A preventive fungal vaccine significantly reduces infection risk and severity — especially for cats and young dogs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    tag: "Multi-Pet Households",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

const process = [
  { step: "01", title: "Physical Examination", desc: "Full health check confirms your pet is well enough to be vaccinated safely." },
  { step: "02", title: "Health History Review", desc: "We check previous records, reactions, and medications to select the right vaccines." },
  { step: "03", title: "Vaccine Administration", desc: "Given by our trained team using the gentlest technique — most pets barely notice." },
  { step: "04", title: "Post-Vaccine Monitoring", desc: "Your pet rests with us briefly so we can observe for any immediate reactions." },
  { step: "05", title: "Reminder Scheduling", desc: "We register booster dates and send reminders so you never miss a vaccine window." },
];

const faqs = [
  {
    q: "Are vaccines necessary for indoor pets?",
    a: "Yes. Indoor pets are still exposed to airborne pathogens, parasites brought in on shoes or clothing, and stress-related immune suppression. Core vaccines — particularly FVRCP for cats and DHPP for dogs — are recommended regardless of lifestyle. Rabies vaccination is also a legal requirement in the UAE.",
  },
  {
    q: "How often are boosters needed?",
    a: "Most core vaccines require annual or triennial boosters depending on the vaccine type and your pet's health history. Rabies boosters are required annually by UAE law. Our team will create a personalised booster schedule and send you reminders before each one is due.",
  },
  {
    q: "What vaccines does my puppy need?",
    a: "Puppies need a primary series starting at 6–8 weeks: DHPP at 6–8, 10–12, and 14–16 weeks, plus Rabies at 12–16 weeks. Bordetella is recommended at 10–12 weeks for puppies that will socialise or attend training.",
  },
  {
    q: "Can I vaccinate my pet if they're currently on medication?",
    a: "In most cases, yes — but this depends on the medication. Some immunosuppressive drugs may affect vaccine efficacy. Always let us know about any current medications during the health history review.",
  },
  {
    q: "What side effects should I watch for after vaccination?",
    a: "Mild lethargy, slight swelling at the injection site, or reduced appetite for 24 hours is normal. Rarely, a more significant reaction can occur — if you notice facial swelling, difficulty breathing, or vomiting within an hour, contact us immediately.",
  },
  {
    q: "Do you provide vaccination certificates?",
    a: "Yes. We issue official vaccination records and certificates accepted by UAE travel authorities, boarding facilities, grooming salons, and veterinary bodies — in printed and digital formats.",
  },
];

const TypeBadge = ({ type }: { type: string }) => {
  const styles: Record<string, string> = {
    Core: "bg-rose-50 text-rose-700 border-rose-200",
    Recommended: "bg-amber-50 text-amber-700 border-amber-200",
    Lifestyle: "bg-sky-50 text-sky-700 border-sky-200",
    Optional: "bg-gray-50 text-gray-600 border-gray-200",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border uppercase tracking-wide ${styles[type] ?? styles.Optional}`}>
      {type}
    </span>
  );
};

export default function PetVaccinationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-20 bg-white">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fdf8f9] py-20 md:py-28">
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 w-[580px] h-[580px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 65%)" }} />

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8">
              <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <Link href="/services" className="hover:text-[#c9748f] transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-gray-600">Pet Vaccinations</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Copy */}
              <div>
                <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                  Pet Vaccinations · Sharjah
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
                  Pet Vaccinations{" "}
                  <br className="hidden md:block" />
                  <span style={{ background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    in Sharjah
                  </span>
                </h1>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-lg">
                  Protect your pets from preventable diseases with safe, up-to-date vaccination
                  protocols for dogs, cats, puppies, and kittens — administered by our expert veterinary team.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {vaccineGroups.map((g) => (
                    <a
                      key={g.id}
                      href={`#${g.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:border-pink-200 hover:text-[#c9748f] transition-all duration-200 shadow-sm"
                    >
                      {g.pet}
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Vaccination Appointment
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
              </div>

              {/* Hero image card */}
              <div className="relative">
                <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-50 overflow-hidden">
                  <img
                    src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/65d6d18731a4d8738d6753f88f4d1ea7cc855eb3.jpg"
                    alt="Smiling veterinarian holding a Chihuahua dog during a vaccination visit at The Pet Dr Sharjah"
                    width={800}
                    height={533}
                    loading="eager"
                    className="w-full h-64 md:h-72 object-cover"
                  />
                  <div className="grid grid-cols-4 divide-x divide-pink-100 border-t border-pink-100">
                    {[
                      { value: "8+", label: "Vaccines" },
                      { value: "UAE", label: "Approved" },
                      { value: "3K+", label: "Vaccinated" },
                      { value: "Same day", label: "Certificate" },
                    ].map((s) => (
                      <div key={s.label} className="py-4 px-2 text-center">
                        <p className="text-sm font-bold text-gray-900 leading-none mb-0.5">{s.value}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* UAE legal badge floating */}
                <div className="absolute -bottom-4 left-4 right-4 mx-4 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  <p className="text-xs text-amber-800 font-medium leading-relaxed">
                    <strong>UAE Law:</strong> Rabies vaccination is legally required for all dogs and cats. We issue official certificates accepted by all UAE authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY VACCINES MATTER ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50">
                <img
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/02c9a8a367729164e037d5ec6756557872f9129c.jpg"
                  alt="Veterinarian smiling with a German Shepherd dog and a tabby cat — pet vaccination team at The Pet Dr"
                  width={800}
                  height={770}
                  loading="lazy"
                  className="w-full h-[420px] md:h-[500px] object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 border border-pink-100 shadow-sm">
                  <p className="text-2xl font-bold text-[#c9748f] leading-none">6+</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Preventable diseases covered</p>
                </div>
              </div>

              {/* Copy + disease table */}
              <div>
                <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                  Why Vaccines Matter
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
                  Immunity built before illness strikes — not after.
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-6">
                  Vaccines train your pet&apos;s immune system to recognise and fight specific pathogens before
                  exposure ever happens. Many of the diseases vaccines prevent — like Parvovirus in dogs and
                  Panleukopenia in cats — are highly contagious, difficult to treat, and can be fatal even with
                  intensive care.
                </p>
                <div className="space-y-2 mb-8">
                  {[
                    { disease: "Parvovirus (Dogs)", severity: "Fatal without treatment", prevented: "DHPP" },
                    { disease: "Panleukopenia (Cats)", severity: "Up to 90% mortality untreated", prevented: "FVRCP" },
                    { disease: "Rabies", severity: "100% fatal in unvaccinated animals", prevented: "Rabies" },
                    { disease: "Canine Distemper", severity: "Severe neurological damage", prevented: "DHPP" },
                    { disease: "Kennel Cough", severity: "Highly contagious — spreads in days", prevented: "Bordetella" },
                  ].map((d) => (
                    <div key={d.disease} className="flex items-center gap-3 bg-gray-50 rounded-xl border border-gray-100 px-4 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#c9748f] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{d.disease}</p>
                        <p className="text-xs text-gray-400 font-light">{d.severity}</p>
                      </div>
                      <span className="text-xs font-medium text-[#c9748f] bg-pink-50 border border-pink-200 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        {d.prevented}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#c9748f] text-sm font-semibold border-b-2 border-[#c9748f]/30 hover:border-[#c9748f] pb-0.5 transition-colors duration-200">
                  Check your pet&apos;s vaccine status
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── VACCINES OFFERED — DOGS & CATS ───────────────────────────── */}
        {vaccineGroups.slice(0, 2).map((group, idx) => (
          <section
            key={group.id}
            id={group.id}
            className={`py-16 md:py-20 scroll-mt-24 ${idx % 2 === 0 ? "bg-gray-50/70" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Image side */}
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="rounded-3xl overflow-hidden shadow-md shadow-pink-50 mb-6">
                    <img
                      src={group.image}
                      alt={group.imageAlt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Content side */}
                <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        {group.pet} Vaccinations
                      </h2>
                      <p className="text-sm text-gray-400 font-light mt-0.5">
                        Available at The Pet Dr, Sharjah
                      </p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {group.core!.map((v) => (
                      <article key={v.name} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-base font-bold text-gray-900">{v.name}</h3>
                          <TypeBadge type={v.type} />
                        </div>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{v.full}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── PUPPY & KITTEN SCHEDULES ──────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-14">
              <div>
                <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                  Young Pets
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                  Puppy &amp; kitten vaccine schedules
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Starting early is critical. Maternal immunity fades in the first weeks of life — leaving
                  puppies and kittens vulnerable. Our primary vaccine series closes that gap.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-md shadow-pink-50">
                <img
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/53b9f8b7e395dcb83daf2b67f943f207ceb98ab7.jpg"
                  alt="A kitten and puppy lying together — early pet vaccination is essential"
                  width={612}
                  height={459}
                  loading="lazy"
                  className="w-full h-52 object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {vaccineGroups.slice(2).map((group) => (
                <div
                  key={group.id}
                  id={group.id}
                  className={`bg-gradient-to-br ${group.color} rounded-3xl border ${group.border} p-6 md:p-8 scroll-mt-24`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{group.pet} Vaccine Schedule</h3>
                  </div>
                  <div className="space-y-3">
                    {group.schedule!.map((row, i) => (
                      <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 p-4 flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ background: `linear-gradient(135deg, ${group.accent}, ${group.accent}cc)` }}
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-2 flex-wrap mb-1">
                            <span className="text-sm font-bold text-gray-900">{row.age}</span>
                            <span className="text-xs text-gray-400 font-light">{row.note}</span>
                          </div>
                          <p className="text-sm font-medium text-gray-700">{row.vaccines}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPECIALTY VACCINES ───────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                Specialty Vaccines
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Beyond the basics
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Lifestyle and disease-specific immunisations tailored to your pet&apos;s environment,
                behaviour, and local disease risk in the UAE.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {specialtyVaccines.map((v) => (
                <article key={v.name} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center text-[#c9748f] flex-shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">{v.name}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border uppercase tracking-wide ${v.tagColor}`}>
                        {v.tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── VACCINATION PROCESS ──────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
              <div>
                <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                  The Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                  What happens at your vaccination appointment
                </h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Every vaccination visit at The Pet Dr is thorough, calm, and unhurried — because a vaccine
                  given to a stressed or unwell pet is never the right approach.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-md shadow-pink-50">
                <img
                  src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0122e778d90309c243a24bec0546ca07964ad963.jpg"
                  alt="Veterinarian using stethoscope to examine a West Highland White Terrier before vaccination"
                  width={800}
                  height={533}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

            {/* Step flow */}
            <div className="relative">
              <div aria-hidden="true" className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-pink-100 via-[#c9748f]/40 to-pink-100" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                {process.map((p) => (
                  <div key={p.step} className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#c9748f] to-[#a85570] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-pink-200 mb-4 flex-shrink-0">
                      {p.step}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-tight">{p.title}</h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed max-w-[160px]">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Vaccination questions answered
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
              Keep your pet protected.<br />
              <span className="text-[#c9748f]">Book their vaccination now.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Whether it&apos;s a first puppy visit, an overdue booster, or a health check before travel — our team in Sharjah is ready.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Vaccination Appointment
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
