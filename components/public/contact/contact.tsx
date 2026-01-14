"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ContactProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  className?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Whether you want to book a desk, schedule a tour, or ask a question, our team is here to help you thrive in our co-working space.",
  emailLabel = "Email",
  emailDescription = "Reach out and we’ll get back to you within 24 hours.",
  email = "hello@coworkwin.com",
  officeLabel = "Our Location",
  officeDescription = "Come visit us and explore our flexible workspaces.",
  officeAddress = "123 Innovation Blvd, Kathmandu, Nepal",
  phoneLabel = "Phone",
  phoneDescription = "Available Monday to Friday, 9am to 6pm.",
  phone = "+977 01 2345678",
  className,
}: ContactProps) => {
  return (
    <>
      {/* Contact Section with Hero-style Background */}
      <section
        className={cn(
          "relative py-24 md:pb-32 lg:pb-36 lg:pt-36 overflow-hidden mt-4",
          className
        )}
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl border border-black/10 lg:rounded-[2rem] dark:border-white/5 h-full w-full">
          <Image
            src="/hero-cow.jpg"
            alt="Hero Section"
            fill
            className="object-cover blur-xs"
            priority
          />
          {/* <div className="absolute inset-0 bg-black/50" /> */}
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          {/* Header */}
          <div className="mb-16 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg max-w-2xl mx-auto">{description}</p>
          </div>
          {/* Contact Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <div className="group bg-white/30 backdrop-blur-md rounded-xl p-8 hover:bg-white/40 transition-all duration-300 border border-white/20 flex flex-col justify-between min-h-[220px]">
              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {emailLabel}
                </h3>
                <p className="text-gray-700 text-sm">{emailDescription}</p>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-black font-medium hover:text-gray-800 mt-4"
              >
                {email}
              </a>
            </div>

            {/* Office */}
            <div className="group bg-white/30 backdrop-blur-md rounded-xl p-8 hover:bg-white/40 transition-all duration-300 border border-white/20 flex flex-col justify-between min-h-[220px]">
              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {officeLabel}
                </h3>
                <p className="text-gray-700 text-sm">{officeDescription}</p>
              </div>
              <span className="text-black font-medium mt-4">
                {officeAddress}
              </span>
            </div>

            {/* Phone */}
            <div className="group bg-white/30 backdrop-blur-md rounded-xl p-8 hover:bg-white/40 transition-all duration-300 border border-white/20 flex flex-col justify-between min-h-[220px]">
              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {phoneLabel}
                </h3>
                <p className="text-gray-700 text-sm">{phoneDescription}</p>
              </div>
              <a
                href={`tel:${phone}`}
                className="text-black font-medium hover:text-gray-800 mt-4"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Separate, No BG) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-5xl px-6">
          <h3 className="text-center text-2xl font-semibold mb-8 text-black">
            Find Us
          </h3>
          <div className="rounded-xl overflow-hidden shadow-lg border border-black-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7995003272736!2d85.33411974049396!3d27.723476176272555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d937ce67a9%3A0x53457ad1ffa09105!2sGypsy%20Bistro!5e0!3m2!1sen!2snp!4v1768310626122!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Co-working Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export { Contact7 };
