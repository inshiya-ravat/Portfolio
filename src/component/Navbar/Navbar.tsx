import styles from './Navbar.module.css';
import Button from '../Button/Button';
import Menu from '../../assets/Hamburger-menu.svg';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.menu}>
            <Button variant='transparent'>
                <img src={Menu} alt='hamburger menu'/>
            </Button>
        </div>
      <div>
        <p className={styles.logo}>INSHIYA RAVAT</p>
      </div>
      <ul className={styles.actionContainer}>
        <li className={styles.activeSection}>Home</li>
        <li className={styles.inActiveSection}>Projects</li>
        <li className={styles.inActiveSection}>About me</li>
        <li className={styles.inActiveSection}>Contact me</li>
      </ul>
      <div>
        <Button variant='filled' title='Download Resume'>Resume</Button>
      </div>
    </div>
  )
}

export default Navbar
