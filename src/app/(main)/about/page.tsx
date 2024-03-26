import React from 'react';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Jeff Jiang',
    position: 'Founder & CEO',
    bio: 'Jeff has over 3 years of experience in software engineering and leads our company with a vision to simplify technology for everyday use.',
    linkedin: "https://www.linkedin.com/in/jeffjiang13/",
    github: "https://github.com/jeffjiang13",
    twitter: "https://twitter.com/jeffjiang9"
  },
  {
    name: "Jeff Jiang",
    position: "Fullstack Developer",
    bio: "Jeff brings years of development experience, focusing on building scalable web applications and integrating front-end technologies with server-side logic to create seamless user experiences.",
    linkedin: "https://www.linkedin.com/in/jeffjiang13/",
    github: "https://github.com/jeffjiang13",
    twitter: "https://twitter.com/jeffjiang9"
  },
  {
    name: 'Jeff Jiang',
    position: 'Web Developer',
    bio: 'Jeff specializes in front-end development, ensuring our website and web applications run smoothly and efficiently.',
    linkedin: "https://www.linkedin.com/in/jeffjiang13/",
    github: "https://github.com/jeffjiang13",
    twitter: "https://twitter.com/jeffjiang9"
  },
];

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <section className="mb-10 mt-20">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <div className="flex justify-center items-center">
          <Image
              src={'/assets/code.webp'}
              width={200}
              height={200}
              alt="logo"
          />
        </div>
        <p className="text-lg text-center">TailorTech is dedicated to developing intuitive software that improves productivity and enhances the digital experience for users worldwide. Our mission is to create tools that empower individuals and businesses to achieve more every day.</p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="shadow-2xl shadow-blue-500 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-4">{member.position}</p>
              <p className="text-sm mb-4">{member.bio}</p>
              <div className="flex">
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 mr-2">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.github} className=" hover:text-gray-500 mr-2">
                  <FaGithubSquare size={24} />
                </a>
                <a href={member.twitter} className="text-blue-400 hover:text-blue-600">
                  <FaTwitterSquare size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="text-lg">At TailorTech, we are committed to pushing the boundaries of what technology can do for people. Our goal is to build products that not only meet the current needs of our users but also inspire the future of innovation.</p>
      </section>
    </div>
  );
};

export default About;
