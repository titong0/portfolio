import styles from "./projects.module.scss";
import Link from "next/link";

/**
 *
 * @param {Object} props - props.
 * @param {Object[]} props.projects
 * @param {string} props.projects.size
 * @param {string} props.projects.bg
 * @param {string} props.projects.title
 * @param {string} props.projects.thumbnail
 * @param {string} props.projects.url
 * @param {string} props.projects.description
 * */

const SIZE_COLORS = {
  small: "green",
  "small-medium": "yellow",
  medium: "red",
};

const ProjectThumbnails = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <Link href={project.url} key={project.title}>
          <div className={styles.thumbnail}>
            <h4
              style={{
                background: `linear-gradient(${project.bg}, 85%, #cccccc)`,
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
              <span>
                Link:
                <a href={project.url}> {project.url.replace("https://", "")}</a>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProjectThumbnails;
