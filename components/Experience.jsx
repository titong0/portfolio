import styles from "./experience.module.scss";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const Experience = () => {
  return (
    <div className={styles.container}>
      <h2>Experience</h2>
      <section className={styles.experience}>
        <p>
          <span>
            I Have a <em className={styles.great}>great amount</em> of
            experience with
          </span>
          <div className={styles.iconsContainer}>
            <span style={{ backgroundColor: "#7bc0c8" }}>
              <SiReact size={32}></SiReact>
            </span>
            <span style={{ backgroundColor: "#000000" }}>
              <SiJavascript color="#dede22" size={32}></SiJavascript>
            </span>
            <span style={{ backgroundColor: "#E34F26" }}>
              <SiHtml5 size={32}></SiHtml5>
            </span>
            <span style={{ backgroundColor: "#1572B6" }}>
              <SiCss3 size={32}></SiCss3>
            </span>
            <span style={{ backgroundColor: "#000000" }}>
              <SiNextdotjs size={32}></SiNextdotjs>
            </span>
          </div>
        </p>
        <p>
          <span>
            I Have a <em className={styles.good}>good amount</em> of experience
            with
          </span>
          <div className={styles.iconsContainer}>
            <span style={{ backgroundColor: "#ffffff" }}>
              <SiTailwindcss color="#38bdf8" size={32}></SiTailwindcss>
            </span>
            <span style={{ backgroundColor: "#339933" }}>
              <SiNodedotjs size={32}></SiNodedotjs>
            </span>
            <span style={{ backgroundColor: "#000000" }}>
              <SiVercel size={32}></SiVercel>
            </span>
            <span style={{ backgroundColor: "#ffffff" }}>
              <SiNetlify color="#38b1bb" size={32}></SiNetlify>
            </span>
          </div>
        </p>
        <p>
          <span>
            I Have a <em className={styles.vague}>vague amount</em> of
            experience with
          </span>
          <div className={styles.iconsContainer}>
            <span style={{ backgroundColor: "#3178C6" }}>
              <SiTypescript size={32}></SiTypescript>
            </span>
            <span style={{ backgroundColor: "#f7d14a" }}>
              <SiPython color="#3470a2" size={32}></SiPython>
            </span>
          </div>
        </p>
      </section>
    </div>
  );
};

export default Experience;
