import "../index.css";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Augusto Errecarte</title>
      </Head>
      <Nav />
      {/* invisible, same height as navbar */}
      {/* <div className="h-16 sm:h-12"></div> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
