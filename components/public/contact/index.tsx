"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/hero-cow.jpg",
    headline: "CONTACT US",
  },
];

export default function HeroContact() {
  const slide = slides[0]; // Only one static slide

  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden transform scale-[1.1] transition-transform duration-[4500ms] ease-out">
        <Image
          src={slide.image || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={80}
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />

      {/* Slide Content */}
      <div className="relative z-20 px-6 sm:px-10 md:px-16 lg:px-24 max-w-4xl mx-auto h-full flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key="hero-content"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3, delayChildren: 0.2 },
              },
              exit: {
                transition: { staggerChildren: 0.1, staggerDirection: -1 },
              },
            }}
            className="flex flex-col items-center"
          >
            <motion.h1
              className="text-6xl md:text-6xl lg:text-7xl text-white tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
                exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
              }}
            >
              {slide.headline}
            </motion.h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
