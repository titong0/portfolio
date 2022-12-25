// import styles from "../components/projects.module.scss";
import Experience from "../components/Experience";
import ProjectThumbnails from "../components/ProjectThumbnail";
import PROJECTS from "../PROJECTS_DATA";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-teal-100">
      <header className="flex flex-col items-center justify-center mx-2 my-8 text-center">
        <h2
          className="text-4xl font-extrabold text-indigo-700 "
          // className={styles.title}
        >
          Other projects
        </h2>
        <span className="mx-12">
          (That dont have as much things for me to talk about)
        </span>
      </header>
      <div className="grid align-top sm:grid-cols-2">
        {PROJECTS.map((project, index) => {
          // this is a cool way to create the pattern I think
          const isRedBg = [true, false, false, true][index % 4];
          return (
            <ProjectThumbnails
              project={project}
              bgClass={isRedBg ? "bg-red-300" : "bg-emerald-200"}
              hoverBg={isRedBg ? "bg-red-400" : "bg-emerald-300"}
            />
          );
        })}
      </div>
      <Experience />
    </section>
  );
};

export default Projects;