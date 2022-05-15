import Nav from "../components/Nav";
import "../app.scss";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
