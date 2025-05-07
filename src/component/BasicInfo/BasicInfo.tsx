import styles from './BasicInfo.module.css';
import photo from '../../assets/nobg.png';
import Information from './Information';

const BasicInfo = () => {
  return (
    <div className={styles.infoContainer}>
        <Information/>
        <img className={styles.photo} src={photo} alt="Inshiya's photo"/>
    </div>
  )
}

export default BasicInfo