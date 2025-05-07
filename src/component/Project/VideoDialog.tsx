import Button from "../Button/Button";
import video from "../../assets/video.svg";
import close from "../../assets/close.svg";
import { useState } from "react";
import type { Project } from "./ProjectList";
import styles from "./Project.module.css";

interface VideoDialogProp {
  project: Project;
}
const VideoDialog = ({ project }: VideoDialogProp) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleVideoOpen() {
    setIsOpen((prev) => !prev);
    console.log("djc");
  }
  return (
    <>
      <dialog open={isOpen} className={styles.videoDialog}>
        <video controls>
          <source src={project.video} type="video/mp4" />
        </video>
        <Button onClick={handleVideoOpen} variant="transparent-close">
          <img className={styles.close} src={close} alt="video" />
        </Button>
      </dialog>
      <Button onClick={handleVideoOpen} variant="transparent">
        <img className={styles.videoImg} src={video} alt="video" />
      </Button>
    </>
  );
};

export default VideoDialog;
