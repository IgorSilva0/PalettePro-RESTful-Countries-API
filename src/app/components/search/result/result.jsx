import styles from './styles.module.scss'

const Result = ({ prop, data }) => {
    const handClick = (item) => {
        prop.setSearching('')
        prop.setClicked(!prop.clicked);
        prop.setClickedCardData(item)
        prop.setSelectedRegion(null);
    };
    
    return (
        <div className={styles.container}>
        {prop.searchedData === null ? (
            <p>Loading...</p>
            ) : prop.searchedData.length === 0 ? (
            <p>No countries found with this name...</p>
            ) : (
            prop.searchedData.map((item, index) => (
                <div key={index} className={styles.cards} onClick={() => handClick(item)}>
                    <img src={item.flags.png} alt='Country Flag' className={styles.flag}/>
                    <main className={styles.txtContainer}>
                        <h2>{item.name.common}</h2>
                        <p><b>Population:</b> {item.population.toLocaleString()}</p>
                        <p><b>Region:</b> {item.region}</p>
                        <p><b>Capital:</b> {item.capital}</p>
                    </main>
                </div>
                ))
        )}
        </div>
    )
}
export default Result