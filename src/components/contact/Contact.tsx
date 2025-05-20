import { AiFillMail, AiOutlineTwitter } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import Link from "next/link";

export default function ContactSection() {
  const socials = [
    {
      href: "https://x.com/RomitG249541",
      label: "Twitter",
      icon: <AiOutlineTwitter className="text-indigo-500" />,
    },
  ];

  return (
    <section id="contact" className="section-wrapper">
      <SectionHeader title="Contact" dir="l" />

      <div className="mx-auto max-w-xl rounded-xl bg-zinc-800 p-8 md:p-12">
        <Reveal width="w-full">
          <h2 className="mb-6 text-center text-4xl font-extrabold md:text-5xl">
            Get in Touch<span className="text-indigo-500">.</span>
          </h2>
        </Reveal>

        <Reveal width="w-full">
          <p className="mb-8 text-center text-zinc-300 leading-relaxed">
            Whether you have a project idea, collaboration opportunity, or just want to say hello,
            drop me a line or connect on social media.
          </p>
        </Reveal>

        <Reveal width="w-full">
          <div className="flex flex-col items-center space-y-6">
            <Link
              href="mailto:romitgabani1@gmail.com"
              aria-label="Send an email to Romit Gabani"
              className="flex items-center gap-2 rounded-lg border border-indigo-500 px-4 py-2 text-lg font-medium text-indigo-400 transition-colors hover:bg-indigo-500 hover:text-white"
            >
              <AiFillMail size={24} />
              <span>romitgabani1@gmail.com</span>
            </Link>

            <div className="flex space-x-6">
              {socials.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${label}`}
                  className="flex items-center gap-2 text-indigo-300 hover:text-indigo-100 hover:underline"
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
