import { useState } from "react";
import { ACTION } from "../../Constants/Constants";
import styles from "./Navbar.module.css";

type Action = (typeof ACTION)[keyof typeof ACTION];
interface ListItemProp {
  current: Action,
  classname: string
}
export const ListItem = ({ current,classname }: ListItemProp) => {
  const [active, setActive] = useState<Action>(current);
  function handleActionClick(activeAction: Action) {
    setActive(activeAction);
  }
  return (
    <ul className={classname}>
      <li
        className={
          active === ACTION.HOME ? styles.activeSection : styles.inActiveSection
        }
      >
        <a onClick={() => handleActionClick(ACTION.HOME)} href="#home">
          Home
        </a>
      </li>
      <li
        className={
          active === ACTION.ABOUT
            ? styles.activeSection
            : styles.inActiveSection
        }
      >
        <a onClick={() => handleActionClick(ACTION.ABOUT)} href="#about">
          About me
        </a>
      </li>
      <li
        className={
          active === ACTION.PROJECT
            ? styles.activeSection
            : styles.inActiveSection
        }
      >
        <a onClick={() => handleActionClick(ACTION.PROJECT)} href="#project">
          Projects
        </a>
      </li>
      <li
        className={
          active === ACTION.CONTACT
            ? styles.activeSection
            : styles.inActiveSection
        }
      >
        <a onClick={() => handleActionClick(ACTION.CONTACT)} href="#contact">
          Contact me
        </a>
      </li>
    </ul>
  );
};
