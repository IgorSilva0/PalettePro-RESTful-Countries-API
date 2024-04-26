import styles from './styles.module.scss'
import { useState, useEffect } from 'react';

const Region = ({ data, prop }) => {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        const filteredData = data.filter(item => item.region === prop.selectedRegion);
        setCurrentRegion(filteredData);
    }, [prop.selectedRegion]);

    const handClick = (item) => {
        prop.setClickedCardData(item)
        prop.setSelectedRegion(null);
        prop.setClicked(!prop.clicked);
    };

    return (
        <div className={styles.container}>
            {currentRegion === null ? (
                <p>Loading...</p>
            ) : currentRegion.length === 0 ? (
                <p>No countries found in this region.</p>
            ) : (
                currentRegion.map((item, index) => (
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
    );
};

export default Region;
