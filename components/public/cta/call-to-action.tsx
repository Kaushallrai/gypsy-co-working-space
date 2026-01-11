import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready to Book Your Work Space?
          </h2>

          <p className="mt-4">
            Check available seats, choose your time, and reserve your spot
            instantly through WhatsApp or Instagram.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#availability">
                <span>Check Availability</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="https://wa.me/XXXXXXXXXX" target="_blank">
                <span>Book a Space</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
