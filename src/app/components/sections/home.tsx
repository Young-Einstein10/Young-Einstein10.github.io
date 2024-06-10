import { GitHubIcon, LinkedInIcon, TwitterIcon } from "../icons";

export function Home() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: GitHubIcon,
      href: "https://github.com/Young-Einstein10",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      href: "https://twitter.com/zaydabdulrahman",
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/aabdulyusuf",
    },
  ];
  return (
    <section
      id="home"
      // mt-[-134px]
      className="min-h-screen flex flex-col justify-center"
    >
      <div>
        <div className="font-light mb-6">
          <p className="mb-4 text-base md:text-xl">Hi👋, my name is</p>
          <h1 className="mb-6 font-medium text-4xl md:text-5xl lg:text-8xl">
            Abdulrahman Yusuf
          </h1>
          <p className="mb-4 md:font-medium text-lg md:text-2xl">
            Software Engineer, Technical Writer and Open-Source Enthusiast
          </p>

          <p className="max-w-3xl text-[#909090]">
            a product-minded software engineer based in Lagos, Nigeria. Has
            extensive experience working with technologies within the web and
            mobile ecosystem and passionate about creating tech-enabled
            solutions to problems around his environment.
          </p>
        </div>
        <ul className="socials flex items-center gap-x-4">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center text-sm md:text-base hover:underline group"
              >
                <span className="mr-1 text-[#606060] transition-colors group-hover:text-white">
                  <link.icon className="w-5 h-5" />
                </span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
