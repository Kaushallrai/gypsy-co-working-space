import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            About Our Co-Working Space
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Designed for professionals who value productivity, collaboration,
            and flexibility.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 mb-16 md:mb-24">
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We believe that the future of work is flexible, collaborative, and
              community-driven. Our co-working space is built to empower
              entrepreneurs, freelancers, and remote teams to do their best work
              while building meaningful connections.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you need a quiet space for focused work, a room for team
              meetings, or an open area for collaboration, we have the perfect
              setup for you.
            </p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl aspect-video flex items-center justify-center">
            <img
              src="/modern-coworking-space-office.jpg"
              alt="Our co-working space"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16 md:mb-24">
          <h3 className="mb-8 text-center text-2xl font-semibold">
            Our Core Values
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 rounded-xl flex flex-col gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold">Productivity</h4>
              <p className="text-sm text-muted-foreground">
                We create an environment where focus and efficiency thrive with
                premium amenities and distraction-free zones.
              </p>
            </Card>

            <Card className="p-6 rounded-xl flex flex-col gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold">Community</h4>
              <p className="text-sm text-muted-foreground">
                We foster a vibrant community where professionals network,
                collaborate, and grow together.
              </p>
            </Card>

            <Card className="p-6 rounded-xl flex flex-col gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                We embrace modern technology and flexible solutions to adapt to
                your evolving work needs.
              </p>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl p-8 md:p-12">
          <h3 className="mb-6 text-2xl font-semibold">Why Choose Our Space?</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Prime Location:</strong>{" "}
                Easy access to public transport and local amenities
              </p>
            </li>
            <li className="flex gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">24/7 Access:</strong> Work
                whenever you want with secure keycard entry
              </p>
            </li>
            <li className="flex gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-foreground flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">
                  All-Inclusive Pricing:
                </strong>{" "}
                Utilities, Wi-Fi, and amenities included
              </p>
            </li>
            <li className="flex gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-foreground shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">
                  Professional Environment:
                </strong>{" "}
                Safe, clean, and well-maintained spaces
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
