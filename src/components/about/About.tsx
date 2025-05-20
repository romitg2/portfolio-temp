import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Romit, if you haven&apos;t already gathered that by now. I&apos;m a problem solver turned software engineer from Surat, India. I specialize in full-stack development, primarily with Next.js, even though I like to stay language or framework agnostic and focus more on solving problem with required tools to ship fast to get things done.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m currently building small projects to learn technical skills and contributing to open source projects to get hands on experience working with production level code.
            </p>
          </Reveal>
          {/* <Reveal>
            <p className="leading-relaxed text-zinc-300">
            Curretly I am contributing to Cal.com and 
            </p>
          </Reveal> */}
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
