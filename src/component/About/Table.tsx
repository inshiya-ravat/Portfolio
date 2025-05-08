import type { Education } from "./Education";
import type { Experience } from "./Experience";
import styles from "./About.module.css";
import EducationRow from "./EducationRow";
import ExperienceRow from "./ExperienceRow";

interface TableProp {
  list: Education[] | Experience[];
}
const Table = ({ list }: TableProp) => {
  return (
    <table className={styles.table}>
      <tbody>
        {list.map((listItem) => {
          if ("institute" in listItem) {
            return <EducationRow key={listItem.id} listItem={listItem} />;
          } else {
            return <ExperienceRow key={listItem.id} listItem={listItem} />;
          }
        })}
      </tbody>
    </table>
  );
};

export default Table;
