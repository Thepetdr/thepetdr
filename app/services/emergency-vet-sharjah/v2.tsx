import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Vet in Sharjah | The Pet Dr",
  description:
    "Urgent veterinary care for pets in Sharjah requiring immediate medical attention — critical care, diagnostics, trauma, poisoning, seizures, and emergency treatment.",
  keywords: [
    "Emergency vet Sharjah",
    "Emergency veterinary care UAE",
    "Urgent vet Sharjah",
    "Pet emergency Sharjah",
    "Emergency animal hospital Sharjah",
    "24 hour vet Sharjah",
    "Critical pet care UAE",
    "Dog emergency Sharjah",
    "Cat emergency UAE",
  ],
  alternates: {
    canonical: "https://thepetdr.com/services/emergency-vet-sharjah",
  },
  openGraph: {
    title: "Emergency Vet in Sharjah | The Pet Dr",
    description:
      "Urgent veterinary care for pets in Sharjah. Immediate attention for breathing difficulty, seizures, trauma, poisoning, collapse, and critical conditions.",
    url: "https://thepetdr.com/services/emergency-vet-sharjah",
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
    "Emergency veterinary clinic in Sharjah providing urgent care for pets with critical conditions including trauma, poisoning, seizures, and breathing difficulties.",
  url: "https://thepetdr.com/services/emergency-vet-sharjah",
  areaServed: { "@type": "City", name: "Sharjah" },
  medicalSpecialty: "Veterinary",
  availableService: { "@type": "MedicalProcedure", name: "Emergency Veterinary Care" },
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What counts as a pet emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A pet emergency is any situation where your pet's life, sight, limb, or ability to breathe may be at immediate risk. This includes difficulty breathing, collapse, uncontrolled bleeding, suspected poisoning, seizures, severe trauma, inability to urinate, or extreme pain.",
        },
      },
      {
        "@type": "Question",
        name: "Should I come to the clinic immediately?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If your pet shows any signs of a medical emergency, come to the clinic immediately or call ahead so the team can prepare. Do not wait to see if symptoms improve on their own when a serious condition is suspected.",
        },
      },
      {
        "@type": "Question",
        name: "Do you accept walk-ins for emergencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Emergency walk-in cases are accepted and triaged on arrival. Calling ahead when possible helps the team prepare, but emergencies are never turned away.",
        },
      },
    ],
  },
};

/* ── Data ───────────────────────────────────────────────────── */

const emergencyConditions = [
  {
    title: "Difficulty Breathing",
    description:
      "Open-mouth breathing, blue or pale gums, labored chest movement, or gasping are all signs of a respiratory emergency requiring immediate assessment.",
  },
  {
    title: "Seizures",
    description:
      "A single prolonged seizure or multiple seizures in quick succession require urgent neurological stabilization and monitoring.",
  },
  {
    title: "Trauma",
    description:
      "Road accidents, falls from height, animal attacks, or any significant physical injury — even if your pet appears stable, internal injuries may not be visible.",
  },
  {
    title: "Poisoning",
    description:
      "Ingestion of toxic foods, household chemicals, plants, medications, or pest control products. Time to treatment is critical in poisoning cases.",
  },
  {
    title: "Foreign Body Ingestion",
    description:
      "Swallowing toys, bones, fabric, or other objects that may cause obstruction or internal injury requires urgent imaging and possibly emergency surgery.",
  },
  {
    title: "Collapse",
    description:
      "Sudden inability to stand, extreme weakness, or loss of consciousness can indicate cardiac, neurological, or systemic emergencies.",
  },
  {
    title: "Uncontrolled Bleeding",
    description:
      "External wounds that do not stop bleeding with pressure, or suspected internal bleeding following trauma, require immediate emergency attention.",
  },
];

const careProcess = [
  {
    step: "01",
    title: "Triage",
    text: "On arrival, your pet is assessed immediately to determine the severity of their condition and establish treatment priority.",
  },
  {
    step: "02",
    title: "Stabilization",
    text: "Oxygen support, IV access, fluid therapy, and pain management are initiated as needed to stabilize your pet before further diagnostics.",
  },
  {
    step: "03",
    title: "Diagnostics",
    text: "Blood tests, imaging, urinalysis, and other in-house diagnostics are run rapidly to identify the underlying cause of the emergency.",
  },
  {
    step: "04",
    title: "Treatment",
    text: "Based on findings, the appropriate treatment plan is initiated — which may include medication, emergency surgery, or intensive supportive care.",
  },
  {
    step: "05",
    title: "Monitoring",
    text: "Patients are closely monitored during and after treatment. The team tracks vital signs, response to therapy, and recovery progress.",
  },
];

