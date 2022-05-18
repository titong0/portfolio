import Link from "next/link";
import styles from "./nav.module.scss";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const getStyle = (route) => {
    return router.asPath === route ? styles.selected : "";
  };

  return (
    <nav className={styles.nav}>
      <h2 className={`${styles.home} ${getStyle("/")}`}>
        <Link href="/">A.E</Link>
      </h2>
      <ul className={styles.navLinks}>
        <li className={`${styles.link} ${getStyle("/about")}`}>
          <Link href="/about">About me</Link>
        </li>
        <li className={`${styles.link} ${getStyle("/projects")}`}>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
