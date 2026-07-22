import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cat Boarding & Pet Stays in Sharjah | The Pet Doctor",
  description:
    "Cat boarding in Sharjah with calm cat-focused spaces, comfortable stays, daily care, and veterinary support nearby. Book your cat's stay at The Pet Doctor.",
  alternates: {
    canonical: "https://thepetdr.ae/services/cat-boarding-pet-stays-sharjah",
  },
};

const PINK = "#E07A9A";
const TEAL = "#7BB5AD";

const stats = [
  { value: "Cat-first", label: "Boarding environment", color: PINK },
  { value: "Daily", label: "Care & observation", color: TEAL },
  { value: "Vet-led", label: "Support nearby", color: PINK },
  { value: "Sharjah", label: "Local pet care", color: TEAL },
];

const features = [
  {
    title: "Quiet, cat-first spaces",
    text: "A calmer environment designed around how cats rest, hide, observe, and settle.",
    icon: "M12 5c2 0 3.8 1 5 2.6l1.8-1.1c.7-.4 1.6.1 1.5.9l-.4 3.2c.1.5.1.9.1 1.4a8 8 0 1 1-16 0c0-.5 0-.9.1-1.4l-.4-3.2c-.1-.8.8-1.3 1.5-.9L7 7.6A6.2 6.2 0 0 1 12 5Z",
    tone: "pink",
  },
  {
    title: "Comfortable private stays",
    text: "Clean resting areas maintained with hygiene, routine, comfort, and low stress in mind.",
    icon: "M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-5h-4v5H5a1 1 0 0 1-1-1v-8.5Z",
    tone: "teal",
  },
  {
    title: "Veterinary support nearby",
    text: "Clinic support is close if your cat needs additional monitoring, advice, or care.",
    icon: "M12 5v14M5 12h14M6.5 4.5h11v15h-11z",
    tone: "pink",
  },
];

const included = [
  "Daily care and feeding",
  "Support for nervous cats",
  "Private resting spaces",
  "Medication support by arrangement",
  "Clean, low-stress environment",
  "Veterinary team nearby",
];

const faqs = [
  {
    question: "Do you offer cat boarding in Sharjah?",
    answer:
      "Yes. The Pet Doctor offers cat-focused boarding in Sharjah for families who want a calmer, more reassuring place for their cat to stay.",
  },
  {
    question: "Is your cat boarding separate from dogs?",
    answer:
      "Our cat boarding is designed around cats and their need for a quieter, lower-stress environment. If your cat is nervous, let us know before booking so we can guide you properly.",
  },
  {
    question: "Can you board nervous cats?",
    answer:
      "Yes. We focus on calm handling, predictable routines, and giving cats time to settle.",
  },
  {
    question: "Can my cat stay if they need medication?",
    answer:
      "In many cases, yes. Please tell us about medication, medical conditions, or special care needs before booking so our team can confirm what is suitable.",
  },
  {
    question: "What should I bring for my cat's stay?",
    answer:
      "Bring your cat's usual food, medication, vaccination records, and a familiar item such as a small blanket or toy if your cat finds that comforting.",
  },
];

function Pill({
  children,
  tone = "pink",
}: {
  children: React.ReactNode;
  tone?: "pink" | "teal";
}) {
  return (
    <p
      className={`inline-flex rounded-full border bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] shadow-sm ${
        tone === "pink"
          ? "border-[#EFBCB0]/50 text-[#E07A9A]"
          : "border-[#c8ecea] text-[#7BB5AD]"
      }`}
    >
      {children}
    </p>
  );
}

function Icon({
  path,
  tone = "pink",
}: {
  path: string;
  tone?: "pink" | "teal";
}) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
        tone === "pink" ? "bg-[#fdf5f3] text-[#E07A9A]" : "bg-[#e8f8f7] text-[#7BB5AD]"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </div>
  );
}

