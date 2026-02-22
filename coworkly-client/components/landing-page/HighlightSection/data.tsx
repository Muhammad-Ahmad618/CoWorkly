import { Calendar } from "lucide-react";
import { Zap } from "lucide-react";
import { Wifi } from "lucide-react";
import { Users } from "lucide-react";
import { ReactElement } from "react";

interface DisplayData {
  icon: ReactElement;
  iconContainerColor: string;
  title: string;
  description: string;
}

export const data: DisplayData[] = [
  {
    icon: <Calendar className="w-7 h-7 text-blue-600" />,
    iconContainerColor: "bg-blue-500/10",
    title: "Instant Booking",
    description:
      "Book your preferred desk or private office in seconds. Check availability in real-time and reserve exactly what you need, when you need it",
  },
  {
    icon: <Zap className="w-7 h-7 text-green-600" />,
    iconContainerColor: "bg-green-500/10",
    title: "Flexible Plans",
    description:
      "From hourly passes to monthly memberships. Scale your plan up or down based on your needs without any long-term commitments.",
  },
  {
    icon: <Wifi className="w-7 h-7 text-orange-600" />,
    iconContainerColor: "bg-orange-500/10",
    title: "Lightning-Fast Wi-Fi",
    description:
      "Gigabit-speed internet with dedicated bandwidth. Stream, upload, and collaborate without any slowdowns.",
  },
  {
    icon: <Users className="w-7 h-7 text-purple-600" />,
    iconContainerColor: "bg-purple-500/10",
    title: "Community Events",
    description:
      "Weekly networking events, workshops, and social gatherings. Build meaningful connections with like-minded professionals.",
  },
];
