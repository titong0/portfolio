import styles from "./hero.module.scss";
import { BsChevronDown } from "react-icons/bs";
const Hero = () => {
  return (
    <header className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Augusto Errecarte</h1>
      <BsChevronDown size="50" color="#ffffff" />
    </header>
  );
};

export default Hero;
