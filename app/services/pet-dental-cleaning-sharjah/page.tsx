import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Veterinary Dental Care in Sharjah | The Pet Dr",
  description:
    "Professional pet dental cleaning, oral exams, extractions, dental X-rays, and gum disease treatment for dogs and cats in Sharjah. Safe anesthesia-supported dental care at The Pet Dr.",
  keywords: [
    "Pet dental cleaning Sharjah",
    "Veterinary dental care UAE",
    "Dog teeth cleaning Sharjah",
    "Cat dental cleaning UAE",
    "Pet dental scaling Sharjah",
    "Tooth extraction dog UAE",
    "Gum disease treatment pets",
    "Pet oral exam Sharjah",
    "Pet dental X-ray UAE",
    "Bad breath dog Sharjah",
  ],
  alternates: {
    canonical: "https://thepetdr.com/pet-dental-cleaning-sharjah",
  },
  openGraph: {
    title: "Veterinary Dental Care in Sharjah | The Pet Dr",
    description:
      "Professional pet dental cleaning, extractions, X-rays, and gum disease treatment for dogs and cats in Sharjah.",
    url: "https://thepetdr.com/pet-dental-cleaning-sharjah",
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
    "Veterinary dental care in Sharjah including professional dental cleaning, oral exams, extractions, dental X-rays, and gum disease treatment.",
  url: "https://thepetdr.com/pet-dental-cleaning-sharjah",
  areaServed: { "@type": "City", name: "Sharjah" },
  medicalSpecialty: "Veterinary",
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is bad breath normal in pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mild odor can be normal, but persistent or strong bad breath in dogs or cats is usually a sign of plaque build-up, tartar, gum disease, or infection. It should be assessed by a veterinarian.",
        },
      },
      {
        "@type": "Question",
        name: "How often should pets get a dental cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most dogs and cats benefit from a professional dental cleaning at least once a year. Some breeds or animals with faster tartar build-up may need cleaning more frequently. Your vet can advise based on your pet's specific oral health.",
        },
      },
      {
        "@type": "Question",
        name: "Does dental cleaning require anesthesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Veterinary dental cleaning is performed under general anesthesia to allow safe, thorough cleaning above and below the gum line, dental X-rays, and examination of every tooth without causing stress or discomfort to the pet.",
        },
      },
    ],
  },
};

/* ── Data ───────────────────────────────────────────────────── */

const dentalServices = [
  {
    title: "Dental Cleaning",
    description:
      "Professional scaling and polishing to remove plaque and tartar above and below the gum line, followed by polishing to reduce future build-up.",
  },
  {
    title: "Oral Exams",
    description:
      "Thorough examination of your pet's teeth, gums, tongue, and oral cavity to identify early signs of dental disease, infection, or structural problems.",
  },
  {
    title: "Extractions",
    description:
      "Safe removal of fractured, infected, or non-viable teeth that cannot be saved, performed under general anesthesia with appropriate pain management.",
  },
  {
    title: "Dental X-rays",
    description:
      "Radiographic imaging of tooth roots and surrounding bone to detect disease that is not visible during a surface examination alone.",
  },
  {
    title: "Gum Disease Treatment",
    description:
      "Assessment and treatment of periodontal disease including deep cleaning below the gum line, infection management, and ongoing monitoring.",
  },
];

const signsOfDisease = [
  {
    sign: "Bad breath",
    detail:
      "Persistent or strong odor from the mouth is one of the most common early signs of dental disease or infection.",
  },
  {
    sign: "Difficulty eating",
    detail:
      "Dropping food, chewing on one side, or reluctance to eat hard food can indicate tooth pain, fractures, or gum inflammation.",
  },
  {
    sign: "Red or swollen gums",
    detail:
      "Healthy gums should be pale pink. Redness, swelling, or bleeding along the gum line suggests gingivitis or periodontal disease.",
  },
  {
    sign: "Excessive drooling",
    detail:
      "Sudden increase in drooling, especially if combined with pawing at the mouth, may indicate oral pain or a dental abscess.",
  },
  {
    sign: "Loose or missing teeth",
    detail:
      "Adult teeth should be firmly anchored. Loose teeth in adult pets are a sign of advanced periodontal disease and require prompt assessment.",
  },
];

const procedureSteps = [
  {
    step: "01",
    title: "Oral Examination",
    text: "A full oral exam is performed to assess the condition of teeth, gums, and surrounding structures and to plan the procedure.",
  },
  {
    step: "02",
    title: "Pre-anesthetic Assessment",
    text: "Blood tests are run before anesthesia to evaluate kidney and liver function, confirm the pet is safe to proceed, and tailor the anesthetic plan.",
  },
  {
    step: "03",
    title: "Dental Cleaning",
    text: "Under general anesthesia, scaling removes tartar and plaque above and below the gum line using hand and ultrasonic instruments. Teeth are then polished.",
  },
  {
    step: "04",
    title: "Treatment",
    text: "Dental X-rays are taken to assess root and bone health. Extractions, gum treatment, or other necessary procedures are carried out at this stage.",
  },
  {
    step: "05",
    title: "Recovery",
    text: "Your pet is closely monitored as they wake from anesthesia. Pain management is provided and home care instructions are given before discharge.",
  },
];

const faqs = [
  {
    q: "Is bad breath normal in pets?",
    a: "Mild odor can be normal, but persistent or strong bad breath in dogs or cats is usually a sign of plaque build-up, tartar, gum disease, or oral infection. It should be assessed by a veterinarian rather than managed with treats or toothpaste alone.",
  },
  {
    q: "How often should pets get a dental cleaning?",
    a: "Most dogs and cats benefit from a professional dental cleaning at least once a year. Some breeds or animals with faster plaque and tartar accumulation may need cleaning more frequently. Your vet will advise based on your pet's specific oral health condition and history.",
  },
  {
    q: "Does dental cleaning require anesthesia?",
    a: "Yes. Professional veterinary dental cleaning is performed under general anesthesia. This allows safe, thorough cleaning above and below the gum line, dental X-rays of every tooth, and full examination without causing pain, stress, or risk of injury to the pet.",
  },
];

