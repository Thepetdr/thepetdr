import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preventive Pet Care in Sharjah | Annual Wellness Exams | The Pet Dr",
  description:
    "Comprehensive preventive pet care in Sharjah — annual wellness exams, vaccinations, dental checks, parasite prevention & senior pet health programmes. Book at The Pet Dr.",
  keywords: [
    "Preventive Pet Care Sharjah",
    "Annual Pet Wellness Exam Sharjah",
    "Pet Health Check Sharjah",
    "Dog Wellness Check Sharjah",
    "Cat Health Exam Sharjah",
    "Senior Pet Care Sharjah",
    "Pet Dental Check Sharjah",
    "Parasite Prevention Sharjah",
    "The Pet Dr Sharjah",
  ],
  alternates: { canonical: "https://thepetdr.com/preventive-pet-care-sharjah" },
  openGraph: {
    title: "Preventive Pet Care in Sharjah | The Pet Dr",
    description:
      "Annual wellness exams, vaccinations, dental care & parasite prevention for dogs and cats in Sharjah. Expert vet care at The Pet Dr.",
    url: "https://thepetdr.com/preventive-pet-care-sharjah",
    siteName: "The Pet Dr",
    locale: "en_AE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "The Pet Dr",
  description: "Preventive pet care clinic in Sharjah offering wellness exams, vaccinations, dental care, and parasite prevention for dogs and cats.",
  url: "https://thepetdr.com/preventive-pet-care-sharjah",
  areaServed: { "@type": "City", name: "Sharjah" },
  medicalSpecialty: "Veterinary",
  mainEntityOfPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should my pet have a wellness exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adult dogs and cats should have a wellness exam at least once a year. Senior pets (7+ years) benefit from bi-annual check-ups to catch age-related conditions early.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in a preventive care visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A preventive care visit at The Pet Dr includes a full physical examination, weight and nutrition assessment, vaccination review, parasite screening, dental evaluation, and a tailored health plan.",
        },
      },
      {
        "@type": "Question",
        name: "Does my indoor pet need preventive care?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Indoor pets are still exposed to airborne pathogens, stress-related immune changes, and age-related disease. Regular wellness exams catch issues before they become serious — regardless of lifestyle.",
        },
      },
      {
        "@type": "Question",
        name: "At what age should a puppy or kitten have their first wellness visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppies and kittens should have their first wellness visit at 6–8 weeks of age to begin vaccinations, parasite prevention, and nutritional guidance.",
        },
      },
    ],
  },
};

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: "Annual Wellness Exam",
    description: "Full nose-to-tail physical assessment covering weight, coat, eyes, ears, heart, lungs, abdomen, joints, and lymph nodes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Vaccination Review & Updates",
    description: "Core and lifestyle vaccine status checked and updated based on UAE protocols and your pet's individual risk profile.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Dental Health Assessment",
    description: "Oral cavity evaluation for tartar, gingivitis, fractured teeth, and early periodontal disease — the most overlooked aspect of pet health.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015H9.375V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015H14.625V9.75z" />
      </svg>
    ),
    title: "Parasite Screening & Prevention",
    description: "Flea, tick, heartworm, and intestinal parasite screening with tailored monthly prevention plans for Sharjah's climate.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Nutrition & Weight Management",
    description: "Body condition scoring and breed-specific dietary guidance — maintaining a healthy weight is one of the highest-impact preventive interventions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Early Disease Screening",
    description: "Blood panels, urinalysis, and organ function tests that surface hidden conditions before clinical symptoms appear.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "Senior Pet Health Programme",
    description: "Bi-annual exams, cognitive assessment, joint health, and organ screening for pets aged 7 and above.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    title: "Microchipping & ID",
    description: "Permanent ISO microchip implantation and UAE pet passport/registration — required for travel and legally recommended in Sharjah.",
  },
];

const whyUs = [
  {
    title: "UAE-Registered Veterinarians",
    desc: "All vets are licensed with the Ministry of Climate Change & Environment and have subspecialty training.",
  },
  {
    title: "Same-Day Appointments",
    desc: "We know pet health worries don't wait. Book online or walk in — we'll see you today.",
  },
  {
    title: "Breed-Specific Protocols",
    desc: "Preventive care is not one-size-fits-all. We tailor every plan to your pet's breed, age, weight, and lifestyle.",
  },
  {
    title: "Digital Health Records",
    desc: "All records available on your phone via WhatsApp summary after every visit — vaccine reminders included.",
  },
];

