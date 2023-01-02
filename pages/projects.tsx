// import styles from "../components/projects.module.scss";
import Experience from "../components/Experience";
import ProjectThumbnails from "../components/ProjectThumbnail";
import PROJECTS from "../PROJECTS_DATA";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-stone-100">
      <header className="flex flex-col items-center justify-center mx-2 my-20 text-center">
        <h2
          className="text-4xl font-extrabold text-indigo-700 "
          // className={styles.title}
        >
          Other projects
        </h2>
        <span className="mx-12 italic">
          (That dont have as much things for me to talk about)
        </span>
      </header>
      <div className="grid align-top sm:grid-cols-2">
        {PROJECTS.map((project, index) => {
          // this is a cool way to create the pattern I think
          const isRedBgDesktop = [true, false, false, true][index % 4];
          const desktopBg = isRedBgDesktop
            ? "sm:bg-red-300"
            : "sm:bg-emerald-200";
          const mobileBg = index % 2 == 0 ? "bg-red-300" : "bg-emerald-200";
          return (
            <ProjectThumbnails
              key={project.title}
              project={project}
              bgClass={`${mobileBg} ${desktopBg}`}
            />
          );
        })}
      </div>
      <Experience />
    </section>
  );
};

export default Projects;