const faqs = [
  {
    q: "What counts as a pet emergency?",
    a: "A pet emergency is any situation where your pet's life, vision, a limb, or the ability to breathe may be at immediate risk. This includes difficulty breathing, collapse, uncontrolled bleeding, suspected poisoning, seizures, severe trauma, inability to urinate, abdominal pain, or extreme distress. When in doubt, come in — it is always better to have your pet assessed than to wait.",
  },
  {
    q: "Should I come to the clinic immediately?",
    a: "Yes. If your pet shows any signs of a medical emergency, come to the clinic immediately or call ahead so the team can be ready on your arrival. Do not wait to see if symptoms improve on their own when a serious condition is suspected. Early intervention significantly improves outcomes.",
  },
  {
    q: "Do you accept walk-ins for emergencies?",
    a: "Yes. Emergency walk-in cases are accepted and triaged on arrival based on clinical urgency. Calling ahead when possible helps the team prepare for your arrival, but emergency cases are never turned away during clinic hours.",
  },
];

/* ── UI helpers ─────────────────────────────────────────────── */

function UrgentLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#fdf5f3] border border-[#EFBCB0] text-[#E07A9A] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
      {children}
    </span>
  );
}

function Dot({ teal = false }: { teal?: boolean }) {
  return (
    <span
      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px] ${teal ? "bg-[#7ECDC2]" : "bg-[#E07A9A]"}`}
      aria-hidden="true"
    />
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

export default function EmergencyVetPage() {
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
            className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 65%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #b2deda 0%, transparent 65%)" }}
          />

          <div className="max-w-7xl mx-auto px-6 relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-10">
              <Link href="/" className="hover:text-[#E07A9A] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-[#E07A9A] transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Emergency Care</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left */}
              <div>
                <UrgentLabel>Emergency Veterinary Care · Sharjah</UrgentLabel>

                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-5"
                >
                  Emergency Vet{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #E07A9A 0%, #c9748f 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    in Sharjah
                  </span>
                </h1>

                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-xl">
                  Urgent veterinary care for pets requiring immediate medical attention — critical care,
                  diagnostics, trauma management, and emergency treatment in Sharjah.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="tel:+971500000000"
                    className="inline-flex items-center gap-2 bg-[#E07A9A] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.242.88-2.31 2.106-2.466l1.052-.132a2.25 2.25 0 012.19 1.238l.636 1.272a2.25 2.25 0 01-.553 2.762l-.589.463c-.256.202-.285.594-.078.857A16.527 16.527 0 0012 15.13c.263.207.655.178.857-.078l.463-.589a2.25 2.25 0 012.762-.553l1.272.636a2.25 2.25 0 011.238 2.19l-.132 1.052a2.466 2.466 0 01-2.466 2.106C8.163 19.875 4.125 15.837 4.125 10.5A8.25 8.25 0 012.25 6.338z" />
                    </svg>
                    Emergency Call Now
                  </a>
                  <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Emergency
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-pink-100">
                  {[
                    { value: "Urgent", label: "Walk-ins Accepted" },
                    { value: "In-House", label: "Diagnostics" },
                    { value: "Critical", label: "Care Available" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-xl md:text-2xl font-bold text-[#E07A9A]">{s.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="relative pb-8">
                <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-50 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&auto=format&fit=crop&q=80"
                    alt="Veterinary emergency team providing urgent care to a critically ill pet in Sharjah"
                    width={900}
                    height={600}
                    className="w-full h-64 md:h-72 object-cover"
                    priority
                  />
                  <div className="grid grid-cols-3 divide-x divide-pink-100 border-t border-pink-100">
                    {[
                      { label: "Triage", sub: "Immediate" },
                      { label: "Stabilization", sub: "Critical Support" },
                      { label: "Treatment", sub: "Same Visit" },
                    ].map((item) => (
                      <div key={item.label} className="py-4 px-2 text-center">
                        <p className="text-sm font-bold text-gray-900 leading-none mb-0.5">{item.label}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-1 left-6 right-6 flex items-start gap-3 bg-[#fdf5f3] border border-[#EFBCB0] rounded-2xl p-4 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E07A9A" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-xs text-[#c9748f] font-medium leading-relaxed">
                    If your pet is in a life-threatening condition, call ahead so the team can prepare for your arrival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EMERGENCY CONDITIONS ──────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="conditions-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <SectionLabel>Emergency Conditions</SectionLabel>
              <h2 id="conditions-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Conditions that require immediate veterinary attention
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                These are situations where waiting is not safe. If your pet shows any of these signs,
                seek veterinary care immediately rather than monitoring at home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
              {emergencyConditions.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Dot teal={i % 2 !== 0} />
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed pl-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#fdf5f3] border border-[#EFBCB0] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <p className="text-base font-bold text-gray-900 mb-1">When in doubt, come in.</p>
                <p className="text-sm text-gray-500 font-light leading-relaxed max-w-prose">
                  It is always better to have your pet seen and reassured than to wait while a serious condition worsens.
                  Emergency cases are triaged on arrival and treated by urgency.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="tel:+971500000000"
                  className="inline-flex items-center gap-2 bg-[#E07A9A] hover:bg-[#c9748f] text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-pink-200"
                >
                  Call Now
                  <ChevronRight />
                </a>
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-[#EFBCB0] text-[#E07A9A] px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#fdf5f3] transition-all duration-200"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── EMERGENCY CARE PROCESS ───────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <SectionLabel>Emergency Care Process</SectionLabel>
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                What happens when you arrive with an emergency
              </h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-prose">
                Emergency cases follow a structured clinical pathway designed to assess and stabilize
                your pet as quickly and safely as possible from the moment you arrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
              {careProcess.map((item, i) => (
                <div key={item.step} className="bg-white border border-gray-100 rounded-3xl p-6">
                  <p
                    className="text-5xl font-black tracking-tight mb-4 leading-none"
                    style={{
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #f3c4d0 0%, #E07A9A 100%)"
                        : "linear-gradient(135deg, #b2deda 0%, #7ECDC2 100%)",
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

        {/* ── WHY IMMEDIATE CARE MATTERS ───────────────────────── */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-50 aspect-[5/4]">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&auto=format&fit=crop&q=80"
                alt="Emergency veterinarian stabilizing a critically ill dog with IV fluids and monitoring"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionLabel>Why Immediate Care Matters</SectionLabel>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                In emergencies, minutes have a direct impact on outcomes
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-prose">
                Many veterinary emergencies are time-sensitive. Conditions such as airway obstruction,
                internal bleeding, severe poisoning, pyometra, and urinary obstruction can deteriorate
                rapidly without medical intervention. Early triage, rapid diagnostics, and prompt
                stabilization significantly improve the chances of recovery.
              </p>
              <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-prose">
                Pets also hide pain and distress very effectively. By the time obvious symptoms appear,
                the underlying condition may already be advanced. Erring on the side of caution and
                seeking assessment early is always the safer choice.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Faster stabilization", text: "Early IV access and fluid support prevents deterioration.", teal: false },
                  { title: "Rapid diagnostics", text: "In-house blood tests and imaging confirm the cause quickly.", teal: true },
                  { title: "Pain relief", text: "Prompt pain management reduces suffering and secondary stress.", teal: true },
                  { title: "Better recovery", text: "Early intervention is consistently associated with better outcomes.", teal: false },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl p-4 border ${
                      item.teal
                        ? "bg-[#e8f8f7] border-[#c8ecea]"
                        : "bg-[#fdf5f3] border-[#EFBCB0]"
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mb-3 ${item.teal ? "bg-[#7ECDC2]" : "bg-[#E07A9A]"}`} />
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70" id="faq" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Emergency care questions answered
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E07A9A] mb-4">Emergency Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Is your pet having
              <br />
              <span className="text-[#E07A9A]">an emergency right now?</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Do not wait. Call the clinic or send a WhatsApp message immediately. The Pet Dr team
              in Sharjah is ready to receive and triage emergency cases.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+971500000000"
                className="inline-flex items-center gap-2 bg-[#E07A9A] hover:bg-[#c9748f] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.242.88-2.31 2.106-2.466l1.052-.132a2.25 2.25 0 012.19 1.238l.636 1.272a2.25 2.25 0 01-.553 2.762l-.589.463c-.256.202-.285.594-.078.857A16.527 16.527 0 0012 15.13c.263.207.655.178.857-.078l.463-.589a2.25 2.25 0 012.762-.553l1.272.636a2.25 2.25 0 011.238 2.19l-.132 1.052a2.466 2.466 0 01-2.466 2.106C8.163 19.875 4.125 15.837 4.125 10.5A8.25 8.25 0 012.25 6.338z" />
                </svg>
                Emergency Call Now
              </a>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Emergency
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-200"
              >
                Clinic Location
                <ChevronRight />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}