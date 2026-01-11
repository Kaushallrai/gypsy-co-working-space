"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Clock, CheckCircle } from "lucide-react";

type BookingStep = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function HowToBook() {
  const steps: BookingStep[] = [
    {
      id: 1,
      icon: <MessageCircle className="size-8" />,
      title: "Check Availability",
      description:
        "Browse real-time seat availability on our website. See which zones and individual seats are free for your preferred date and time.",
    },
    {
      id: 2,
      icon: <Clock className="size-8" />,
      title: "Choose Your Slot",
      description:
        "Select your preferred workspace type and time duration. Book by the hour, half-day, or full day – whatever suits your schedule best.",
    },
    {
      id: 3,
      icon: <CheckCircle className="size-8" />,
      title: "Book & Confirm",
      description:
        "Send your booking request via WhatsApp or Instagram. We'll confirm instantly and you're all set to work. No login needed!",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-muted dark:bg-background/50 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            How to Book Your Space
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Booking is simple, fast, and hassle-free. Follow these three easy
            steps to reserve your perfect workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              {/* Step Number Badge */}
              <div className="mb-6">
                <div className="size-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-xl">
                  {step.id}
                </div>
              </div>

              {/* Icon */}
              <div className="text-primary mb-4">{step.icon}</div>

              {/* Content Card */}
              <Card className="w-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base flex-1">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <a href="#availability">Check Availability Now</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
