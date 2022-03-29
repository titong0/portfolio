import Projects from "../components/Projects";
import Experience from "../components/Experience";
const index = () => {
  return (
    <div className="">
      <header className="hero-container">
        <h1 className="hero-title">Augusto Errecarte</h1>
      </header>
      <Projects />
      <Experience />
    </div>
  );
};

export default index;
