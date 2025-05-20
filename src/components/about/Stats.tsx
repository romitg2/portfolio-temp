import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Languages &amp; Tools</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>NextJS</Chip>
            <Chip>TypeScript</Chip>
            <Chip>TailwindCSS</Chip>
            <Chip>Redis</Chip>
            <Chip>Postgres</Chip>
            <Chip>NodeJS</Chip>
            <Chip>Express</Chip>
            <Chip>tRPC</Chip>
            <Chip>AWS</Chip>
          </div>
        </div>
      </Reveal>
      {/* <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Rust</Chip>
            <Chip>Tailwind</Chip>
            <Chip>Java</Chip>
            <Chip>Spring</Chip>
            <Chip>Figma</Chip>
            <Chip>Whimsical</Chip>
            <Chip>Planetscale</Chip>
            <Chip>GraphQL</Chip>
            <Chip>Python</Chip>
            <Chip>FastAPI</Chip>
          </div>
        </div>
      </Reveal> */}
    </div>
  );
};
