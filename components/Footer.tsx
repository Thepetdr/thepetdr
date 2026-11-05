import Link from "next/link";
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL, CLINIC_PHONE, EMERGENCY_PHONE, CLINIC_EMAIL } from "@/lib/clinic-links";

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

export default function Footer() {
  return (
    <footer className="bg-[#1B302A] text-[#D6E4DC]">
      <div className="border-b border-white/10 bg-[#243C33]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#92CAC2]">Care when you need it</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Your pet's wellbeing comes first.</h2>
            <p className="mt-2 max-w-xl text-sm text-[#C3D7CC]">Book routine care with our reception team. For urgent concerns, contact our separate 24/7 emergency support line.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${CLINIC_PHONE}`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#F38BB0] px-6 text-sm font-semibold text-[#1B302A] transition hover:bg-[#FFB4CC]">Call reception</a>
            <a href={`tel:${EMERGENCY_PHONE}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#F38BB0] px-6 text-sm font-semibold text-white transition hover:bg-white/10">24/7 Emergency</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="min-w-0">
            <Link href="/" className="inline-flex items-baseline gap-2 text-2xl font-semibold tracking-tight text-white" aria-label="The Pet Doctor Center home">
              The Pet Doctor <span className="text-[#F38BB0]">Center</span>
            </Link>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[#92CAC2]">Quality Without Compromise</p>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#CBDDD3]">
              Thoughtful veterinary care, grooming and cat-first boarding in Al Zahia, Sharjah. A calmer, more personal experience for you and your pet.
            </p>
            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#92CAC2]">Explore services</h3>
                <nav aria-label="Footer services" className="mt-4 grid gap-3">
                  {services.map((item) => <Link key={item.href} href={item.href} className="w-fit text-sm text-[#E7EEE8] transition hover:text-[#F38BB0]">{item.label}</Link>)}
                </nav>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#92CAC2]">Visit & contact</h3>
                <div className="mt-4 space-y-4 text-sm leading-6">
                  <p>Al Zahia Boutique Villas, Villa 60<br />Sharjah, United Arab Emirates</p>
                  <a className="block w-fit text-white underline decoration-[#92CAC2] underline-offset-4 hover:text-[#F38BB0]" href={`tel:${CLINIC_PHONE}`}>+971 6 557 3080</a>
                  <a className="block w-fit break-all text-white underline decoration-[#92CAC2] underline-offset-4 hover:text-[#F38BB0]" href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a>
                  <a className="block w-fit text-white underline decoration-[#92CAC2] underline-offset-4 hover:text-[#F38BB0]" href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">Directions on Google Maps ↗</a>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">Find us in Al Zahia</h3>
                <p className="mt-1 text-sm text-[#CBDDD3]">The Pet Doctor Center · Villa 60</p>
              </div>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#F5AFCA] underline-offset-4 hover:underline">Open larger map ↗</a>
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/20 bg-[#E6EAE6] shadow-lg shadow-black/10">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                title="Google Maps location of The Pet Doctor Center, Al Zahia, Sharjah"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[260px] w-full border-0 sm:h-[310px]"
              />
            </div>
            <div className="mt-7 rounded-2xl border border-white/15 bg-white/5 px-5 py-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#92CAC2]">Clinic opening hours</h3>
              <dl className="mt-4 space-y-2">
                {hours.map((item) => (
                  <div key={item.day} className="flex items-baseline justify-between gap-4 text-sm">
                    <dt className="text-[#CCDBD1]">{item.day}</dt>
                    <dd className="text-right font-medium text-white">{item.time}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 border-t border-white/15 pt-4 text-sm">
                <p className="font-semibold text-white">24/7 Emergency Support</p>
                <a href={`tel:${EMERGENCY_PHONE}`} className="mt-1 inline-block text-[#F5AFCA] underline-offset-4 hover:underline">+971 54 279 7875</a>
                <p className="mt-1 text-xs text-[#CBDDD3]">Please call ahead for urgent veterinary assistance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-[#C2D1C7] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Pet Doctor Center. Quality Without Compromise.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Google Reviews ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
