import Link from "next/link";

const serviceLinks = [
  { label: "Veterinary Care", href: "/services/veterinary-care" },
  { label: "Grooming Salon", href: "/services/grooming-salon" },
  { label: "Pet Shop", href: "/services/pet-shop" },
  { label: "Dog Park & Pools", href: "/services/dog-park" },
  { label: "Holistic Regimens", href: "/services/holistic-regimens" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* ── MAIN FOOTER ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── BRAND ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c9748f] to-[#a85570] flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M4.5 11.5A2 2 0 106.5 9.5 2 2 0 004.5 11.5zM9 7a2 2 0 102 2A2 2 0 009 7zm6 0a2 2 0 102 2 2 2 0 00-2-2zm4.5 4.5a2 2 0 102 2 2 2 0 00-2-2zm-7.63 4.63C10.31 15.08 8 14 8 14a6 6 0 000 4s1.5 2 4 2 4-2 4-2a6 6 0 000-4s-2.31 1.08-3.87 1.63a1 1 0 01-.76 0z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white leading-none">ThePetDr</span>
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

            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              Providing premium, compassionate pet care since 2014. Your pet&apos;s health
              and happiness is our mission.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-[#c9748f] hover:to-[#a85570] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-[#c9748f] hover:to-[#a85570] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-[#c9748f] hover:to-[#a85570] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── SERVICES ── */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#c9748f] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#c9748f] transition-colors duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── QUICK LINKS + CONTACT ── */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#c9748f] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-[#c9748f] transition-colors duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <a
                href="tel:+971665573080"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#c9748f] transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-gray-800 group-hover:bg-pink-950 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                +971 665573080
              </a>

              <a
                href="mailto:info@thepetdr.ae"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#c9748f] transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-gray-800 group-hover:bg-pink-950 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                info@thepetdr.ae
              </a>

              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                Alzahia Boutique villas Villa 60 - Sharjah
              </div>
            </div>
          </div>

          {/* ── HOURS ── */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.day} className="flex flex-col gap-0.5">
                  <span className="text-xs text-gray-600 uppercase tracking-wide">{h.day}</span>
                  <span className="text-sm text-gray-400">{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-2 bg-gray-900 border border-gray-800 px-4 py-3 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Emergency Line</p>
                <p className="text-xs text-gray-500">Available 24 / 7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ThePetDr Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-800">·</span>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}