import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 border-b">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Flexible Plans for Every Workspace Need
          </h1>
          <p>
            Whether you need a few hours, a full day, or a dedicated group
            space, we have the perfect plan to match your schedule and
            productivity goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {/* Hourly Pass */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Hourly Pass</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                Rs. ___ / hour
              </span>
              <CardDescription className="text-sm">
                Perfect for short work or study sessions
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {[
                  "High-speed Wi-Fi",
                  "Comfortable workstation",
                  "Access to focus zones",
                  "Power outlets at every desk",
                  "Clean & professional environment",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="/availability">Check Availability</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Day Pass */}
          <Card className="relative">
            <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
              Most Popular
            </span>

            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">Day Pass</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  Rs. ___ / day
                </span>
                <CardDescription className="text-sm">
                  Ideal for full-day productivity
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {[
                    "Unlimited hours for the day",
                    "Access to focus & group zones",
                    "High-speed Wi-Fi",
                    "Comfortable seating & spacious desks",
                    "Secure & well-maintained environment",
                    "Flexible booking options",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild className="w-full">
                  <Link href="/availability">Check Availability</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>

          {/* Group Pass */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Group Booking</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                Custom Pricing
              </span>
              <CardDescription className="text-sm">
                Perfect for teams, workshops, or study groups
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Multiple seat reservations",
                  "Access to collaborative zones",
                  "High-speed Wi-Fi",
                  "Comfortable & professional setup",
                  "Flexible time slots",
                  "Assisted booking support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="https://wa.me/XXXXXXXXXX">Contact for Booking</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
