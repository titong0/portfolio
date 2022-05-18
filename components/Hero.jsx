import styles from "./hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <header className={styles.heroContainer}>
      <h1 className={styles.heroTitleContainer}>
        <span className={styles.heroTitle}> Augusto Errecarte</span>
        <div className={styles.linksContainer}>
          <Link href="/projects"> See projects</Link>
          <Link href="/about"> About me</Link>
        </div>
      </h1>
    </header>
  );
};

export default Hero;
