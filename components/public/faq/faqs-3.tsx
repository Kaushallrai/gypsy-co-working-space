"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "clock",
      question: "What are your opening hours?",
      answer:
        "Our co-working space is open daily. You can book seats or zones by the hour or for the full day. Exact opening and closing times will always be updated on our website and social pages.",
    },
    {
      id: "item-2",
      icon: "calendar-check",
      question: "How does booking work?",
      answer:
        "You can check real-time seat availability on our website. Once you find a free spot, you can instantly book by messaging us on WhatsApp or Instagram. No account or login is required.",
    },
    {
      id: "item-3",
      icon: "users",
      question: "Can I come with a group or team?",
      answer:
        "Yes. We offer both solo work zones and group-friendly spaces. You can book multiple seats or zones together depending on availability.",
    },
    {
      id: "item-4",
      icon: "wifi",
      question: "What facilities are included?",
      answer:
        "High-speed Wi-Fi, comfortable workstations, good lighting, power access, and a clean, professional environment designed for focused work and study.",
    },
    {
      id: "item-5",
      icon: "shield-check",
      question: "Is the space safe and well-maintained?",
      answer:
        "Absolutely. Our space is regularly cleaned, monitored, and designed to provide a secure and comfortable environment for all members.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Still have questions? Contact us directly on{" "}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  WhatsApp or Instagram
                </Link>
              </p>
            </div>
          </div>

          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
