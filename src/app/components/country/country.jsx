import Borders from '../borders/borders.jsx'
import styles from './styles.module.scss'

const Country = ({ clickedCardData, setClickedCardData, data }) => {
    return(
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
              {clickedCardData.tld ? (
                <p><b>Top Level Domain:</b> {clickedCardData.tld[0]}</p>
              ) : (<p><b>Top Level Domain:</b> N\A</p>)}
              

              {clickedCardData.currencies ? (
                <p><b>Currencies:</b> {Object.values(clickedCardData.currencies)[0]?.name}</p>
              ) : (<p><b>Currencies:</b> N\A</p>)}

              <p><b>Languages:</b> {Object.entries(clickedCardData.languages).map(([key, language], index, array) => (
                <span key={key}>{language}{index < array.length - 1 && ', '}</span>
              ))}</p>   
            </div>

            {clickedCardData.borders ? (
              <Borders clickedCardData={clickedCardData} setClickedCardData={setClickedCardData} data={data} />
            ) : <p><b>Border Countries: </b> N\A</p>} 

          </section>              
        </div>
      </div>
    )
}
export default Country