import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingConcierge from "@/components/FloatingConcierge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clinicStructuredData = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "@id": "https://thepetdr.ae/#clinic",
  name: "The Pet Doctor Center",
  url: "https://thepetdr.ae",
  telephone: "+97165573080",
  email: "info@thepetdr.ae",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Zahia Boutique Villas, Villa 60",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"], opens: "10:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "13:00", closes: "22:00" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "customer service", telephone: "+97165573080" },
    { "@type": "ContactPoint", contactType: "emergency", telephone: "+971542797875", availableLanguage: ["en", "ar"] },
  ],
} as const;

export const metadata: Metadata = {
  metadataBase: new URL("https://thepetdr.ae"),

  title: {
    default:
      "Veterinary Clinic in Sharjah | The Pet Doctor Center",
    template: "%s | The Pet Doctor",
  },

  description:
    "Premium veterinary care for cats, dogs, birds and exotic pets in Al Zahia, Sharjah. Consultations, vaccinations, surgery, grooming and cat boarding.",

  keywords: [
    "veterinary clinic Sharjah",
    "pet clinic Sharjah",
    "vet clinic Sharjah",
    "cat vet Sharjah",
    "feline veterinary care Sharjah",
    "cat boarding Sharjah",
    "cat hotel Sharjah",
    "cat grooming Sharjah",
    "dog grooming Sharjah",
    "pet grooming Sharjah",
    "pet shop Sharjah",
    "pet retail shop Sharjah",
    "emergency vet Sharjah",
    "The Pet Doctor",
    "ThePetDr",
  ],

  openGraph: {
    title:
      "Veterinary Clinic in Sharjah | The Pet Doctor Center",
    description:
      "Veterinary care for cats, dogs, birds and exotic pets in Sharjah. Consultations, vaccinations, surgery, grooming and cat boarding.",
    url: "https://thepetdr.ae",
    siteName: "The Pet Doctor",
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Veterinary Clinic in Sharjah | The Pet Doctor Center",
    description:
      "Veterinary care for cats, dogs, birds and exotic pets in Sharjah. Consultations, vaccinations, surgery, grooming and cat boarding.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PDS5F9HR');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDS5F9HR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicStructuredData).replace(/</g, "\\u003c") }} />
        <Navbar />

        <main>{children}</main>

        <Footer />

        <FloatingConcierge />
      </body>
    </html>
  );
}
