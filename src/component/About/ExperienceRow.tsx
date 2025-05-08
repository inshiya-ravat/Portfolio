import styles from "./About.module.css";
import type { Experience } from "./Experience";

interface ExperienceRowProp {
  listItem: Experience;
}
const ExperienceRow = ({ listItem }: ExperienceRowProp) => {
  return (
    <tr>
      <td className={styles.duration}>
        <b>
          {listItem.role}, {listItem.company}
        </b>
      </td>
      <td>{listItem.duration}</td>
    </tr>
  );
};

export default ExperienceRow;
