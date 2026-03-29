"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  { title: "Routine Check-ups", desc: "Regular wellness exams to catch health issues early and keep your pet in peak condition year-round." },
  { title: "Vaccinations", desc: "Core and lifestyle-based vaccine programs tailored to your pet's age, breed, and exposure risk." },
  { title: "Surgical Procedures", desc: "A fully equipped surgical suite staffed by experienced vets for both routine and complex procedures." },
  { title: "Diagnostics", desc: "In-house blood panels, X-rays, and ultrasound for fast, accurate diagnoses without long waits." },
  { title: "Dental Care", desc: "Professional dental cleanings and oral health assessments to prevent painful dental disease." },
  { title: "Emergency Care", desc: "Urgent care support available for sudden illness or injury when your pet needs help fast." },
];

const processSteps = [
  { step: "01", title: "Book Your Appointment", desc: "Call us or book online to secure your preferred date and time with one of our vets." },
  { step: "02", title: "Arrive & Check In", desc: "Our front desk team will check you in and gather a brief health history for your pet." },
  { step: "03", title: "Consultation & Examination", desc: "Your vet will conduct a thorough physical exam and discuss any concerns with you directly." },
  { step: "04", title: "Treatment & Follow-up", desc: "We'll administer any required treatments and provide a detailed care plan for follow-up." },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop&q=80", alt: "Vet with dog" },
  { src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=80", alt: "Vet examining cat" },
  { src: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=800&auto=format&fit=crop&q=80", alt: "Veterinary clinic" },
  { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80", alt: "Vet team" },
];

const faqs = [
  { question: "How often should my pet have a check-up?", answer: "We recommend annual wellness exams for healthy adult pets, and bi-annual visits for senior pets (7+ years) or those with ongoing health conditions." },
  { question: "What vaccinations does my dog or cat need?", answer: "Core vaccines include rabies and distemper combinations. Additional vaccines depend on your pet's lifestyle and risk factors, which we assess during the consultation." },
  { question: "Do you offer payment plans for surgical procedures?", answer: "Yes, we work with several pet health financing partners and can discuss flexible payment options during your visit." },
  { question: "How do I prepare my pet for surgery?", answer: "We'll provide detailed pre-surgical instructions at your pre-op appointment, including fasting guidelines and any medication adjustments needed." },
];

export default function VeterinaryCarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/#services" className="hover:text-[#c9748f] transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">Veterinary Care</span>
            </div>

            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              Veterinary Care
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Expert Medical Care{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                For Every Pet
              </span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg font-light">
              Our board-certified veterinary team provides comprehensive medical care for your pet — from routine wellness visits to advanced surgical procedures, all in a calm, caring environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300 text-sm"
              >
                Book an Appointment
              </Link>
              <Link
                href="/#services"
                className="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-[#4DB6AC] hover:text-[#4DB6AC] hover:-translate-y-1 transition-all duration-300 shadow-sm text-sm"
              >
                All Services
              </Link>
            </div>
          </div>

          <div className="hidden md:block animate-fade-in">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-100">
              <Image
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&auto=format&fit=crop&q=80"
                alt="Vet examining a dog"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-3 border border-white/60 shadow-lg">
                <p className="text-xs text-gray-600 font-medium">Board-certified</p>
                <p className="text-lg font-bold text-[#c9748f]">15+ Expert Vets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 bg-[#fdf8f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
              What&apos;s Included
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Everything We{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f, #a85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Provide
              </span>
            </h2>
            <p className="text-gray-500 font-light max-w-xl mx-auto">
              A full spectrum of veterinary services delivered with expertise and compassion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 border border-pink-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f3c4d0] to-[#fdf0f3] flex items-center justify-center text-xs font-bold text-[#c9748f] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
              How It Works
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Simple,{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f, #a85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Stress-Free Process
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-pink-100" />
            <div className="space-y-8 pl-16">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="absolute -left-[2.75rem] w-9 h-9 rounded-full bg-gradient-to-br from-[#c9748f] to-[#a85570] flex items-center justify-center text-xs font-bold text-white shadow-md">
                    {step.step}
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 bg-[#fdf8f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
              Gallery
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              See It{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f, #a85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                In Action
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div
                key={img.alt}
                className="relative rounded-2xl overflow-hidden group shadow-md"
                style={{ height: i % 2 === 0 ? "260px" : "200px" }}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Common{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f, #a85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900 text-sm pr-4 group-hover:text-[#c9748f] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "rotate-45" : "bg-gray-100"}`}
                    style={openFaq === i ? { background: "linear-gradient(135deg, #c9748f, #a85570)" } : {}}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? "white" : "#6b7280"} strokeWidth={2.5} className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                  <p className="px-6 text-sm text-gray-500 leading-relaxed font-light">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent 70%)" }} />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent 70%)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Ready to Book?</h2>
          <p className="text-white/75 mb-10 font-light leading-relaxed max-w-xl mx-auto">
            Our veterinary team is ready to provide the expert care your pet deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="tel:+971665573080" className="bg-white text-[#c9748f] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-sm">
              Call Us Now
            </Link>
            <Link href="mailto:info@thepetdr.ae" className="border-2 border-white/60 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 text-sm">
              Send an Email
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}