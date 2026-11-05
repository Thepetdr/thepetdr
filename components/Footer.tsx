import Image from "next/image";
import Link from "next/link";
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL, CLINIC_PHONE, EMERGENCY_PHONE, CLINIC_EMAIL } from "@/lib/clinic-links";

// Brand palette: pink #F38BB0 and teal #92CAC2 (from the TPD logo).
// Deeper tints of the same hues are used only where text needs readable contrast on white.
const services = [
  { label: "Veterinary Care", href: "/services/veterinary-care" },
  { label: "Cat Boarding", href: "/services/cat-boarding-pet-stays-sharjah" },
  { label: "Grooming", href: "/services/pet-grooming-sharjah" },
  { label: "Vaccinations", href: "/services/pet-vaccinations-sharjah" },
  { label: "Emergency Vet", href: "/services/emergency-vet-sharjah" },
  { label: "Boarding & Daycare", href: "/services/pet-boarding-daycare-sharjah" },
];

const hours = [
  { day: "Mon – Thu", time: "10 AM – 9 PM" },
  { day: "Friday", time: "1 PM – 10 PM" },
  { day: "Sat – Sun", time: "10 AM – 9 PM" },
];

const linkClass = "block w-fit text-gray-800 underline decoration-[#92CAC2] decoration-2 underline-offset-4 transition hover:text-[#B8466F]";
const labelClass = "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-900";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h3 className={labelClass}>
      <span aria-hidden="true" className="h-0.5 w-5 rounded-full bg-[#92CAC2]" />
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      {/* Call-to-action band */}
      <div className="bg-[#FDEFF4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8466F]">Care when you need it</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Your pet&apos;s wellbeing comes first.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">Book routine care with our reception team. For urgent concerns, contact our separate 24/7 emergency support line.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${CLINIC_PHONE}`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F38BB0] px-6 text-sm font-semibold text-gray-900 shadow-sm shadow-[#F38BB0]/30 transition hover:bg-[#EE76A1]">Call reception</a>
            <a href={`tel:${EMERGENCY_PHONE}`} className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#92CAC2] bg-white px-6 text-sm font-semibold text-gray-900 transition hover:bg-[#EEF8F6]">24/7 Emergency</a>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-[#F38BB0] via-[#F38BB0] to-[#92CAC2]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="min-w-0">
            <Link href="/" className="inline-block" aria-label="The Pet Doctor Center home">
              <Image src="/logo.png" alt="The Pet Dr logo" width={1913} height={429} className="h-12 w-auto sm:h-14" />
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F7F76]">Quality Without Compromise</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
              Thoughtful veterinary care, grooming and cat-first boarding in Al Zahia, Sharjah. A calmer, more personal experience for you and your pet.
            </p>
            <div className="mt-10 grid gap-9 sm:grid-cols-2">
              <div>
                <Label>Explore services</Label>
                <nav aria-label="Footer services" className="mt-4 grid gap-3">
                  {services.map((item) => (
                    <Link key={item.href} href={item.href} className="w-fit text-sm text-gray-700 transition hover:text-[#B8466F]">{item.label}</Link>
                  ))}
                </nav>
              </div>
              <div>
                <Label>Visit &amp; contact</Label>
                <div className="mt-4 space-y-4 text-sm leading-6">
                  <p className="text-gray-600">Al Zahia Boutique Villas, Villa 60<br />Sharjah, United Arab Emirates</p>
                  <a className={linkClass} href={`tel:${CLINIC_PHONE}`}>+971 6 557 3080</a>
                  <a className={`${linkClass} break-all`} href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a>
                  <a className={linkClass} href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">Directions on Google Maps ↗</a>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Find us in Al Zahia</h3>
                <p className="mt-1 text-sm text-gray-600">The Pet Doctor Center · Villa 60</p>
              </div>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#B8466F] underline-offset-4 hover:underline">Open larger map ↗</a>
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#F7CADB] bg-[#FDEFF4] shadow-sm">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                title="Google Maps location of The Pet Doctor Center, Al Zahia, Sharjah"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[260px] w-full border-0 sm:h-[310px]"
              />
            </div>
            <div className="mt-7 rounded-2xl border border-[#CDE8E4] bg-[#F2FAF8] px-5 py-5">
              <Label>Clinic opening hours</Label>
              <dl className="mt-4 space-y-2">
                {hours.map((item) => (
                  <div key={item.day} className="flex items-baseline justify-between gap-4 text-sm">
                    <dt className="text-gray-600">{item.day}</dt>
                    <dd className="text-right font-medium text-gray-900">{item.time}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 border-t border-[#CDE8E4] pt-4 text-sm">
                <p className="font-semibold text-gray-900">24/7 Emergency Support</p>
                <a href={`tel:${EMERGENCY_PHONE}`} className="mt-1 inline-block font-semibold text-[#B8466F] underline-offset-4 hover:underline">+971 54 279 7875</a>
                <p className="mt-1 text-xs text-gray-600">Please call ahead for urgent veterinary assistance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-gray-100 pt-7 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Pet Doctor Center. Quality Without Compromise.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/about" className="hover:text-[#B8466F]">About</Link>
            <Link href="/contact" className="hover:text-[#B8466F]">Contact</Link>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#B8466F]">Google Reviews ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
