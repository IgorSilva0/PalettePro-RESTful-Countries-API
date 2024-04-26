import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Country from '../country/country.jsx'


const Card = ({ data, prop }) => {
  const [randomIndexes, setRandomIndexes] = useState([]);

  useEffect(() => {
    const dataLength = data.length;
    const indexes = [];

    while (indexes.length < 8) {
      const randomIndex = Math.floor(Math.random() * dataLength);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    setRandomIndexes(indexes);
  }, [data]);

  const handClick = (index) => {
    prop.setClickedCardData(data[index]);
    prop.setSearching('')
    //console.log(data[index])
    prop.setClicked(!prop.clicked);
  };

  return (
      !prop.clicked ? (
        <div className={styles.container}>
          {randomIndexes.map((index, key) => (
            <div key={key} className={styles.cards} onClick={() => handClick(index)}>
              <img src={data[index].flags.png} alt='Country Flag' className={styles.flag}/>
              <main className={styles.txtContainer}>
                <h2>{data[index].name.common}</h2>
                <p><b>Population:</b> {data[index].population.toLocaleString()}</p>
                <p><b>Region:</b> {data[index].region}</p>
                <p><b>Capital:</b> {data[index].capital}</p>
              </main>
             </div>
          ))}
        </div>
        ) : (
              <Country prop={prop} data={data}/>
            )
  );
};


export default Card;