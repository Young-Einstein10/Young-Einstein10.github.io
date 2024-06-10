import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

export const Experience = () => {
  const experiences = [
    {
      company: "Google",
      role: "Software Engineer",
      duration: "2020 - 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet possimus voluptatibus dolor velit eius alias. Eaque sunt explicabo corrupti quaerat repudiandae dicta beatae aperiam possimus, non iusto aliquam quam vitae?",
    },
    {
      company: "Amazon",
      role: "Software Engineer",
      duration: "2020 - 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet possimus voluptatibus dolor velit eius alias. Eaque sunt explicabo corrupti quaerat repudiandae dicta beatae aperiam possimus, non iusto aliquam quam vitae?",
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      duration: "2020 - 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet possimus voluptatibus dolor velit eius alias. Eaque sunt explicabo corrupti quaerat repudiandae dicta beatae aperiam possimus, non iusto aliquam quam vitae?",
    },
  ];

  return (
    <section id="work" className="py-24 min-h-screen">
      <h2 className="mb-24 font-medium text-3xl md:text-5xl">
        Places I&apos;ve worked.
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {experiences.map((experience) => (
          <AccordionItem key={experience.company} value={experience.company}>
            <AccordionTrigger className="py-6 px-4 [&[data-state=open]]:bg-zinc-800 hover:bg-zinc-800 no-underline">
              <div className="flex flex-1 items-center justify-between text-lg">
                <div className="flex gap-4">
                  <div className="bg-gray-300 w-14 h-14 rounded-full"></div>
                  <div className="flex items-start flex-col">
                    <p>{experience.role}</p>
                    <p>{experience.company}</p>
                  </div>
                </div>
                <p>{experience.duration}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="py-8 px-4 text-lg">
              {experience.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
