"use client";
import { useState } from "react";
import Link from "next/link";

// ── CONFIG ── Replace with your actual WhatsApp number (no + or spaces)
const WHATSAPP_NUMBER = "971665573080";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:00 PM" },
];

const services = [
  "Veterinary Care",
  "Grooming Salon",
  "Pet Shop",
  "Dog Park & Pools",
  "Holistic Regimens",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pet: "",
    petType: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
🐾 *New Booking Request — ThePetDr Clinic*

👤 *Name:* ${form.name}
📧 *Email:* ${form.email}
📞 *Phone:* ${form.phone || "Not provided"}
🐶 *Pet Name:* ${form.pet || "Not provided"}
🐾 *Pet Type:* ${form.petType || "Not provided"}
🏥 *Service:* ${form.service}
📅 *Preferred Date:* ${form.date || "Flexible"}
💬 *Message:* ${form.message || "No additional message"}

_Sent via ThePetDr Website_
    `.trim();

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <div className="pt-20 bg-white">

      {/* ── HERO ── */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600">Contact</span>
          </div>

          <div className="max-w-2xl">
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-4 tracking-tight">
              We&apos;d Love to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Hear From You
              </span>
            </h1>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Fill in the form below and your booking request will be sent directly
              to us on WhatsApp. We&apos;ll confirm your appointment within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* ── FORM ── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

              {/* Form header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 leading-none">Book via WhatsApp</h2>
                  <p className="text-xs text-gray-400 mt-0.5 font-light">
                    Your request is sent directly to our team on WhatsApp
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Your Name <span className="text-[#c9748f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Sarah Mitchell"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9748f] focus:ring-2 focus:ring-pink-100 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-[#c9748f]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="sarah@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9748f] focus:ring-2 focus:ring-pink-100 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9748f] focus:ring-2 focus:ring-pink-100 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#c9748f] focus:ring-2 focus:ring-pink-100 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Pet&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="pet"
                      value={form.pet}
                      onChange={handleChange}
                      placeholder="Max"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9748f] focus:ring-2 focus:ring-pink-100 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Pet Type
                    </label>
                    <select
                      name="petType"
                      value={form.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#c9748f] focus:ring-2 focus:ring-pink-100 transition-all duration-200 bg-white"
                    >
                      <option value="">Select pet type...</option>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Rabbit</option>
                      <option>Bird</option>
                      <option>Hamster</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Service Required <span className="text-[#c9748f]">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#c9748f] focus:ring-2 focus:ring-pink-100 transition-all duration-200 bg-white"
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your pet, any health concerns, or special requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#c9748f] focus:ring-2 focus:ring-pink-100 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bc5a] text-white py-4 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Booking Request on WhatsApp
                </button>

                <p className="text-center text-xs text-gray-400 font-light">
                  Clicking the button will open WhatsApp with your booking details pre-filled.
                  We typically respond within 15 minutes.
                </p>
              </form>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-5">

            {/* WhatsApp direct */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-green-100 bg-green-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-green-600 font-medium">Chat Directly</p>
                <p className="text-sm font-bold text-gray-900">Open WhatsApp</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth={2} className="w-4 h-4 ml-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Contact cards */}
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                label: "Call Us",
                value: "+971 665573080",
                href: "tel:+971665573080",
                accent: "pink",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "Email Us",
                value: "info@thepetdr.ae",
                href: "mailto:info@thepetdr.ae",
                accent: "teal",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: "Visit Us",
                value: "Alzahia Boutique villas Villa 60 - Sharjah",
                href: "https://maps.google.com",
                accent: "pink",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "Visit Us" ? "_blank" : undefined}
                rel="noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white ${
                  c.accent === "pink"
                    ? "border-pink-100 hover:border-pink-200"
                    : "border-[#c8ecea] hover:border-[#a8deda]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    c.accent === "pink"
                      ? "bg-gradient-to-br from-[#f3c4d0] to-[#fdf0f3] text-[#c9748f]"
                      : "bg-gradient-to-br from-[#b2deda] to-[#e8f8f7] text-[#4DB6AC]"
                  }`}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                  <p className="text-sm font-semibold text-gray-900">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Hours */}
            <div className="bg-[#fdf8f9] rounded-2xl border border-pink-100 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="#c9748f" strokeWidth={1.5} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Opening Hours
              </h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{h.day}</span>
                    <span className="text-xs font-semibold text-gray-700">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-pink-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-500">
                  Emergency line available <strong className="text-gray-700">24/7</strong>
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-48 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.4154977717453!2d55.46007787554207!3d25.32383492655946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f714b0e549f%3A0xe239207a46bbe522!2sThe%20Pet%20Doctor%20Center!5e0!3m2!1sen!2sae!4v1774796608003!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ThePetDr Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}