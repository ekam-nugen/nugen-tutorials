import { ClockFading, BookOpenCheck, School } from "lucide-react";

export const getBannerFeatures = (duration: string) => [
  {
    icon: <ClockFading className="text-[#f7846f]" />,
    title: duration,
    subtitle: "Training Duration",
  },
  {
    icon: <BookOpenCheck className="text-[#f7846f]" />,
    title: "Weekday & Weekend",
    subtitle: "Flexible Schedules",
  },
  {
    icon: <School className="text-[#f7846f]" />,
    title: "Live Online",
    subtitle: "Learning Mode",
  },
];
