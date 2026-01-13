import { Card } from "@/components/ui/card";
import {
  Wifi,
  Armchair,
  Users,
  CalendarCheck,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { ReactNode } from "react";

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-12 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Everything You Need to Stay Productive
          </h2>
          <p className="mt-4">
            A modern co-working space designed for focused work, study, and
            collaboration.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            mx-auto mt-8 grid gap-6 *:text-center
            max-w-sm
            md:mt-16 md:max-w-3xl md:grid-cols-2 md:auto-rows-fr
            lg:max-w-5xl lg:grid-cols-3
          "
        >
          {/* CARD */}
          {[
            {
              icon: Wifi,
              title: "High-Speed Internet",
              desc: "Fast and reliable Wi-Fi for online meetings, studying, and uninterrupted work.",
            },
            {
              icon: Armchair,
              title: "Comfortable Workstations",
              desc: "Ergonomic seating, spacious desks, and good lighting for long productive sessions.",
            },
            {
              icon: Users,
              title: "Focus & Group Zones",
              desc: "Quiet areas for deep work and dedicated spaces for team collaboration.",
            },
            {
              icon: CalendarCheck,
              title: "Real-Time Availability",
              desc: "Check which seats or zones are available before you arrive.",
            },
            {
              icon: Clock,
              title: "Flexible Booking",
              desc: "Book by the hour or day for solo work or group sessions.",
            },
            {
              icon: ShieldCheck,
              title: "Clean & Secure Space",
              desc: "A well-maintained, professional, and secure environment to work stress-free.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Card
              key={i}
              className="group shadow-zinc-950/5 aspect-square w-full rounded-xl p-6 flex items-center justify-center text-center"
            >
              <div className="flex h-full flex-col items-center justify-center gap-y-6">
                <CardDecorator>
                  <Icon className="size-7" aria-hidden />
                </CardDecorator>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
