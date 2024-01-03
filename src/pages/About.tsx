import React from "react";
import styles from "./About.module.css";
import myPhoto from "../images/journey.png";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <img
          src={myPhoto}
          alt="Sumitra Pokharel"
          className={styles.profilePhoto}
        />
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutDescription}>
          Hi there! I'm Sumitra Pokharel, a passionate and detail-oriented web
          developer based in Dallas, Texas. I specialize in creating modern and
          user-friendly web applications using the latest technologies.
        </p>
        <p className={styles.aboutDescription}>
          With a strong foundation in front-end and back-end development, I
          bring creative solutions to life. I enjoy turning complex problems
          into elegant, intuitive, and efficient solutions.
        </p>
        <p className={styles.aboutDescription}>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or enjoying a good cup of
          coffee.
        </p>
        <p className={styles.aboutDescription}>My hobbies include:</p>
        <ul className={styles.hobbiesList}>
          <li>
            🎨 Graphic Design: I love creating visually appealing designs and
            illustrations.
          </li>
          <li>
            🚴‍♀️ Outdoor Activities: Camping, hiking, and exploring nature are
            some of my favorite ways to stay active.
          </li>
          <li>
            🎸 Playing Music: I enjoy listening to different genres of music.
          </li>
        </ul>
        <p className={styles.aboutDescription}>
          Let's work together and build something amazing!
        </p>

        <div className={styles.linksContainer}>
          <a
            href="https://sumitraportfolio-jlx5431en-sumeepokharel.vercel.app"
            className={styles.link}
          >
            Portfolio
          </a>
          <a href="https://github.com/sumeepokharel" className={styles.link}>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sumitra-pokharel/"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/pokharel_sumee/"
            className={styles.link}
          >
            Instragram
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
