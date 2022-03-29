import styles from "./projects.module.scss";
import Link from "next/link";

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
              // background: `linear-gradient(${project.bg}, 85%, #cccccc)`,
              background: project.bg,
            }}
          >
            {project.title}
          </h4>
          <img width="600" src={project.thumbnail} alt={project.title} />
          <div className={styles.content}>
            <p>{project.description}</p>
            <p>
              Project size :
              <span style={{ color: SIZE_COLORS[project.size] }}>
                {" " + project.size}
              </span>
            </p>
            <a href={project.url} target="_blank" className={styles.CTA}>
              See this project
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectThumbnails;
