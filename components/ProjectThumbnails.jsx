import Image from "next/image";
import styles from "./projects.module.scss";
import { IoMdTime } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";

const ProjectThumbnails = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div className={styles.thumbnail} key={project.title}>
          <h4>{project.title}</h4>
          <Image
            width="600"
            height="360"
            src={project.thumbnail}
            alt={project.title}
          />
          <div className={styles.content}>
            <p className={styles.description}>{project.description}</p>
            <p>
              <IoMdTime size="30" />
              <span>
                Project size:
                <span style={{ marginLeft: "1ch" }}>{project.size}</span>
              </span>
            </p>
            <p>
              <RiComputerLine size="30" /> Technologies used:{" "}
              {project.technologies.join(", ")}
            </p>
            <a href={project.url} target="_blank" className={styles.CTA}>
              See this project
              <BsChevronRight size="25" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectThumbnails;
