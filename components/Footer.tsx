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

const heading = "mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-900";
const link = "w-fit text-gray-600 transition hover:text-[#B8466F]";

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#F38BB0] bg-white text-sm text-gray-600">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr] lg:gap-10">
        <div className="col-span-2 min-w-0 lg:col-span-1">
          <Link href="/" className="inline-block" aria-label="The Pet Doctor Center home">
            <Image src="/logo.png" alt="The Pet Dr logo" width={1913} height={429} className="h-9 w-auto" />
          </Link>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2F7F76]">Quality Without Compromise</p>
          <address className="mt-4 space-y-1.5 not-italic leading-6">
            <p>Al Zahia Boutique Villas, Villa 60, Sharjah, UAE</p>
            <p>Reception: <a className="font-medium text-gray-900 hover:text-[#B8466F]" href={`tel:${CLINIC_PHONE}`}>+971 6 557 3080</a></p>
            <p>Emergency 24/7: <a className="font-semibold text-[#B8466F] hover:underline" href={`tel:${EMERGENCY_PHONE}`}>+971 54 279 7875</a></p>
            <p><a className="break-all hover:text-[#B8466F]" href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a></p>
          </address>
        </div>

        <nav aria-label="Footer services">
          <h3 className={heading}>Services</h3>
          <ul className="grid gap-2">
            {services.map((item) => (
              <li key={item.href}><Link href={item.href} className={link}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className={heading}>Opening hours</h3>
          <dl className="grid gap-1.5 text-[13px] sm:text-sm">
            {hours.map((item) => (
              <div key={item.day} className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                <dt>{item.day}</dt>
                <dd className="font-medium text-gray-900">{item.time}</dd>
              </div>
            ))}
          </dl>
          <a href={`tel:${CLINIC_PHONE}`} className="mt-4 inline-flex min-h-10 items-center rounded-full bg-[#F38BB0] px-5 text-sm font-semibold text-gray-900 transition hover:bg-[#EE76A1]">Call reception</a>
        </div>

        <div className="col-span-2 min-w-0 lg:col-span-1">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h3 className={heading.replace("mb-3 ", "")}>Find us</h3>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#B8466F] hover:underline">Directions ↗</a>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#CDE8E4] bg-[#F2FAF8]">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Google Maps location of The Pet Doctor Center, Al Zahia, Sharjah"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-40 w-full border-0"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} The Pet Doctor Center</p>
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
