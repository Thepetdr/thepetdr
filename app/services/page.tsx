import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore PawCare's complete range of premium pet care services in Dubai — expert veterinary care, luxury grooming, holistic wellness, pet shop, and dog park & pools.",
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "veterinary-care",
    title: "Veterinary Care",
    tagline: "Expert medical care, every visit.",
    description:
      "Our team of board-certified veterinarians offers comprehensive medical services for dogs, cats, rabbits, birds, and exotic pets. From routine wellness check-ups to complex surgeries, every visit is handled with precision and compassion.",
    features: [
      "Annual wellness exams & vaccinations",
      "Diagnostic imaging (X-ray, ultrasound)",
      "Surgical procedures & post-op care",
      "Dental cleanings & oral health assessments",
      "Emergency & urgent care",
      "Senior pet health programmes",
    ],
    highlight: "Open 7 days · Same-day appointments available",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    accentColor: "from-rose-50 to-pink-50",
    borderColor: "border-rose-100",
    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    id: "grooming-salon",
    title: "Grooming Salon",
    tagline: "Luxury grooming for every breed.",
    description:
      "Our certified groomers treat your pet to a spa-quality experience using premium, pet-safe products. Whether it's a simple bath and trim or a full breed-standard groom, your pet leaves looking — and feeling — their absolute best.",
    features: [
      "Full groom: bath, blow-dry, cut & style",
      "Breed-specific haircuts",
      "De-shedding & de-matting treatments",
      "Nail trimming & paw care",
      "Ear cleaning & teeth brushing",
      "Aromatherapy & conditioning treatments",
    ],
    highlight: "Walk-ins welcome · Express slots available",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    accentColor: "from-purple-50 to-violet-50",
    borderColor: "border-purple-100",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "pet-shop",
    title: "Pet Shop",
    tagline: "Premium supplies, nutrition & accessories.",
    description:
      "Browse our curated selection of vet-recommended food, treats, toys, beds, and accessories. Our in-store team helps you find the perfect products for your pet's breed, age, and health needs — no generic shelf-filling here.",
    features: [
      "Vet-approved premium food & raw diets",
      "Breed & life-stage specific nutrition",
      "Toys, enrichment & puzzle feeders",
      "Bedding, carriers & travel gear",
      "Supplements & health products",
      "Custom gift hampers for pets",
    ],
    highlight: "In-store & online · Same-day Dubai delivery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    accentColor: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-100",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: "dog-park",
    title: "Dog Park & Pools",
    tagline: "Safe, social outdoor play for every dog.",
    description:
      "Our climate-controlled outdoor park and hydrotherapy pools give dogs the space, safety, and stimulation they need. Supervised play sessions, separate zones for small and large breeds, and certified trainers on hand make this Dubai's finest dog socialisation venue.",
    features: [
      "Separate small & large breed zones",
      "Heated & cooled hydrotherapy pools",
      "Agility courses & training equipment",
      "Supervised socialisation sessions",
      "Professional trainers on-site daily",
      "Day-stay & half-day packages",
    ],
    highlight: "Memberships available · Group & private sessions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    accentColor: "from-sky-50 to-blue-50",
    borderColor: "border-sky-100",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    id: "holistic-regimens",
    title: "Holistic Regimens",
    tagline: "Whole-body wellness, naturally.",
    description:
      "True health goes beyond treating symptoms. Our integrative wellness programmes combine conventional veterinary medicine with evidence-based holistic therapies — helping your pet thrive in body, mind, and spirit.",
    features: [
      "Acupuncture & physiotherapy",
      "Hydrotherapy & aquatic rehabilitation",
      "Nutritional counselling & custom diets",
      "Anxiety & behavioural wellness plans",
      "Herbal & supplement consultations",
      "Post-surgery rehabilitation programmes",
    ],
    highlight: "Personalised plans · Ongoing wellness tracking",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    accentColor: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-100",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

const faqs = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Veterinary and grooming services are appointment-based, though we accommodate walk-ins when slots are available. The Pet Shop and Dog Park are open access during operating hours.",
  },
  {
    q: "What pets do you treat at the clinic?",
    a: "We care for dogs, cats, rabbits, guinea pigs, birds, and a range of exotic and small mammals. Contact us if you're unsure whether we can help with your specific pet.",
  },
  {
    q: "How long does a grooming session take?",
    a: "A standard full groom takes 2–4 hours depending on breed and coat condition. Express sessions are available for dogs requiring a quick bath and blow-dry only.",
  },
  {
    q: "Are the Dog Park pools heated?",
    a: "Yes — our hydrotherapy pools are temperature-controlled year-round, making them comfortable and safe in both Dubai's summers and cooler winter months.",
  },
  {
    q: "How do I book a holistic wellness consultation?",
    a: "Holistic regimens begin with a 60-minute assessment with our integrative vet. You can book this via WhatsApp, our booking form, or by calling the clinic directly.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`py-16 md:py-24 ${isEven ? "bg-white" : "bg-gray-50/70"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
            !isEven ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest ${service.tagColor}`}
              >
                {service.icon}
                <span>{service.title}</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-4">
              {service.tagline}
            </h2>

            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8 max-w-xl">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#c9748f]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c9748f"
                      strokeWidth={2.5}
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Highlight pill */}
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              {service.highlight}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book {service.title}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Visual Card */}
          <div className={`bg-gradient-to-br ${service.accentColor} rounded-3xl border ${service.borderColor} p-8 lg:p-10`}>
            {/* Large icon */}
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-[#c9748f]">
              <div className="scale-150">{service.icon}</div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Happy Clients", value: "2,400+" },
                { label: "Avg. Rating", value: "4.9 ★" },
                { label: "Years in Dubai", value: "8+" },
                { label: "Certified Staff", value: "12" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-4 border border-white/80"
                >
                  <p className="text-2xl font-bold text-gray-900 leading-none mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial snippet */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white/80">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="#f59e0b" className="w-4 h-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-light italic">
                &ldquo;The team at PawCare treated my golden retriever with such care and
                professionalism. We wouldn&apos;t go anywhere else in Dubai.&rdquo;
              </p>
              <p className="text-xs text-gray-400 font-medium mt-2">— PawCare client, Dubai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        {/* Soft radial bg */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none -translate-y-1/4 translate-x-1/4"
          style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none translate-y-1/4 -translate-x-1/4"
          style={{ background: "radial-gradient(circle, #c9748f 0%, transparent 65%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600">Services</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest shadow-sm">
              Everything Under One Roof
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Care that covers{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                every need.
              </span>
            </h1>

            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-10">
              From first vaccinations to senior wellness plans, luxury grooming to hydrotherapy
              pools — PawCare is Dubai&apos;s most complete pet care destination.
            </p>

            {/* Quick jump links */}
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:border-pink-200 hover:text-[#c9748f] transition-all duration-200"
                >
                  <span className="text-[#c9748f]">{s.icon}</span>
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              FAQs
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Common questions
            </h2>
          </div>

          <div className="space-y-4">
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

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c9748f] mb-4">
            Ready to book?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
            Your pet deserves the best.<br />
            <span className="text-[#c9748f]">We&apos;re here to deliver it.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Book an appointment in seconds and receive confirmation directly on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-pink-900/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book an Appointment
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}