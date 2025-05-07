import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import menu from "../../assets/Hamburger-menu.svg";
import { useState } from "react";
import ResumeDownload from "../ResumeDownload/ResumeDownload";
import { ACTION } from "../../Constants/Constants";

type Action = typeof ACTION[keyof typeof ACTION];
const ListItem = () => {
  const [active,setActive] = useState<Action>(ACTION.HOME)
  function handleActionClick(activeAction:Action){
    setActive(activeAction);
  }
  return (
    <>
      <li className={active === ACTION.HOME ? styles.activeSection : styles.inActiveSection}>
        <a onClick={()=>handleActionClick(ACTION.HOME)} href="#home">Home</a>
      </li>
      <li className={active === ACTION.ABOUT ? styles.activeSection : styles.inActiveSection}>
        <a onClick={()=>handleActionClick(ACTION.ABOUT)} href="#about">About me</a>
      </li>
      <li className={active === ACTION.PROJECT ? styles.activeSection : styles.inActiveSection}>
        <a onClick={()=>handleActionClick(ACTION.PROJECT)} href="#project">Projects</a>
      </li>
      <li className={active === ACTION.CONTACT ? styles.activeSection : styles.inActiveSection}>
        <a onClick={()=>handleActionClick(ACTION.CONTACT)} href="#contact">Contact me</a>
      </li>
    </>
  );
};
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.menu}>
        <Button onClick={handleMenu} variant="transparent">
          <img src={menu} alt="hamburger menu" />
        </Button>
        {isMenuOpen && (
          <ul className={styles.menuList}>
            <ListItem />
          </ul>
        )}
      </div>
      <div>
        <p id="home" className={styles.logo}>INSHIYA RAVAT</p>
      </div>
      <ul className={styles.actionContainer}>
        <ListItem />
      </ul>
      <div>
        <ResumeDownload/>
      </div>
    </div>
  );
};

export default Navbar;
