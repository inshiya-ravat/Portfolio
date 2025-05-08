import { type ReactNode } from "react";
import styles from './Section.module.css';

interface SectionProps {
  id?:string;
  heading: string;
  children: ReactNode;
}
const Section = ({ heading, id, children }: SectionProps) => {
  return (
    <section id={id} className={styles.section}>
      <h2>{heading}</h2>
      {children}
    </section>
  );
};

export default Section;
