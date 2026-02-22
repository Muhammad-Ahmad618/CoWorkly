import { Card } from "@/components/ui/card";
import { data } from "./data";

export function HighlightsSection() {
  return (
    <section
      id="features"
      className="bg-white/50 py-20 sm:py-32 border-y border-stone-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-5">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 text-balance">
            Everything You Need to Succeed
          </h2>
          <div className="w-160 h-1 bg-orange-400 mx-auto rounded-full"></div>
          <p className="text-lg text-stone-600 text-balance">
            Premium features designed for modern professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {data.map((item, index) => (
            <Card
              className="p-8 border-stone-200/50 hover:shadow-lg transition-shadow bg-white"
              key={index}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${item.iconContainerColor} mb-6`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="bg-linear-to-r from-stone-50 to-orange-50 rounded-2xl p-8 sm:p-12 border border-stone-200/50">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">
            Plus All These Premium Amenities
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-stone-600">
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>24/7 Access & Security</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Professional Meeting Rooms</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Business Address Services</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Printing & Mail Services</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Premium Coffee & Beverages</span>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Parking Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
