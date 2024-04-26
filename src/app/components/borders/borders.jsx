import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Borders = ({ prop, data }) => {
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        if (prop.clickedCardData.borders) {
            setBorderCountries(prop.clickedCardData.borders);
        }
    }, [prop.clickedCardData.borders]);

    const handleClick = (element) => {
        prop.setClickedCardData(element)
    }

    const countries = borderCountries.map(x => {
        const foundObject = data.find(obj => Object.values(obj).includes(x));
            if (foundObject) {
                return <button key={x} className={styles.borders} onClick={() => handleClick(foundObject)}>{foundObject.name.common}</button>;
            } else {
                return null;
            }
    });

    return (
        <p><b>Border Countries: </b> 
            {countries}
        </p>
    );
}

export default Borders;