/* ── Shared UI ──────────────────────────────────────────────── */

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

export default function PetDentalPage() {
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
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-10">
              <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-[#c9748f] transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Dental Care</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <SectionLabel>Veterinary Dental Care · Sharjah</SectionLabel>

                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-5"
                >
                  Veterinary Dental Care{" "}
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
                  Professional pet dental care designed to support healthier teeth, gums, and overall long-term health
                  for dogs and cats in Sharjah.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Dental Appointment
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

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-pink-100">
                  {[
                    { value: "Scaling", label: "& Polishing" },
                    { value: "Dental", label: "X-rays" },
                    { value: "Safe", label: "Anesthesia" },
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
                    src="https://picsum.photos/seed/pet-dental-cleaning-sharjah/900/600"
                    alt="Veterinarian performing a professional dental cleaning on a dog under anesthesia"
                    width={900}
                    height={600}
                    className="w-full h-64 md:h-72 object-cover"
                    priority
                  />
                  <div className="grid grid-cols-3 divide-x divide-pink-100 border-t border-pink-100">
                    {[
                      { label: "Cleaning", sub: "Scaling & Polish" },
                      { label: "X-rays", sub: "Root Assessment" },
                      { label: "Extractions", sub: "When Needed" },
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
                    All dental procedures are performed under general anesthesia with pre-anesthetic bloodwork, monitoring, and pain management throughout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DENTAL SERVICES ──────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
              <div>
                <SectionLabel>Dental Services</SectionLabel>
                <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
                  Comprehensive veterinary dental services for dogs and cats
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-prose">
                  Dental disease is one of the most common health issues in pets, and most cases go undetected
                  until symptoms become significant. Regular professional care protects not just your pet's mouth,
                  but their overall systemic health.
                </p>
                <div className="flex flex-wrap gap-2">
                  <SeoTag label="Pet dental cleaning Sharjah" />
                  <SeoTag label="Dog teeth scaling UAE" />
                  <SeoTag label="Cat oral exam Sharjah" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {dentalServices.map((service) => (
                  <div
                    key={service.title}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Dot />
                      <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 font-light leading-relaxed pl-4">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SIGNS OF DENTAL DISEASE ──────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" aria-labelledby="signs-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50 aspect-[5/4]">
              <Image
                src="https://picsum.photos/seed/dog-dental-exam-vet/900/720"
                alt="Veterinarian examining a dog's teeth and gums for signs of dental disease"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionLabel>Signs of Dental Disease</SectionLabel>
              <h2 id="signs-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Signs that your pet may need a dental assessment
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Pets rarely show obvious signs of tooth pain, which means dental disease often progresses
                silently. These are the most common indicators that an oral examination is needed.
              </p>
              <div className="space-y-4">
                {signsOfDisease.map((item) => (
                  <div
                    key={item.sign}
                    className="bg-white border border-gray-100 rounded-2xl p-5"
                  >
                    <div className="flex items-start gap-3 mb-1">
                      <Dot />
                      <p className="text-sm font-bold text-gray-900">{item.sign}</p>
                    </div>
                    <p className="text-sm text-gray-500 font-light leading-relaxed pl-4">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCEDURE PROCESS ────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <SectionLabel>The Dental Procedure</SectionLabel>
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                What to expect during your pet's dental visit
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Every dental appointment follows a structured process to ensure your pet's safety and comfort
                from the initial assessment through to discharge and recovery at home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
              {procedureSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-[#fdf8f9] border border-pink-100 rounded-3xl p-6 relative"
                >
                  <p
                    className="text-5xl font-black tracking-tight mb-4 leading-none"
                    style={{
                      background: "linear-gradient(135deg, #f3c4d0 0%, #e8a0b4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.step}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY DENTAL HEALTH MATTERS ────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Why Dental Health Matters</SectionLabel>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Oral health affects your pet's overall health
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-prose">
                Untreated dental disease does not stay in the mouth. Bacteria from infected gums can enter
                the bloodstream and affect the heart, kidneys, and liver over time. Regular dental care is
                a direct investment in your pet's long-term systemic health, not just their smile.
              </p>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Studies suggest that by the age of three, the majority of dogs and cats show early signs
                of periodontal disease. Most cases are preventable or manageable with regular professional
                cleaning and monitoring.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Prevents tooth loss", text: "Early treatment preserves teeth that would otherwise need extraction." },
                  { title: "Reduces systemic risk", text: "Oral bacteria linked to heart and kidney disease in pets." },
                  { title: "Eliminates pain", text: "Dental disease is painful. Most pets hide it very well." },
                  { title: "Improves appetite", text: "Pets eat better and more comfortably after dental treatment." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-4">
                    <div className="w-2 h-2 rounded-full bg-[#c9748f] mb-3" />
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50 aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/cat-dental-health-vet/900/700"
                alt="Cat receiving a dental health examination at a veterinary clinic in Sharjah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── FAQS ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white" id="faq" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Dental care questions answered
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c9748f] mb-4">Book Today</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Ready to book a dental
              <br />
              <span className="text-[#c9748f]">appointment for your pet?</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              The Pet Dr offers professional veterinary dental care for dogs and cats in Sharjah — including
              cleaning, oral exams, dental X-rays, extractions, and gum disease treatment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Dental Appointment
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
            </div>
          </div>
        </section>

      </main>
    </>
  );
}