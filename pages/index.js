import Head from "next/head";
import Hero from "../components/Hero";
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
      </div>
    </>
  );
};

export default index;
