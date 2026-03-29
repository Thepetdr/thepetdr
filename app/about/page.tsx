"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const team = [
  {
    name: "Dr. Emily Carter",
    role: "Lead Veterinarian",
    bio: "15 years of experience in small animal medicine and surgery. Board certified in veterinary internal medicine.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80",
    accent: "pink",
  },
  {
    name: "Dr. Marcus Lee",
    role: "Holistic Vet Specialist",
    bio: "Certified in veterinary acupuncture and herbal medicine. Passionate about integrative wellness approaches.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80",
    accent: "teal",
  },
  {
    name: "Sofia Reyes",
    role: "Head Groomer",
    bio: "Award-winning certified groomer with 10 years of experience across all breeds and coat types.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    accent: "pink",
  },
  {
    name: "Dr. Aisha Rahman",
    role: "Veterinary Surgeon",
    bio: "Specialist in orthopaedic and soft tissue surgery with a focus on minimally invasive procedures.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    accent: "teal",
  },
];

const timeline = [
  { year: "2014", title: "ThePetDr Founded", desc: "Opened our first small veterinary clinic in Dubai with a team of 3 dedicated vets." },
  { year: "2016", title: "Grooming Salon Opens", desc: "Expanded our services to include a full professional grooming salon on-site." },
  { year: "2018", title: "Pet Shop & Holistic Wing", desc: "Launched our curated pet shop and introduced holistic wellness programs." },
  { year: "2020", title: "Dog Park & Pools", desc: "Opened our outdoor dog park with supervised pools — a first in the region." },
  { year: "2023", title: "15+ Vets & Growing", desc: "Grew to a team of over 15 certified specialists serving 5,000+ happy pets." },
];

const values = [
  {
    title: "Compassion First",
    desc: "Every decision we make starts with the wellbeing of the animals in our care.",
    accent: "pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Clinical Excellence",
    desc: "We invest in the latest equipment, ongoing training, and evidence-based practices.",
    accent: "teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Owner Transparency",
    desc: "We communicate clearly at every step — no surprises, no jargon, just honest care.",
    accent: "pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Continuous Growth",
    desc: "We never stop learning — our team regularly trains in the latest veterinary advances.",
    accent: "teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const heroSection = useInView();
  const storySection = useInView();
  const valuesSection = useInView();
  const timelineSection = useInView();
  const teamSection = useInView();

  return (
    <div className="pt-20 bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-white">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f3c4d0 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #b2deda 0%, transparent 70%)" }}
        />

        <div ref={heroSection.ref} className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <Link href="/" className="hover:text-[#c9748f] transition-colors">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600">About</span>
            </div>

            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              A Clinic Built{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                With Love
              </span>
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light max-w-lg">
              ThePetDr was born from a simple belief — every pet deserves the highest
              quality of care, delivered with genuine compassion and expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300 text-sm"
              >
                Book an Appointment
              </Link>
              <Link
                href="/#services"
                className="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-[#4DB6AC] hover:text-[#4DB6AC] hover:-translate-y-1 transition-all duration-300 shadow-sm text-sm"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className={`hidden md:block transition-all duration-700 delay-200 ${heroSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&auto=format&fit=crop&q=80"
                  alt="Vet with dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=600&auto=format&fit=crop&q=80"
                  alt="Grooming"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 bg-[#fdf8f9]">
        <div ref={storySection.ref} className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${storySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest shadow-sm">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              More Than a Clinic —{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9748f, #a85570)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A Family
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5 font-light">
              Founded in 2014 by a group of passionate veterinarians, ThePetDr started as a small
              clinic driven by one goal: to raise the standard of pet healthcare in the region.
              Over the past decade, we have grown into a comprehensive pet care destination
              trusted by thousands of families across Dubai.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 font-light">
              Today, our team of over 15 certified veterinarians, groomers, holistic specialists,
              and pet care experts work together to deliver seamless, five-star experiences
              for every pet that walks through our doors.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "5,000+", label: "Pets Treated", accent: "#c9748f" },
                { number: "15+", label: "Expert Specialists", accent: "#4DB6AC" },
                { number: "10+", label: "Years of Care", accent: "#c9748f" },
                { number: "98%", label: "Satisfaction Rate", accent: "#4DB6AC" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-pink-100 shadow-sm text-center">
                  <p className="text-2xl font-bold mb-1" style={{ color: s.accent }}>{s.number}</p>
                  <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${storySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-pink-100">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=80"
                alt="Happy pets at ThePetDr"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-white">
        <div ref={valuesSection.ref} className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              valuesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-[#e8f8f7] border border-[#c8ecea] text-[#4DB6AC] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
              What Drives Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Our Core{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9748f, #a85570)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Values
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const isPink = v.accent === "pink";
              return (
                <div
                  key={v.title}
                  className={`bg-white rounded-2xl p-7 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                    isPink ? "border-pink-100" : "border-[#c8ecea]"
                  } ${valuesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      isPink
                        ? "bg-gradient-to-br from-[#f3c4d0] to-[#fdf0f3] text-[#c9748f]"
                        : "bg-gradient-to-br from-[#b2deda] to-[#e8f8f7] text-[#4DB6AC]"
                    }`}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-[#fdf8f9]">
        <div ref={timelineSection.ref} className="max-w-3xl mx-auto px-6">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              timelineSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-pink-50 border border-pink-200 text-[#c9748f] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              A Decade of{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9748f, #a85570)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Growing Together
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-pink-100" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex gap-6 transition-all duration-700 ${
                    timelineSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 text-right pt-3">
                    <span className="text-sm font-bold text-[#c9748f]">{item.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-3.5">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#c9748f] to-[#a85570] shadow-md ring-4 ring-[#fdf8f9]" />
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-pink-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-white">
        <div ref={teamSection.ref} className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              teamSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-[#e8f8f7] border border-[#c8ecea] text-[#4DB6AC] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-sm">
              Meet the Team
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
              The Experts Behind{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c9748f, #a85570)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ThePetDr
              </span>
            </h2>
            <p className="text-gray-500 font-light max-w-xl mx-auto">
              A dedicated team of certified professionals who treat every pet as their own.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => {
              const isPink = member.accent === "pink";
              return (
                <div
                  key={member.name}
                  className={`group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                    isPink ? "border-pink-100" : "border-[#c8ecea]"
                  } ${teamSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{member.name}</h3>
                    <p className={`text-xs font-medium mb-3 ${isPink ? "text-[#c9748f]" : "text-[#4DB6AC]"}`}>
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">{member.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #c9748f 0%, #a85570 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, white, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, white, transparent 70%)" }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Meet the Team?
          </h2>
          <p className="text-white/75 mb-10 font-light leading-relaxed max-w-xl mx-auto">
            Book an appointment and experience the ThePetDr difference for yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#c9748f] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-sm"
            >
              Book Now
            </Link>
            <Link
              href="/#services"
              className="border-2 border-white/60 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 text-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}