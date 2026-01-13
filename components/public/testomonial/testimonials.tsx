import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "This co-working space has transformed my work routine. Fast Wi-Fi and comfortable seating make it a productive haven.",
  },
  {
    name: "Yves Kalume",
    role: "GDE - Android",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "I can now focus on coding and meetings without interruptions. Booking a seat is seamless via WhatsApp.",
  },
  {
    name: "Yucel Faruksahan",
    role: "Tailkits Creator",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "The mix of quiet zones and collaborative spaces is perfect. I can work alone or with my team effortlessly.",
  },
  {
    name: "Anonymous author",
    role: "Doing something",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "I love the real-time availability system. I can see which seats are free and book instantly — no hassle, no login.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Clean, secure, and well-maintained environment. I can focus on work without worrying about distractions or safety.",
  },
  {
    name: "Oketa Fred",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "Flexible booking is a game-changer. I can book hourly or full day depending on my schedule, perfect for freelancers.",
  },
  {
    name: "Zeki",
    role: "Founder of ChatExtend",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "This space combines comfort, speed, and professionalism. I can work, study, or meet my team without any distractions.",
  },
  {
    name: "Joseph Kitheka",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Booking a group zone is simple, and the environment is perfect for team projects. Highly recommend for productivity.",
  },
  {
    name: "Khatab Wedaa",
    role: "MerakiUI Creator",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "The comfortable workstations and high-speed Wi-Fi make this space ideal for coding, designing, or studying for hours.",
  },
  {
    name: "Rodrigo Aguilar",
    role: "TailwindAwesome Creator",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "I love the layout and organization of this co-working space. It’s easy to find a seat and start working immediately.",
  },
  {
    name: "Eric Ampire",
    role: "Mobile Engineer at @BRPNews • @GoogleDevExpert for Android",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Whether solo or in a team, this space provides everything needed for productive work. Booking is intuitive and fast.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "A safe, clean, and professional environment. Perfect for long hours of work or study without any interruptions.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Loved by the Community</h2>
            <p className="mt-6">
              Harum quae dolore orrupti aut temporibus ariatur.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
            {testimonials.map(({ name, role, quote, image }, index) => (
              <Card key={index} className="h-full">
                <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                  <Avatar className="size-9">
                    <AvatarImage
                      alt={name}
                      src={image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-medium">{name}</h3>

                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {role}
                    </span>

                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        {quote}
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
