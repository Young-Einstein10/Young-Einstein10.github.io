import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 min-h-screen">
      <h2 className="mb-24 font-medium text-3xl md:text-5xl">Get In Touch.</h2>

      <div className="flex flex-1 flex-col">
        <div>
          <p className="text-sm md:text-base text-[#909090]">
            Have a question or proposal, or just want to say hello? Go ahead.
          </p>
          <Link
            href="mailto:aabdulrahmanyusuf@gmail.com"
            className="text-2xl md:text-5xl italic font-normal hover:underline"
          >
            aabdulrahmanyusuf@gmail.com
          </Link>
          {/* <button className="">Send me a DM</button> */}
        </div>
      </div>
    </section>
  );
};
