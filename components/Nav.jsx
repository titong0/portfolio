import Link from "next/link";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.home}>
        <Link href="/">A.E</Link>
      </h2>
      <ul className={styles.navLinks}>
        <li className={styles.link}>
          <Link href="/about">About me</Link>
        </li>
        <li className={styles.link}>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
