import linkedIn from '../../assets/LinkedIn.svg';
import github from '../../assets/GitHub.svg';
import medium from '../../assets/Medium.svg';
import Button from '../Button/Button';
import ResumeDownload from '../ResumeDownload/ResumeDownload';
import styles from './BasicInfo.module.css';
import ImageLink from '../ImageLink/ImageLink';

const Information = () => {
    return (
        <div className={styles.contentContainer}>
            <p className={styles.greeting}>Hi I am</p>
            <p>Inshiya Ravat</p>
            <h1 className={styles.designation}>Software Engineer</h1>
            <div className={styles.socialLinks}>
                <ImageLink link='https://www.linkedin.com/in/inshiya-ravat-4b1372226/' image={linkedIn}/>
                <ImageLink link='https://github.com/InshiyaRavat' image={github}/>
                <ImageLink link='https://medium.com/@insravat' image={medium}/>            
            </div>
            <div className={styles.actionContainer}>
                <Button>Contact Me</Button>
                <ResumeDownload variant='outlined'/>
            </div>
        </div>
    )
}

export default Information