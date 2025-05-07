import resume from "../../assets/INSHIYA_RAVAT_resume.pdf";
import Button, { type Variant } from "../Button/Button";
interface ResumeDownloadProps{
    variant? : Variant,
}
const ResumeDownload = ({variant}:ResumeDownloadProps) => {
  return (
    <Button variant={variant} title="Download Resume">
        <a href={resume} download>
            Resume
        </a>
    </Button>
  )
}

export default ResumeDownload