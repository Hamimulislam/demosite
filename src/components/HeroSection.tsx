import { personalInfo } from "@/lib/data";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  ReadCvLogo,
  XLogo,
  At
} from "@phosphor-icons/react";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-8">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Image (shown on top in mobile) */}
        <div className="shrink-0 order-1 md:order-2">
          <img
            src={`${import.meta.env.BASE_URL}01.jpg`}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg mx-auto md:mx-0"
          />
        </div>

        {/* Name and Details */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {personalInfo.name}
          </h1>

          <p className="text-lg text-muted-foreground mb-4">
            Incoming PhD Student @{" "}
            {personalInfo.affiliation}
          </p>

          <div className="flex justify-center md:justify-start gap-3 mb-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-0"
              aria-label="Email"
            >
              <At size={21} weight="duotone" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={21} weight="duotone" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1"
              aria-label="GitHub"
            >
              <GithubLogo size={21} weight="duotone" />
            </a>
            {personalInfo.x && (
              <a
                href={personalInfo.x}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1"
                aria-label="X"
              >
                <XLogo size={21} weight="duotone" />
              </a>
            )}
            <a
              href={personalInfo.CV}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1"
              aria-label="CV"
            >
              <ReadCvLogo size={21} weight="duotone" />
            </a>
          </div>
        </div>
      </div>
      <div className="container max-w-4xl mx-auto px-6 md:px-4 mt-6">
        <p className="text-muted-foreground text-justify text-md leading-normal">
          Hello! I'm an incoming PhD student in Micro & Nanoscale Systems Engineering at Louisiana Tech University, 
            where I will be working in Dr. Andrew Peters' lab. My current research involves the use of advanced atomistic and coarse-grained simulation methods
              to understand and control ordered soft matter systems. Outside of academics, I love spending my free time playing video games or watching TV series.
        </p>
      </div>
      <div className="container max-w-4xl mx-auto px-6 md:px-4 mt-4">
        <p className="text-muted-foreground text-justify text-md leading-normal">
          If you want to discuss something or need any more information, please feel free to contact me 
            via <div className="relative group inline-block">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    email
                  </a>
                  <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    hamimulislam99@gmail.com
                  </span>.
                </div>
        </p>
      </div>
    </section>
  );
}
