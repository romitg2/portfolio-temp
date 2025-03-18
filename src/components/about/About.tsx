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
              ey! I&apos;m Romit, if you haven&apos;t already gathered that by now. I&apos;m a problem solver turned software engineer from Surat, India. I specialize in full-stack development, primarily with Next.js and DynamoDB, but I enjoy working with any tech that fits the job.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m currently building AI-powered SaaS applications and working on AI agents at the application layer. I also have a strong foundation in competitive programming and system design, which helps me create efficient and scalable solutions.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
    I’m actively exploring opportunities where I can merge my passion for AI, 3D experiences, and scalable applications. If you think we’d make a great team, let’s connect 🔗
            </p>
          </Reveal>
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
