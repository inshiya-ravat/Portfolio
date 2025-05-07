import type { Education } from "./Education";
import type { Experience } from "./Experience";
import styles from "./About.module.css";

interface TableProp {
  list: Education[] | Experience[];
}
const Table = ({ list }: TableProp) => {
  return (
    <table className={styles.table}>
      <tbody>
        {list.map((listItem) => {
          if ("institute" in listItem) {
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
          } else {
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
          }
        })}
      </tbody>
    </table>
  );
};

export default Table;
