import Section from "../Section/Section";
import { projects } from "./ProjectList";
import styles from "./Project.module.css";
import Button from "../Button/Button";
import video from "../../assets/video.svg";
import close from "../../assets/close.svg";
import { useState } from "react";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleVideoOpen() {
    setIsOpen((prev) => !prev);
    console.log("djc");
  }
  return (
    <Section heading="Projects" id="project">
      <ul className={styles.porjects}>
        {projects.map((project) => (
          <li className={styles.project}>
            <h3 className={styles.title}>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.tech}>
              <p>Technologies used: </p>
              {project.tech.map((technology) => (
                <li>{technology}</li>
              ))}
            </ul>
            {project.video && (
              <>
                <dialog open={isOpen} className={styles.videoDialog}>
                  <video controls>
                    <source src={project.video} type="video/mp4" />
                  </video>
                  <Button onClick={handleVideoOpen} variant="transparent-close">
                    <img className={styles.close} src={close} alt="video" />
                  </Button>
                </dialog>
                <Button onClick={handleVideoOpen} variant="transparent">
                  <img className={styles.videoImg} src={video} alt="video" />
                </Button>
              </>
            )}
            <a className={styles.link} href={project.link}>
              GitHub
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Project;
