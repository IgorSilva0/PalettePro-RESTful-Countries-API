import styles from './styles.module.scss';

const Header = () => {
    return (
    <header className={styles.header}>
        <h3 className={styles.title}>Where in the world?</h3> 
        <h5 className={styles.theme}>🌙Dark Mode</h5>
    </header>
    )
}
export default Header