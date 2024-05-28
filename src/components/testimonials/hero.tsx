"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MarQuee from "react-fast-marquee";

type Props = {};

const rowOneImages = [
  {
    url: "/assets/1.png",
  },
  {
    url: "/assets/2.png",
  },
  {
    url: "/assets/3.png",
  },
  {
    url: "/assets/4.png",
  },
  {
    url: "/assets/5.png",
  },
  {
    url: "/assets/11.png",
  },
  {
    url: "/assets/12.png",
  },
  {
    url: "/assets/13.png",
  },
  {
    url: "/assets/14.png",
  },
  {
    url: "/assets/15.png",
  },
  {
    url: "/assets/16.png",
  },
];

const rowTwoImages = [
  {
    url: "/assets/6.png",
  },
  {
    url: "/assets/7.png",
  },
  {
    url: "/assets/8.png",
  },
  {
    url: "/assets/9.png",
  },
  {
    url: "/assets/10.png",
  },
  {
    url: "/assets/17.png",
  },
  {
    url: "/assets/18.png",
  },
  {
    url: "/assets/19.png",
  },
  {
    url: "/assets/20.png",
  },
  {
    url: "/assets/21.png",
  },
];

const Hero = (props: Props) => {
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center mt-10">
      <div>
        <h1 className="font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
          Make <span className="text-blue-500">The Website</span> <br /> With Your{" "}
          <br /> Imagination
        </h1>
        <div className="w-[100vw] mb-5 md:mb-20 relative">
          <div className="rotate-[-5deg] mt-10 md:mt-[6.5rem]">
          <MarQuee gradient={false}>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 h-[150px] md:h-[300px] w-[250px] m-2 md:w-[500px] rounded-[20px] transition-all duration-300 transform hover:scale-105 hover:border-blue-200"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
            <MarQuee gradient={false} delay={5}>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 h-[150px] md:h-[300px] w-[250px] m-2 md:w-[500px] rounded-[20px] transition-all duration-300 transform hover:scale-105 hover:border-blue-200"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
