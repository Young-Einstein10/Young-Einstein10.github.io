import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowForwardIcon } from "../icons";
import FindschoolsCover from "~/public/img/findschools.png";
import HelpmeAlertCover from "~/public/img/helpmealert.png";
import MyDecortradeCover from "~/public/img/mydecortrade.png";
import MyKontainerCover from "~/public/img/mykontainer.png";

export const Projects = () => {
  const projects = [
    {
      name: "Findschool",
      description:
        "An early-stage startup working on a solution to connect parents to the best schools around their location.",
      url: "https://findschools.co",
      coverImage: FindschoolsCover,
      stacks: [
        "NextJS",
        "React Query",
        "Typescript",
        "ChakraUI",
        "NodeJS",
        "Express",
        "PostgreSQL",
      ],
    },
    // {
    //   name: "Faroo",
    //   description: "A peer-to-peer crime reporting and early warning system app that lets you report incidents such as burglary, assault, or even simply feeling unsafe by placing stickers on the map that represent incidents. Other users near you can be notified of these incidents, thereby keeping the community safe.",
    //   url: "",
    //   coverImage: "https://images.unsplash.com/photo-1596324231896-94",
    //   stacks: [],
    // },
    {
      name: "HelpmeAlert",
      description:
        "A safety emergency tool you can use on the Twitter Platform to notify your emergency contacts of any crisis situation.",
      url: "https://helpmealert.vercel.app",
      coverImage: HelpmeAlertCover,
      stacks: [
        "NextJS",
        "Typescript",
        "ChakraUI",
        "Twitter API V2",
        "NodeJS",
        "PostgreSQL",
      ],
    },
    {
      name: "MyKontainer",
      description:
        "A shipping/freight startup that helps merchants track shipments and book containers for transport.",
      url: "https://mykontainer.app",
      coverImage: MyKontainerCover,
      stacks: [
        "Javascript",
        "React",
        "Redux",
        "Typescript",
        "Python",
        "Django",
      ],
    },
    {
      name: "MyDecortrade",
      description:
        "MyDecorTrade is an all-in-one interior decor hub. Shop quality items, hire vetted artisans, and book hassle-free moving services with flexible payments.",
      url: "https://www.mydecortrade.com",
      coverImage: MyDecortradeCover,
      stacks: ["VueJS", "NuxtJS", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="py-24 min-h-screen">
      <div>
        <h2 className="mb-24 font-medium text-5xl">Projects.</h2>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group rounded-[32px] border border-zinc-800 hover:border-zinc-500 transition-colors"
              >
                <Link href="#">
                  <div className="p-4">
                    <div className="relative h-full">
                      <Image
                        className="rounded-2xl"
                        src={project.coverImage}
                        alt="Project"
                        // fill
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col px-4 pt-3 pb-4 gap-2">
                      <p className="text-[1.5rem] leading-8">{project.name}</p>
                      <p className="text-[.875rem] leading-5">
                        {project.description}
                      </p>

                      <div className="flex gap-2 items-center">
                        {["React", "Typescript", "NextJS"].map((tech) => (
                          <span
                            key={tech}
                            className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* <div className="flex items-center pl-8 pb-8 font-medium text-[.875rem]">
                      <ArrowForwardIcon className="mr-1" />
                      Visit
                    </div> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
