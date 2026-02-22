import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroImage from "@/public/webp/heroImage.webp";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight text-balance mb-6">
            Your Perfect Workspace Awaits
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed text-balance mb-8">
            Join thousands of freelancers, startups, and remote workers who've
            transformed how they work. Flexible plans, premium amenities, and a
            thriving community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-hover text-white gap-2 cursor-pointer"
            >
              Book Your Space <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-stone-300 cursor-pointer text-stone-900 hover:bg-stone-50 bg-transparent"
            >
              Learn More
            </Button>
          </div>
          <p className="text-sm text-stone-500 mt-8">
            ✨ No credit card required. Start exploring today.
          </p>
        </div>
        <div className="relative h-96 sm:h-full">
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl shadow-gray-300 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
