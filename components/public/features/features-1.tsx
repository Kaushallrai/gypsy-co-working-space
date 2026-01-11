import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Everything You Need to Stay Productive
          </h2>
          <p className="mt-4">
            A modern co-working space designed for focused work, study, and
            collaboration.
          </p>
        </div>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-6xl:grid-cols-6 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <Card className="group shadow-zinc-950/5 aspect-square flex flex-col items-center text-center p-6 rounded-xl">
            <div className="flex flex-col items-center text-center justify-center flex-1 gap-y-6">
              <CardDecorator>
                <Wifi className="size-7" aria-hidden />
              </CardDecorator>
              <h3 className="font-semibold text-lg">High-Speed Internet</h3>
              <p className="text-sm text-muted-foreground">
                Fast and reliable Wi-Fi for online meetings, studying, and
                uninterrupted work.
              </p>
            </div>
          </Card>

          <Card className="group shadow-zinc-950/5 aspect-square flex flex-col items-center text-center p-6 rounded-xl">
            <div className="flex flex-col items-center text-center justify-center flex-1 gap-y-6">
              <CardDecorator>
                <Armchair className="size-7" aria-hidden />
              </CardDecorator>
              <h3 className="font-semibold text-lg">
                Comfortable Workstations
              </h3>
              <p className="text-sm text-muted-foreground">
                Ergonomic seating, spacious desks, and good lighting for long
                productive sessions.
              </p>
            </div>
          </Card>

          <Card className="group shadow-zinc-950/5 aspect-square flex flex-col items-center text-center p-6 rounded-xl">
            <div className="flex flex-col items-center text-center justify-center flex-1 gap-y-6">
              <CardDecorator>
                <Users className="size-7" aria-hidden />
              </CardDecorator>
              <h3 className="font-semibold text-lg">Focus & Group Zones</h3>
              <p className="text-sm text-muted-foreground">
                Quiet areas for deep work and dedicated spaces for team
                collaboration.
              </p>
            </div>
          </Card>

          <Card className="group shadow-zinc-950/5 aspect-square flex flex-col items-center text-center p-6 rounded-xl">
            <div className="flex flex-col items-center text-center justify-center flex-1 gap-y-6">
              <CardDecorator>
                <CalendarCheck className="size-7" aria-hidden />
              </CardDecorator>
              <h3 className="font-semibold text-lg">Real-Time Availability</h3>
              <p className="text-sm text-muted-foreground">
                Check which seats or zones are available before you arrive.
              </p>
            </div>
          </Card>

          <Card className="group shadow-zinc-950/5 aspect-square flex flex-col items-center text-center p-6 rounded-xl">
            <div className="flex flex-col items-center text-center justify-center flex-1 gap-y-6">
              <CardDecorator>
                <Clock className="size-7" aria-hidden />
              </CardDecorator>
              <h3 className="font-semibold text-lg">Flexible Booking</h3>
              <p className="text-sm text-muted-foreground">
                Book by the hour or day for solo work or group sessions.
              </p>
            </div>
          </Card>

          <Card className="group shadow-zinc-950/5 aspect-square flex flex-col items-center text-center p-6 rounded-xl">
            <div className="flex flex-col items-center text-center justify-center flex-1 gap-y-6">
              <CardDecorator>
                <ShieldCheck className="size-7" aria-hidden />
              </CardDecorator>
              <h3 className="font-semibold text-lg">Clean & Secure Space</h3>
              <p className="text-sm text-muted-foreground">
                A well-maintained, professional, and secure environment to work
                stress-free.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
