import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Borders = ({ clickedCardData, setClickedCardData, data }) => {
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        if (clickedCardData.borders) {
            setBorderCountries(clickedCardData.borders);
        }
    }, [clickedCardData.borders]);

    const handleClick = (element) => {
        setClickedCardData(element)
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
