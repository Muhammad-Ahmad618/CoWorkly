import { Card } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-orange-50 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 text-balance">
            What Our Members Say
          </h2>
          <p className="text-lg text-stone-600 text-balance">
            Join thousands of satisfied professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="p-8 border-stone-200/50 bg-white">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <User />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <p className="text-stone-600 leading-relaxed mb-6">
              "WorkHub transformed how I work. The community is incredible, and
              I've already made meaningful connections that led to
              collaborations."
            </p>
            <div>
              <p className="font-bold text-stone-900">Sarah Chen</p>
              <p className="text-sm text-stone-500">Freelance Designer</p>
            </div>
          </Card>

          {/* Testimonial 2 */}
          <Card className="p-8 border-stone-200/50 bg-white">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <User />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <p className="text-stone-600 leading-relaxed mb-6">
              "We scaled from 3 to 12 team members and WorkHub scaled with us.
              The flexibility and professional environment are unbeatable."
            </p>
            <div>
              <p className="font-bold text-stone-900">Marcus Rodriguez</p>
              <p className="text-sm text-stone-500">Startup Founder</p>
            </div>
          </Card>

          {/* Testimonial 3 */}
          <Card className="p-8 border-stone-200/50 bg-white">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <User />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <p className="text-stone-600 leading-relaxed mb-6">
              "Working from home got lonely. WorkHub gave me the structure and
              social connection I was missing. Best decision ever."
            </p>
            <div>
              <p className="font-bold text-stone-900">Emma Thompson</p>
              <p className="text-sm text-stone-500">Remote Software Engineer</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
