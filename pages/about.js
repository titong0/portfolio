import styles from "../components/about.module.scss";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>About me</h1>
        <h2>Me</h2>
        <p>
          I'm a really passionate 16 year old developer from Argentina. I
          started learning web development in 2020 and to this day I'm always
          trying to be better. I really enjoy incorporating new technologies but
          I generally prefer to
          <em className={styles.highlight}> specialize</em> in one at a time.
        </p>
        <br />
        <p>
          I'm more of a math and problem solving guy so design is not something
          I take in my stride. I still try to improve my skills and I hope
          someday I can put together a site without much doubt.
        </p>
        <br />
        <h2>Interests</h2>
        <p>
          besides programming, I <em className={styles.highlight}>love </em>
          being somewhat knowledgeable in fields such as math, physics, game
          design, music and history.
        </p>
        <br />
        <p>
          While english I can fluently speak english, I think that one can never
          fully know a language so I'm always learning.
        </p>
      </div>
    </div>
  );
};

export default About;
