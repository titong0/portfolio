import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Augusto Errecarte</title>
      </Head>
      <div>
        <Hero />
        <Projects />
        <Experience />
      </div>
    </>
  );
};

export default index;