const faqs = [
  {
    q: "How often should my pet have a wellness exam?",
    a: "Adult dogs and cats should have a wellness exam at least once a year. Senior pets (7+ years) benefit from bi-annual check-ups to catch age-related conditions early.",
  },
  {
    q: "What is included in a preventive care visit?",
    a: "A preventive care visit includes a full physical examination, weight and nutrition assessment, vaccination review, parasite screening, dental evaluation, and a tailored health plan.",
  },
  {
    q: "Does my indoor pet need preventive care?",
    a: "Yes. Indoor pets are still exposed to airborne pathogens, stress-related immune changes, and age-related disease. Regular wellness exams catch issues before they become serious.",
  },
  {
    q: "At what age should a puppy or kitten have their first wellness visit?",
    a: "Puppies and kittens should have their first wellness visit at 6–8 weeks of age to begin vaccinations, parasite prevention, and nutritional guidance.",
  },
  {
    q: "How much does a preventive care visit cost?",
    a: "Consultation fees vary based on the services included. Contact us via WhatsApp or call the clinic for a transparent breakdown — we never charge hidden fees.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PreventivePetCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-20 bg-white">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-white py-16 md:py-24">
          {/* Soft radial accent */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none -translate-y-1/3 translate-x-1/3"
            style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 65%)" }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-8">
              <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/services" className="hover:text-[#c9748f] transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Preventive Pet Care</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Copy */}
              <div>
                <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest shadow-sm">
                  Preventive Pet Care · Sharjah
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
                  Catch problems before{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    they catch your pet.
                  </span>
                </h1>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8 max-w-xl">
                  Most serious conditions in dogs and cats show no symptoms until they&apos;re advanced.
                  A preventive care visit at The Pet Dr gives you the early warning that changes outcomes
                  — and keeps your pet healthier for longer.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "UAE-Licensed Vets",
                    "Same-Day Appointments",
                    "All Breeds & Ages",
                    "Digital Health Records",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="#c9748f" strokeWidth={2.5} className="w-3 h-3" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book a Wellness Exam
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                  >
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Ask on WhatsApp
                  </a>
                </div>
              </div>

              {/* Hero Image Card */}
              <div className="relative">
                <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-50 overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://picsum.photos/seed/vet-dog-exam/900/600"
                      alt="Veterinarian gently examining a dog during a wellness check at The Pet Dr Sharjah"
                      width={900}
                      height={600}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Stats strip */}
                  <div className="grid grid-cols-3 divide-x divide-pink-100 border-t border-pink-100">
                    {[
                      { value: "2,400+", label: "Pets Examined" },
                      { value: "8+ yrs", label: "In Sharjah" },
                      { value: "4.9 ★", label: "Avg. Rating" },
                    ].map((s) => (
                      <div key={s.label} className="py-4 px-3 text-center">
                        <p className="text-xl font-bold text-gray-900 leading-none mb-0.5">{s.value}</p>
                        <p className="text-[11px] text-gray-400 font-medium">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white border border-pink-100 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">Open Today · Walk-ins Welcome</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY IT MATTERS ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Left: Image with stats overlay */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/vet-cat-checkup/600/700"
                  alt="Veterinarian examining a cat during a preventive care consultation in Sharjah"
                  width={600}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[480px] object-cover rounded-3xl"
                />
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                  {[
                    { value: "3×", label: "More likely to catch disease early" },
                    { value: "60%", label: "Show no symptoms early on" },
                    { value: "2–5×", label: "Lower cost when caught early" },
                    { value: "2 yrs", label: "Avg lifespan increase" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl border border-pink-100 px-4 py-3"
                    >
                      <p className="text-xl font-bold text-[#c9748f] leading-none mb-0.5">{stat.value}</p>
                      <p className="text-[10px] text-gray-500 font-medium leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Copy */}
              <div>
                <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                  Why It Matters
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-5">
                  Most diseases are silent until it&apos;s too late.
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-6 max-w-lg">
                  Kidney disease, diabetes, heart conditions, and early-stage cancers in pets rarely show
                  visible symptoms until they&apos;re well advanced. By the time your dog or cat seems unwell,
                  the window for the easiest — and most affordable — treatment has often closed.
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-lg">
                  Annual wellness exams at The Pet Dr are designed to find these problems in their earliest,
                  most treatable stages — through structured physical assessment, targeted bloodwork, and
                  a vet who knows your pet&apos;s history year over year.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Puppies & Kittens", desc: "Vaccination series, deworming, early socialisation and developmental screening from 6 weeks." },
                    { title: "Adult Pets (1–7 years)", desc: "Annual full-body exam, parasite prevention, dental assessment and weight management." },
                    { title: "Senior Pets (7+ years)", desc: "Bi-annual visits, organ function panels, joint health, cognitive and mobility assessment." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-[#c9748f] flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</p>
                        <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES INCLUDED ────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                What&apos;s Covered
              </span>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Everything in a preventive visit
              </h2>
              <p className="text-gray-500 font-light max-w-xl mx-auto">
                A single appointment covers more than most owners expect.
              </p>
            </div>

            {/* Full-width image banner */}
            <div className="mb-10 rounded-3xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/vet-pets-banner/1200/400"
                alt="A dog and cat at the vet — preventive care at every life stage at The Pet Dr Sharjah"
                width={1200}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-52 md:h-64 object-cover"
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-gray-50/80 rounded-2xl border border-gray-100 p-5 hover:bg-white hover:shadow-md hover:border-pink-100 transition-all duration-300"
                >
                  <div className="text-[#c9748f] mb-3">{service.icon}</div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{service.title}</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Copy */}
              <div>
                <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                  Your Visit
                </span>
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
                  What to expect on the day
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-lg">
                  A wellness exam at The Pet Dr takes 30–45 minutes. Here&apos;s exactly what happens from
                  arrival to WhatsApp summary.
                </p>

                <ol className="space-y-5">
                  {[
                    { step: "01", title: "Arrival & History", desc: "Brief intake form on your pet's diet, activity, behaviour changes, and current medications." },
                    { step: "02", title: "Physical Examination", desc: "Nose-to-tail assessment: body weight, body condition score, eyes, ears, mouth, lymph nodes, heart, lungs, abdomen, skin, and coat." },
                    { step: "03", title: "Vaccination & Parasite Review", desc: "Current status checked against UAE protocols. Any due vaccines administered, parasite prevention updated." },
                    { step: "04", title: "Lab Work (if recommended)", desc: "Blood panel, urinalysis, or faecal screen if age or findings warrant early disease screening." },
                    { step: "05", title: "Personalised Health Plan", desc: "Tailored recommendations for diet, activity, dental care, and next scheduled visit." },
                    { step: "06", title: "WhatsApp Summary", desc: "Digital summary of findings, vaccine record, and reminders sent directly to your phone." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <span className="w-9 h-9 rounded-full bg-[#c9748f]/10 text-[#c9748f] text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</p>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Right: Image stack */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/vet-puppy-exam/800/450"
                    alt="Veterinarian at The Pet Dr Sharjah performing a full physical examination on a puppy"
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://picsum.photos/seed/vet-cat-dental/400/300"
                      alt="Dental assessment during a cat wellness exam at The Pet Dr"
                      width={400}
                      height={300}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-36 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://picsum.photos/seed/vet-senior-dog/400/300"
                      alt="Senior dog health check at The Pet Dr Sharjah"
                      width={400}
                      height={300}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-36 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE THE PET DR ────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left */}
              <div>
                <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                  Why The Pet Dr
                </span>
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
                  Sharjah&apos;s most trusted preventive care clinic.
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-lg">
                  Eight years, 2,400+ patients, and a 4.9-star rating built on one principle: prevention
                  is the most powerful medicine a vet can offer. Here&apos;s what sets us apart.
                </p>

                <div className="space-y-4">
                  {whyUs.map((item) => (
                    <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-pink-100 hover:bg-pink-50/20 transition-all duration-200">
                      <span className="w-2 h-2 rounded-full bg-[#c9748f] flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: image + testimonial */}
              <div>
                <div className="rounded-3xl overflow-hidden mb-5">
                  <img
                    src="https://picsum.photos/seed/vet-team-sharjah/800/500"
                    alt="The Pet Dr veterinary team with a pet patient in the Sharjah clinic"
                    width={800}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Testimonial card */}
                <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="#f59e0b" className="w-4 h-4" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-light italic mb-3">
                    &ldquo;The Pet Dr caught early-stage kidney disease in my 9-year-old Labrador during a routine
                    wellness exam. Without that visit, we would never have known until it was too late.
                    He&apos;s now thriving on a tailored diet and doing incredibly well. I can&apos;t recommend them enough.&rdquo;
                  </p>
                  <p className="text-xs text-gray-400 font-medium">— Verified client, Sharjah · Labrador owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50/70">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                FAQs
              </span>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                Common questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-gray-100 rounded-2xl bg-white hover:bg-gray-50/50 transition-colors duration-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
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
                  <div className="px-6 pb-5 text-sm text-gray-500 font-light leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c9748f] mb-4">
              Book Today
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Prevention costs less than treatment.<br />
              <span className="text-[#c9748f]">Always.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Schedule a preventive wellness exam at The Pet Dr Sharjah. Same-day appointments available.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Wellness Exam
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
