import { Card } from "@/components/ui/card";
import { data } from "./data";

export function ForYouSection() {
  return (
    <section
      id="for-you"
      className="bg-stone-50/50 py-20 sm:py-32 border-y border-stone-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-5">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 text-balance">
            Perfect for Everyone
          </h2>
          <div className="w-100 h-1 bg-orange-400 mx-auto rounded-full"></div>
          <p className="text-lg text-stone-600 text-balance">
            Whether you're going solo or scaling a team, we have the right plan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Card
              className={`p-8 hover:shadow-lg ${item.cardShadow ?? "border-stone-200/50 bg-white"} transition-shadow`}
              key={index}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.iconContainerColor}`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                {item.description}
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                {item.features.map((feature, index) => (
                  <li className="flex gap-2" key={index}>
                    <span className="text-orange-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
