import { ReactElement } from "react";
import { Users, Zap, Wifi } from "lucide-react";

interface ForYouSectionData {
  icon: ReactElement;
  iconContainerColor: string;
  title: string;
  cardShadow?: string;
  description: string;
  features: string[];
}

export const data: ForYouSectionData[] = [
  {
    icon: <Users className="text-white w-7 h-7" />,
    iconContainerColor: "bg-linear-to-r from-blue-400 to-blue-600",
    title: "Freelancer",
    description:
      "Escape the home office routine. Access professional spaces, networking opportunities, and the structure you need to thrive independently.",
    features: [
      "Hourly & daily passes",
      "No long-term commitment",
      "Meeting room credits",
    ],
  },

  {
    icon: <Zap className="text-white w-7 h-7" />,
    iconContainerColor: "bg-linear-to-r from-orange-400 to-orange-600",
    title: "Teams & Startups",
    cardShadow:
      "border-orange-500/20 bg-linear-to-b from-orange-50/50 to-white",
    description:
      "Dedicated desks and private offices for growing teams. Collaboration spaces, high-speed internet, and room to expand.",
    features: [
      "Team discounts",
      "Dedicated account manager",
      "Custom solutions",
    ],
  },

  {
    icon: <Wifi className="text-white w-7 h-7" />,
    iconContainerColor: "bg-linear-to-r from-green-400 to-green-600",
    title: "Remote Workers",
    description:
      "Work with a stable internet connection and professional environment. Perfect for days when you need to escape the home office.",
    features: ["Flexible monthly plans", "Bring your team", "24/7 access"],
  },
];
