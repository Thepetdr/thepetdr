"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  { title: "Premium Pet Food", desc: "Vet-curated selection of high-quality wet, dry, and raw food options for dogs, cats, and small animals." },
  { title: "Supplements & Vitamins", desc: "Health supplements recommended by our vets to support joints, digestion, coat health, and immunity." },
  { title: "Enrichment Toys", desc: "Mentally stimulating toys that keep pets active, engaged, and free from boredom-related behaviours." },
  { title: "Collars & Leads", desc: "Premium, comfortable collars, harnesses, and leads for every breed size and walking style." },
  { title: "Bedding & Comfort", desc: "Luxury beds and blankets designed for orthopaedic support and maximum comfort at rest." },
  { title: "Grooming Products", desc: "Take-home grooming tools and products recommended by our salon team for between-visit maintenance." },
];

const processSteps = [
  { step: "01", title: "Visit In-Store", desc: "Come into our clinic shop and browse our carefully curated selection of premium products." },
  { step: "02", title: "Get Expert Guidance", desc: "Our trained staff help you choose the right food, supplements, and accessories for your specific pet." },
  { step: "03", title: "Vet-Approved Selection", desc: "Every product on our shelves has been reviewed and approved by our veterinary team." },
  { step: "04", title: "Easy Repeat Purchases", desc: "Return visits made simple — our team remembers your pet's preferred products and diet plan." },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&auto=format&fit=crop&q=80", alt: "Pet shop supplies" },
  { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=80", alt: "Happy pets" },
  { src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=80", alt: "Dog with toy" },
  { src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=80", alt: "Pet accessories" },
];

const faqs = [
  { question: "Are all products vet-approved?", answer: "Yes. Every product in our shop has been reviewed by our veterinary team. We do not stock anything we wouldn't recommend for our own patients." },
  { question: "Can you recommend the right food for my pet?", answer: "Absolutely. Our team can advise on nutrition based on your pet's age, weight, breed, and any health conditions." },
  { question: "Do you stock prescription diets?", answer: "Yes, we carry a range of prescription veterinary diets for common conditions such as kidney disease, allergies, and weight management." },
  { question: "Can I return a product if my pet doesn't like it?", answer: "We accept returns on unopened products within 14 days. For opened food products, we handle returns case by case — just speak to our team." },
];

export default function PetShopPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <Link href="/#services" className="hover:text-[#c9748f] transition-colors">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="text-gray-600">Pet Shop</span>
            </div>

            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              Pet Shop
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Everything Your Pet{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Needs & Loves
              </span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg font-light">
              Our in-clinic pet shop stocks only the finest, vet-approved products — from nutritionist-recommended foods to enrichment toys and stylish accessories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300 text-sm">
                Visit Our Shop
              </Link>
              <Link href="/#services" className="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-[#4DB6AC] hover:text-[#4DB6AC] hover:-translate-y-1 transition-all duration-300 shadow-sm text-sm">
                All Services
              </Link>
            </div>
          </div>

          <div className="hidden md:block animate-fade-in">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-100">
              <Image src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=900&auto=format&fit=crop&q=80" alt="Premium pet supplies" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-3 border border-white/60 shadow-lg">
                <p className="text-xs text-gray-600 font-medium">100% Vet-Approved</p>
                <p className="text-lg font-bold text-[#c9748f]">Premium Products</p>
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
              What We Stock
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Curated With{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f, #a85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Your Pet in Mind
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-pink-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
              Shopping Made{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f, #a85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Simple
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
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">Gallery</span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              A Glimpse{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f, #a85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Inside</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div key={img.alt} className="relative rounded-2xl overflow-hidden group shadow-md" style={{ height: i % 2 === 0 ? "260px" : "200px" }}>
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
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Common{" "}
              <span style={{ background: "linear-gradient(135deg, #c9748f, #a85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-medium text-gray-900 text-sm pr-4 group-hover:text-[#c9748f] transition-colors">{faq.question}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "rotate-45" : "bg-gray-100"}`}
                    style={openFaq === i ? { background: "linear-gradient(135deg, #c9748f, #a85570)" } : {}}>
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
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Come Visit Our Shop</h2>
          <p className="text-white/75 mb-10 font-light leading-relaxed max-w-xl mx-auto">
            Our team is ready to help you find exactly what your pet needs.
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