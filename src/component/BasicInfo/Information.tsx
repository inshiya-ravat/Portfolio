import Button from "../Button/Button";
import ResumeDownload from "../ResumeDownload/ResumeDownload";
import styles from "./BasicInfo.module.css";
import SocialLink from "./SocialLink";

const Information = () => {
  return (
    <div className={styles.contentContainer}>
      <p className={styles.greeting}>Hi I am</p>
      <p>Inshiya Ravat</p>
      <h1 className={styles.designation}>Software Engineer</h1>
      <SocialLink/>
      <div className={styles.actionContainer}>
        <Button>
          <a href="#contact">Contact Me</a>
        </Button>
        <ResumeDownload variant="outlined" />
      </div>
    </div>
  );
};

export default Information;