export default function CatBoardingPage() {
  return (
    <main className="bg-[#fffafa] text-gray-950">
      <section className="relative overflow-hidden bg-white px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="pointer-events-none absolute -right-40 top-12 h-[540px] w-[540px] rounded-full bg-[#f3c4d0]/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#e8f8f7]/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Pill>Cat Boarding in Sharjah</Pill>

            <h1 className="mt-7 mb-6 text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl">
              <span className="text-[#E07A9A]">Calm cat boarding</span>
              <br />
              <span className="text-[#7BB5AD]">for happier stays.</span>
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-relaxed text-gray-500">
              A quiet, cat-focused stay at The Pet Doctor with comfortable spaces,
              daily observation, gentle routines, and veterinary support nearby.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-[#E07A9A] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E07A9A]/20 transition hover:-translate-y-0.5">
                Book Cat Boarding
              </Link>

              <Link href="/services" className="rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#7BB5AD] hover:text-[#7BB5AD]">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#E07A9A]/10">
              <Image
                src="/images/Cat_Boarding.png"
                alt="Cat boarding space at The Pet Doctor in Sharjah"
                fill
                priority
                className="object-cover brightness-105 contrast-110 saturate-110"
              />
            </div>

            <div className="absolute -left-5 top-8 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold text-gray-400">Cat-first</p>
              <p className="text-2xl font-bold text-[#E07A9A]">Calm stays</p>
            </div>

            <div className="absolute -right-4 bottom-8 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold text-gray-400">Support</p>
              <p className="text-2xl font-bold text-[#7BB5AD]">Vet nearby</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 py-10 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold md:text-4xl" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fdf8f9] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Pill tone="teal">Why It Matters</Pill>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-[#7BB5AD]">Designed for comfort.</span>
              <br />
              <span className="text-[#E07A9A]">Built around cats.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white bg-white p-8 shadow-sm shadow-[#E07A9A]/5">
                <Icon path={item.icon} tone={item.tone as "pink" | "teal"} />
                <h3 className="mt-5 mb-3 text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="leading-relaxed text-gray-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.85fr_1fr] md:items-start">
          <div>
            <Pill>What&apos;s Included</Pill>
            <h2 className="mt-6 mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-[#E07A9A]">Care, comfort,</span>
              <br />
              <span className="text-[#7BB5AD]">and daily observation.</span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-gray-500">
              Boarding can be stressful for cats, so our approach is calm, structured,
              and attentive. We ask about your cat&apos;s routine, feeding,
              temperament, and medical needs before their stay.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {included.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <Icon path="m5 12 4 4L19 6" tone={index % 2 === 0 ? "pink" : "teal"} />
                <p className="font-bold leading-snug text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* ── FAQ ──────────────────────────────────────────────────────────── */}
<section className="bg-[#fdf8f9] px-6 py-24">
  <div className="mx-auto max-w-3xl">
    <div className="mb-14 text-center">
      <span className="mb-5 inline-block rounded-full border border-[#c8ecea] bg-[#e8f8f7] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7BB5AD] shadow-sm">
        Cat Boarding FAQ
      </span>

      <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        <span className="text-[#E07A9A]">Common</span>{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #7BB5AD 0%, #7BB5AD 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Questions
        </span>
      </h2>

      <p className="font-light leading-relaxed text-gray-500">
        Everything you need to know before your cat&apos;s stay.
      </p>
    </div>

    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <details
          key={faq.question}
          className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-left [&::-webkit-details-marker]:hidden">
            <span className="pr-4 text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-[#E07A9A] group-open:text-[#E07A9A]">
              {faq.question}
            </span>

            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-[#fdf5f3] group-open:rotate-45 group-open:bg-[#E07A9A]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                className="h-3 w-3 text-gray-500 transition-colors duration-300 group-hover:text-[#E07A9A] group-open:text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </summary>

          <div className="px-6 pb-5">
            <p className="text-sm font-light leading-relaxed text-gray-500">
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#f4d6df] bg-gradient-to-br from-[#fdf5f3] via-white to-[#e8f8f7] px-8 py-14 text-center shadow-xl shadow-[#E07A9A]/10 md:px-16">
          <Pill>Book a Stay</Pill>

          <h2 className="mt-6 mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-[#E07A9A]">Planning time away?</span>
            <br />
            <span className="text-[#7BB5AD]">We&apos;ll help your cat settle calmly.</span>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-500">
            Speak to our team about your cat&apos;s routine, temperament, and care needs before boarding.
          </p>

          <Link href="/contact" className="inline-flex rounded-full bg-[#E07A9A] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E07A9A]/20 transition hover:-translate-y-0.5">
            Book Cat Boarding
          </Link>
        </div>
      </section>
    </main>
  );
}