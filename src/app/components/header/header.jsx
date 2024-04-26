import styles from './styles.module.scss';
import {FaMoon} from 'react-icons/fa6'
const Header = () => {
    return (
    <header className={styles.header}>
        <h3 className={styles.title}>Where in the world?</h3> 
        <h4 className={styles.theme}><FaMoon/> Dark Mode</h4>
    </header>
    )
}
export default Header