import styles from './BasicInfo.module.css';
import linkedIn from '../../assets/LinkedIn.svg';
import github from '../../assets/GitHub.svg';
import medium from '../../assets/Medium.svg';
import Button from '../Button/Button';
import ResumeDownload from '../ResumeDownload/ResumeDownload';
import photo from '../../assets/nobg.png';

const Information = () => {
    return (
        <div className={styles.contentContainer}>
            <p className={styles.greeting}>Hi I am</p>
            <p>Inshiya Ravat</p>
            <h1 className={styles.designation}>Software Engineer</h1>
            <div className={styles.socialLinks}>
                <div>
                    <a target='_blank' href='https://www.linkedin.com/in/inshiya-ravat-4b1372226/'>
                        <img src={linkedIn} alt='linkedIn'/>
                    </a>
                </div>
                <div>
                    <a target='_blank' href='https://github.com/InshiyaRavat'>
                        <img src={github} alt='github'/>
                    </a>    
                </div>
                <div>
                    <a target='_blank' href='https://medium.com/@insravat'>
                        <img src={medium} alt='medium'/>
                    </a>
                </div>                
            </div>
            <div className={styles.actionContainer}>
                <Button>Contact Me</Button>
                <ResumeDownload variant='outlined'/>
            </div>
        </div>
    )
}

const BasicInfo = () => {
  return (
    <div className={styles.infoContainer}>
        <Information/>
        <img className={styles.photo} src={photo} alt="Inshiya's photo"/>
    </div>
  )
}

export default BasicInfo