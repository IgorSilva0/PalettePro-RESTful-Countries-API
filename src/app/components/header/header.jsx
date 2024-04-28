import styles from './styles.module.scss'
import { FaMoon, FaSun } from 'react-icons/fa6'

const Header = ({ prop }) => {

    const handleMode = () => {
        prop.setDarkMode(!prop.darkMode)
        console.log('hi')
    }

    return (
    <header className={styles.header}>
        <h3 className={styles.title}>Where in the world?</h3> 
        {!prop.darkMode ? (
            <h4 className={styles.theme} onClick={handleMode}><FaMoon/> Dark Mode</h4>
        ) : (
            <h4 className={styles.theme} onClick={handleMode}><FaSun/> Light Mode</h4>
        )}
        
    </header>
    )
}
export default Header