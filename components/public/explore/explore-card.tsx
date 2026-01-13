"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type SpaceCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export default function ExploreSpaces() {
  const spaces: SpaceCard[] = [
    {
      id: "focus-zone",
      title: "Focus Zone",
      description:
        "Quiet, distraction-free spaces perfect for deep work, coding, and concentration.",
      image: "/hero-cow.jpg",
      features: ["Silent environment", "Individual desks", "Premium internet"],
    },
    {
      id: "group-zone",
      title: "Group Zone",
      description:
        "Collaborative spaces designed for teams to work together on projects and meetings.",
      image: "/hero-cow.jpg",
      features: ["Large tables", "Whiteboard access", "Team-friendly setup"],
    },
    {
      id: "meeting-room",
      title: "Meeting Rooms",
      description:
        "Professional meeting spaces equipped for client calls, interviews, and presentations.",
      image: "/hero-cow.jpg",
      features: ["Video conferencing", "Presentation setup", "Private space"],
    },
    {
      id: "open-seating",
      title: "Open Seating",
      description:
        "Flexible seating with a mix of work styles – perfect for freelancers and casual workers.",
      image: "/hero-cow.jpg",
      features: [
        "Flexible layout",
        "Social atmosphere",
        "Hot-desking available",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-32 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            Explore Our Spaces
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect zone for your work style. From quiet focus areas
            to collaborative team spaces, we have everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space) => (
            <Card
              key={space.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-48 md:h-56 overflow-hidden bg-muted">
                <Image
                  src={space.image || "/placeholder.svg"}
                  alt={space.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <CardContent className="flex flex-col flex-1 gap-4 pt-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {space.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {space.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {space.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-auto group bg-transparent"
                >
                  <a href="#availability">
                    <span>View Availability</span>
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
