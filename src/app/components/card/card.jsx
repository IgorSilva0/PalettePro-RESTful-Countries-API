import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import borders from './func/borders.jsx'

const Card = ({ data, prop }) => {
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [clickedCardData, setClickedCardData] = useState(null);
  const [borders, setBorders] = useState([])

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
    setClickedCardData(data[index]);
    console.log(data[index])
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
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <img src={clickedCardData.flags.png} alt='Country Flag' className={styles.cardFlag}/>

              <section className={styles.section}>
                <h2>{clickedCardData.name.common}</h2>

                <div className={styles.info}>
                  {clickedCardData.name.nativeName && (
                    <p><b>Native Name:</b> {Object.values(clickedCardData.name.nativeName)[0]?.common}</p>
                  )}
                  <p><b>Population:</b> {clickedCardData.population.toLocaleString()}</p>
                  <p><b>Region:</b> {clickedCardData.region}</p>
                  <p><b>Sub Region:</b> {clickedCardData.subregion}</p>
                  <p><b>Capital:</b> {clickedCardData.capital}</p>
                  <p><b>Top Level Domain:</b> {clickedCardData.tld[0]}</p>

                  {clickedCardData.currencies ? (
                    <p><b>Currencies:</b> {Object.values(clickedCardData.currencies)[0]?.name}</p>
                  ) : (<p><b>Currencies:</b> N\A</p>)}
                  
                  <p><b>Languages:</b> {Object.entries(clickedCardData.languages).map(([key, language], index, array) => (
                    <span key={key}>{language}{index < array.length - 1 && ', '}</span>
                  ))}</p>   
                </div>

                {clickedCardData.borders ? (
                  <p><b>Border Countries: </b> {clickedCardData.borders.map((country, key) => (
                    <button key={key} className={styles.borders}>{country}</button>
                  ))}</p>
                ) : <p><b>Border Countries: </b> N\A</p>} 

              </section>              
            </div>
          </div>
          )
  );
};


export default Card;