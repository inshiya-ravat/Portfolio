import styles from "./About.module.css";
import type { Experience } from "./Experience";

interface ExperienceRowProp {
  listItem: Experience;
}
const ExperienceRow = ({ listItem }: ExperienceRowProp) => {
  return (
    <tr>
      <td className={styles.duration}>{listItem.duration}</td>
      <td>
        <b>
          {listItem.role}, {listItem.company}
        </b>
      </td>
    </tr>
  );
};

export default ExperienceRow;
