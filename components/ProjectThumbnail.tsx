import Image from "next/image";
import styles from "./projects.module.scss";
import { IoMdTime } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";
import { ProjectThumbData } from "../src/types";

const ProjectThumbnails = ({
  project,
  bgClass,
  buttonHoverBg,
}: {
  project: ProjectThumbData;
  bgClass: `bg-${string}-${number}`;
  buttonHoverBg: `bg-${string}-${number}`;
}) => {
  // const color =
  return (
    <>
      <div className={`flex flex-col w-full ${bgClass}`} key={project.title}>
        <h4 className="py-3 text-2xl font-bold text-center">{project.title}</h4>
        <div className="flex items-end justify-center w-full">
          <Image
            className="outline outline-black sm:w-2/3"
            width="576"
            height="288"
            src={project.thumbnail}
            alt={project.title}
          />
        </div>
        <div className="flex flex-col h-full gap-4 p-3">
          <p className="h-full">{project.description}</p>
          <div>
            <p className="flex items-center gap-2 mb-2">
              <IoMdTime size="30" />
              <span>
                Project size:
                <span>{" " + project.size}</span>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <RiComputerLine size="30" /> Technologies used:
              {" " + project.technologies.join(", ")}
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            className={`flex w-full p-3 transition border-2 border-b-4 rounded-md
            text-white bg-indigo-500
            shadow-[-2px_4px_5px_1px_rgba(0,0,0,0.5)] 
            hover:shadow-[-1px_2px_3px_1px_rgba(0,0,0,0.5)] 
             `}
          >
            See this project
            {/* <BsChevronRight size="25" fontWeight="100" />  */}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectThumbnails;
