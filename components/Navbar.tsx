"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Veterinary Care", href: "/services/veterinary-care" },
  { label: "Grooming Salon", href: "/services/grooming-salon" },
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
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c9748f] to-[#a85570] flex items-center justify-center shadow-md group-hover:shadow-pink-200 transition-shadow duration-300">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M4.5 11.5A2 2 0 106.5 9.5 2 2 0 004.5 11.5zM9 7a2 2 0 102 2A2 2 0 009 7zm6 0a2 2 0 102 2 2 2 0 00-2-2zm4.5 4.5a2 2 0 102 2 2 2 0 00-2-2zm-7.63 4.63C10.31 15.08 8 14 8 14a6 6 0 000 4s1.5 2 4 2 4-2 4-2a6 6 0 000-4s-2.31 1.08-3.87 1.63a1 1 0 01-.76 0z" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 leading-none">ThePetDr</span>
              <span
                className="block text-[10px] font-medium leading-none mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #c9748f, #4DB6AC)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Premium Pet Clinic
              </span>
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
                        ? "text-[#c9748f] bg-pink-50"
                        : "text-gray-600 hover:text-[#c9748f] hover:bg-pink-50/60"
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

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                            pathname === s.href
                              ? "bg-pink-50 text-[#c9748f] font-medium"
                              : "text-gray-600 hover:bg-pink-50/70 hover:text-[#c9748f]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9748f] flex-shrink-0 opacity-60" />
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#c9748f] bg-pink-50"
                      : "text-gray-600 hover:text-[#c9748f] hover:bg-pink-50/60"
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
              className="hidden md:flex bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t border-gray-100`}
        >
          <div className="px-6 py-5 space-y-1">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key="mobile-services">
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-[#c9748f] transition-all duration-200"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Services
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      servicesOpen ? "max-h-80" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 mt-1 space-y-1">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                            pathname === s.href
                              ? "bg-pink-50 text-[#c9748f] font-medium"
                              : "text-gray-500 hover:bg-pink-50/70 hover:text-[#c9748f]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9748f] flex-shrink-0 opacity-60" />
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
                      ? "bg-pink-50 text-[#c9748f]"
                      : "text-gray-700 hover:bg-pink-50/60 hover:text-[#c9748f]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-[#c9748f] to-[#a85570] text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-200 transition-all duration-300"
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