import React from "react";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  const skills = [
    "Javascript",
    "React: NextJS | Gatsby | Remix",
    "React Native",
    "VueJS & Nuxt",
    "NodeJS/Express",
    "Typescript",
    "GraphQL",
  ];

  return (
    <section id="about" className="py-24 min-h-screen">
      <h2 className="mb-24 font-medium text-3xl md:text-5xl">About.</h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col gap-6">
          <p>
            I am a product-minded Software Engineer with 4 years of experience
            building software and great experiences within the Javascript
            Ecosystem. I&apos;m passionate about building products that
            positively impact people&apos;s lives worldwide by working with
            various startups and product-led organizations.
          </p>
          <p>
            I am interested in working with startups and product-led
            organizations, building solutions for the SaaS/B2B/B2C sector. My
            ideal work environment is one driven by impact, where I can work as
            part of a team that encourages open communication and collaboration
            between everyone.
          </p>
          <p>
            I have built websites and applications using tools like React,
            VueJS, Typescript, and GraphQL. I have a good understanding of the
            whole software development lifecycle and how it impacts the delivery
            of a product, and I have developed the following skills over the
            years:
          </p>
          <ul className="pl-6 list-disc">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3 order-1 md:order-2 h-[440px] relative">
          <Image src="/avatar.jpeg" alt="profile" fill className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};
