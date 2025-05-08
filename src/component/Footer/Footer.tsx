import { ACTION } from "../../Constants/Constants";
import SocialLink from "../BasicInfo/SocialLink";
import { ListItem } from "../Navbar/ListItem";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p id="home" className="logo">
        INSHIYA RAVAT
      </p>
      <div className={styles.listItems}>
        <ListItem current={ACTION.CONTACT} />
      </div>
      <div className={styles.social}>
        <SocialLink />
      </div>
      <a className={styles.mail} href="mailto:inshiya.learn@gmail.com">inshiya.learn@gmail.com</a>
      <p className={styles.copyright}>copyright {new Date().getFullYear()}.</p>
    </div>
  );
};

export default Footer;
