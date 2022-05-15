import styles from "./footer.module.scss";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <form className={styles.container}>
        <h3>Useful links</h3>
        <ul>
          <li className={styles.contact}>
            <AiOutlineMail color="f5f5f5" size="25" />
            <span className={styles.highlight}>augustoerrecarte@gmail.com</span>
          </li>
          <li className={styles.contact}>
            <AiOutlineGithub color="f5f5f5" size="25" />
            <span className={styles.highlight}>
              <a href="https://github.com/titong0">github.com/titong0</a>
            </span>
          </li>
        </ul>
      </form>
    </footer>
  );
};

export default Footer;
