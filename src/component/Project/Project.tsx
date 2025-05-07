import Section from "../Section/Section";
import { projects } from "./ProjectList";
import styles from "./Project.module.css";
import VideoDialog from "./VideoDialog";

const Project = () => {
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
              <VideoDialog project={project}/>
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
