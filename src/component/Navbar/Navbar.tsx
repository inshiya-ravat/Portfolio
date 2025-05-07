import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import menu from "../../assets/Hamburger-menu.svg";
import resume from "../../assets/resume.txt";
import { useState } from "react";

const ListItem = () => {
  return (
    <>
      <li className={styles.activeSection}>
        <a href="#">Home</a>
      </li>
      <li className={styles.inActiveSection}>
        <a href="#">About me</a>
      </li>
      <li className={styles.inActiveSection}>
        <a href="#">Projects</a>
      </li>
      <li className={styles.inActiveSection}>
        <a href="#">Contact me</a>
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
        <p className={styles.logo}>INSHIYA RAVAT</p>
      </div>
      <ul className={styles.actionContainer}>
        <ListItem />
      </ul>
      <div>
        <Button variant="filled" title="Download Resume">
          <a href={resume} download>
            Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
