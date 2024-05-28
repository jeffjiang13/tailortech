"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCode, FaPaintBrush, FaPencilAlt, FaCamera, FaProjectDiagram, FaBullhorn, FaLightbulb, FaChartLine } from "react-icons/fa";
import Hero from "./hero"
const testimonials = [
  {
    name: "AJ",
    avatar: "J",
    title: "Software Engineer",
    description: "This application has revolutionized my workflow. Highly recommend!",
    icon: <FaCode />,
  },
  {
    name: "Danny",
    avatar: "A",
    title: "Designer",
    description: "An essential tool for my daily design tasks. It saves me so much time!",
    icon: <FaPaintBrush />,
  },
  {
    name: "Mia",
    avatar: "M",
    title: "Project Manager",
    description: "The seamless integration with our existing tools is a game-changer.",
    icon: <FaProjectDiagram />,
  },
  {
    name: "Chris",
    avatar: "C",
    title: "Marketing Specialist",
    description: "Our campaigns have become more efficient and effective with this app.",
    icon: <FaBullhorn />,
  },
  {
    name: "Jack",
    avatar: "M",
    title: "Web Developer",
    description: "This app has streamlined my development process. I can't imagine working without it!",
    icon: <FaPencilAlt />,
  },
  {
    name: "Jen",
    avatar: "J",
    title: "Content Creator",
    description: "Absolutely the best tool for content creation. Worth every penny!",
    icon: <FaCamera />,
  },
  {
    name: "Laura",
    avatar: "L",
    title: "Business Analyst",
    description: "The insights and analytics provided are top-notch. Highly valuable!",
    icon: <FaChartLine />,
  },
  {
    name: "Sam",
    avatar: "S",
    title: "Entrepreneur",
    description: "This app has empowered my business. It’s an invaluable resource!",
    icon: <FaLightbulb />,
  },
];


export const LandingContent = () => {
  return (
    <div className="px-8 pb-20 mt-20 w-full">
      <h2 className="text-center text-4xl font-extrabold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item, index) => (
          <Card key={index} className="border-2 shadow-lg shadow-blue-300 p-2 transition-all duration-300 transform hover:scale-105 hover:border-blue-200">
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
      <Hero />
    </div>
  );
};
