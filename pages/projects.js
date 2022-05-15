import styles from "../components/projects.module.scss";
import ProjectThumbnails from "../components/ProjectThumbnails";
import Experience from "../components/Experience";
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
      <Experience />
    </section>
  );
};

export default Projects;
