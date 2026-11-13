import { ArrowUpRight, Download } from "lucide-react";

export default function Banner() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center bg-[url('/images/HeroBG.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-overlay" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center md:pt-26 lg:pt-32">
        <h1 className="text-4xl font-bold text-primary sm:text-6xl lg:text-[4.2rem]">
          <span className="text-ink">Hi, I&apos;m</span> HAMMAD SIDDIQUI
        </h1>
        <p className="mt-2 text-lg text-muted sm:text-2xl lg:text-3xl">Web Application Developer</p>
        <p className="mt-3 max-w-2xl text-base text-muted lg:text-lg">
          Building modern interfaces with clean code and creativity. Passionate about creating
          seamless user experiences.
        </p>

        <div className="mt-6 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-3 rounded-full bg-primary py-2.5 pr-6 pl-5 text-sm font-semibold text-white transition hover:bg-primary-hover sm:text-base"
          >
            <span className="relative grid size-6 place-items-center overflow-hidden rounded-full bg-white text-black">
              <ArrowUpRight size={14} className="transition duration-300 group-hover:translate-x-full group-hover:-translate-y-full" />
              <ArrowUpRight size={14} className="absolute -translate-x-full translate-y-full transition duration-300 group-hover:translate-0" />
            </span>
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-line bg-btn px-8 py-2.5 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 text-xs text-muted md:flex-row md:gap-6 md:text-sm">
          <span className="flex items-center gap-2">
            <span className="size-2.5 animate-pulse rounded-full bg-primary" />
            Available for freelance
          </span>
          <span className="hidden h-5 w-px bg-muted md:block" />
          <a href="/resume.pdf" download className="flex items-center gap-1 hover:text-primary">
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-6">
        <div className="flex h-12 w-6 justify-center rounded-full border-2 border-primary p-1">
          <div className="size-2 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}