"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCode, FaPaintBrush, FaPencilAlt, FaCamera } from "react-icons/fa";

const testimonials = [
  {
    name: "AJ",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
    icon: <FaCode />,
  },
  {
    name: "Danny",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
    icon: <FaPaintBrush />,
  },
  {
    name: "Jack",
    avatar: "M",
    title: "Web Developer",
    description: "This app has changed my life, cannot imagine working without it!",
    icon: <FaPencilAlt />,
  },
  {
    name: "Jen",
    avatar: "M",
    title: "Content Creator",
    description: "The best in class, definitely worth the premium subscription!",
    icon: <FaCamera />,
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 mt-20 mb-10">
      <h2 className="text-center text-4xl font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item, index) => (
          <Card key={index} className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl mr-2">
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-0 ml-2">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
