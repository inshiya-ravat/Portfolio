import Section from "../Section/Section";
import { ACTION } from "../../Constants/Constants";
import photo from "../../assets/nobg.png";
import styles from "./About.module.css";
import Education from "./Education.tsx";
import Experience from "./Experience.tsx";

const Hobbies = ["Music", "Painting", "React", "Blockchain", "Java", "Movies"];
const About = () => {
  return (
    <Section heading="About Me" id={ACTION.ABOUT}>
      <div className={styles.aboutContainer}>
        <img className={styles.photo} src={photo} alt="Inshiya's photo" />
        <div className={styles.desc}>
          <p>
            I'm a tech enthusiast who loves learning new technologies and
            staying updated with the latest trends. I enjoy helping others and
            learning from different points of view. In my free time, I like
            listening to music, reading books, and doing canvas painting.
            Lately, I've been curious about blockchain and excited to explore it
            further.
          </p>
          <p>Talk to me about: </p>
          <div className={styles.hobbies}>
            {Hobbies.map((hobby) => (
              <div className={styles.hobby}>
                <p>{hobby}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.educationAndExperience}>
        <Education />
        <Experience />
      </div>
    </Section>
  );
};

export default About;
