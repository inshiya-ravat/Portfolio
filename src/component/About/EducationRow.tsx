import styles from "./About.module.css";
import type { Education } from "./Education";

interface EducationRowProp {
  listItem: Education;
}
const EducationRow = ({ listItem }: EducationRowProp) => {
  return (
    <tr>
      <td className={styles.duration}>{listItem.duration}</td>
      <td>
        <div>
          <b>{listItem.institute}</b>
          {listItem.cpi && <b>, cpi: {listItem.cpi}</b>}
        </div>
      </td>
    </tr>
  );
};

export default EducationRow;
