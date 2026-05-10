"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Medical & Diagnostics", href: "/services/medical-and-diagnostics" },
  { label: "Surgery", href: "/services/pet-surgery-sharjah" },
  { label: "Dental Care", href: "/services/pet-dental-cleaning-sharjah" },
  { label: "Emergency Vet", href: "/services/emergency-vet-sharjah" },
  { label: "Vaccinations", href: "/services/pet-vaccinations-sharjah" },
  { label: "Preventive Care", href: "/services/preventive-pet-care-sharjah" },
  { label: "Veterinary Care", href: "/services/veterinary-care" },
  { label: "Grooming Salon", href: "/services/pet-grooming-sharjah" },
  { label: "Boarding & Daycare", href: "/services/pet-boarding-daycare-sharjah" },
  { label: "Pet Shop", href: "/services/pet-shop" },
  { label: "Dog Park & Pools", href: "/services/dog-park" },
  { label: "Holistic Regimens", href: "/services/holistic-regimens" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-36 h-20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="ThePetDr logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key="services"
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      pathname.startsWith("/services")
                        ? "text-[#E07A9A] bg-[#fdf5f3]"
                        : "text-gray-600 hover:text-[#E07A9A] hover:bg-[#fdf5f3]/60"
                    }`}
                  >
                    Services
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown — two columns for 12 items */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[26rem] transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                      <div className="grid grid-cols-2 gap-0.5">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                              pathname === s.href
                                ? "bg-[#fdf5f3] text-[#E07A9A] font-medium"
                                : "text-gray-600 hover:bg-[#fdf5f3]/70 hover:text-[#E07A9A]"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A9A] flex-shrink-0 opacity-60" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#E07A9A] bg-[#fdf5f3]"
                      : "text-gray-600 hover:text-[#E07A9A] hover:bg-[#fdf5f3]/60"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* ── CTA + HAMBURGER ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:flex bg-gradient-to-r from-[#E07A9A] to-[#E07A9A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#E07A9A]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t border-gray-100`}
        >
          <div className="px-6 py-5 space-y-1">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key="mobile-services">
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#fdf5f3] hover:text-[#E07A9A] transition-all duration-200"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Services
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      servicesOpen ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 mt-1 space-y-0.5">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                            pathname === s.href
                              ? "bg-[#fdf5f3] text-[#E07A9A] font-medium"
                              : "text-gray-500 hover:bg-[#fdf5f3]/70 hover:text-[#E07A9A]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E07A9A] flex-shrink-0 opacity-60" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-[#fdf5f3] text-[#E07A9A]"
                      : "text-gray-700 hover:bg-[#fdf5f3]/60 hover:text-[#E07A9A]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-[#E07A9A] to-[#E07A9A] text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#E07A9A]/20 transition-all duration-300"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {scrolled && <div className="h-20" />}
    </>
  );
}