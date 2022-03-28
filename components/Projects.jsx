import styles from "./projects.module.scss";
import ProjectThumbnails from "./ProjectThumbnails";
import PROJECTS from "../projects";

const Projects = () => {
  return (
    <section className={styles.container}>
      <header>
        <h2 className={styles.title}>Projects</h2>
      </header>
      <div className={styles.thumbnailsContainer}>
        <ProjectThumbnails projects={PROJECTS} />
      </div>
    </section>
  );
};

export default Projects;
