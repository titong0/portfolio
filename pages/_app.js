import "../app.scss";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Augusto Errecarte</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
