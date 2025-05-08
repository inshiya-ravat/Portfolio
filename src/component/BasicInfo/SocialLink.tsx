import ImageLink from "../ImageLink/ImageLink";
import linkedIn from "../../assets/LinkedIn.svg";
import github from "../../assets/GitHub.svg";
import medium from "../../assets/Medium.svg";
import styles from "./BasicInfo.module.css";

const SocialLink = () => {
  return (
    <div className={styles.socialLinks}>
        <ImageLink
          link="https://www.linkedin.com/in/inshiya-ravat-4b1372226/"
          image={linkedIn}
        />
        <ImageLink link="https://github.com/InshiyaRavat" image={github} />
        <ImageLink link="https://medium.com/@insravat" image={medium} />
      </div>
  )
}

export default SocialLink
