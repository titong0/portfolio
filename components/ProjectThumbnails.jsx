import styles from "./projects.module.scss";
import { IoMdTime } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";

const SIZE_COLORS = {
  small: "green",
  "small-medium": "yellow",
  medium: "red",
};

const ProjectThumbnails = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div className={styles.thumbnail}>
          <h4
            style={{
              background: project.bg,
            }}
          >
            {project.title}
          </h4>
          <img width="600" src={project.thumbnail} alt={project.title} />
          <div className={styles.content}>
            <p className={styles.description}>{project.description}</p>
            <p>
              <RiComputerLine size="30" /> Technologies used:{" "}
              {project.technologies.join(", ")}
            </p>
            <p>
              <IoMdTime size="30" />
              <span>
                Project size:
                <span style={{ color: SIZE_COLORS[project.size] }}>
                  {" " + project.size}
                </span>
              </span>
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
