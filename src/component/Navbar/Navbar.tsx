import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import menu from "../../assets/Hamburger-menu.svg";
import { useState } from "react";
import ResumeDownload from "../ResumeDownload/ResumeDownload";
import { ListItem } from "./ListItem";
import { ACTION } from "../../Constants/Constants";

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
        <p id="home" className="logo">INSHIYA RAVAT</p>
      </div>
      <ul className={styles.actionContainer}>
        <ListItem current={ACTION.HOME}/>
      </ul>
      <div>
        <ResumeDownload/>
      </div>
    </div>
  );
};

export default Navbar;
