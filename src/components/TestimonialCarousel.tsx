
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Catalog Genie transformed our product management workflow. We're now processing 10x more products in half the time.",
    highlight: "processing 10x more products in half the time",
    name: "Sarah Chen",
    title: "E-commerce Director, TechFlow",
    avatarColor: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    quote: "The AI descriptions are incredibly accurate and engaging. Our conversion rates increased by 40% since switching.",
    highlight: "conversion rates increased by 40%",
    name: "Marcus Rodriguez",
    title: "Founder, RetailMax",
    avatarColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    quote: "We've cut down manual data entry by over 95%. This tool is a game-changer for scaling our catalog.",
    highlight: "cut down manual data entry by over 95%",
    name: "Jessica Williams",
    title: "Head of Operations, StyleHub",
    avatarColor: "bg-gradient-to-r from-red-500 to-orange-500",
  },
  {
    quote: "The SEO-optimized titles and descriptions have significantly boosted our organic traffic. It's like having an expert on the team.",
    highlight: "boosted our organic traffic",
    name: "David Lee",
    title: "Marketing Manager, HomeGoods+",
    avatarColor: "bg-gradient-to-r from-teal-500 to-lime-500",
  },
  {
    quote: "Onboarding new products is now a breeze. What used to take days now takes minutes. Invaluable for our fast-fashion business.",
    highlight: "What used to take days now takes minutes",
    name: "Emily Carter",
    title: "CEO, FastFashion Co.",
    avatarColor: "bg-gradient-to-r from-fuchsia-500 to-rose-500",
  },
  {
    quote: "The accuracy of the AI tagging is phenomenal. It has eliminated almost all manual categorization errors for us.",
    highlight: "eliminated almost all manual categorization errors",
    name: "Michael Brown",
    title: "CTO, MegaStore Inc.",
    avatarColor: "bg-gradient-to-r from-amber-500 to-yellow-500",
  }
];

const HighlightedText = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight) {
    return <>{text}</>;
  }
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="text-[#3BC553] font-semibold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

export function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2">
            <div className="p-1 h-full">
              <Card className="bg-gray-900/30 border-gray-700 h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow text-left italic">
                    &ldquo;<HighlightedText text={testimonial.quote} highlight={testimonial.highlight} />&rdquo;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className={`w-10 h-10 ${testimonial.avatarColor} rounded-full mr-3`}></div>
                    <div className="text-left">
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default TestimonialCarousel;
