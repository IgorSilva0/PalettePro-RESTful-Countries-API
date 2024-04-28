import Borders from '../borders/borders.jsx'
import styles from './styles.module.scss'

const Country = ({ prop, data }) => {
    return(
        <div className={!prop.darkMode? styles.cardContainer : styles.cardContainer2}>
        <div className={styles.card}>
          <img src={prop.clickedCardData.flags.png} alt='Country Flag' className={styles.cardFlag}/>

          <section className={styles.section}>
            <h2>{prop.clickedCardData.name.common}</h2>

            <div className={styles.info}>
              {prop.clickedCardData.name.nativeName && (
                <p><b>Native Name:</b> {Object.values(prop.clickedCardData.name.nativeName)[0]?.common}</p>
              )}
              <p><b>Population:</b> {prop.clickedCardData.population.toLocaleString()}</p>
              <p><b>Region:</b> {prop.clickedCardData.region}</p>
              <p><b>Sub Region:</b> {prop.clickedCardData.subregion}</p>
              <p><b>Capital:</b> {prop.clickedCardData.capital}</p>
              {prop.clickedCardData.tld ? (
                <p><b>Top Level Domain:</b> {prop.clickedCardData.tld[0]}</p>
              ) : (<p><b>Top Level Domain:</b> N\A</p>)}
              

              {prop.clickedCardData.currencies ? (
                <p><b>Currencies:</b> {Object.values(prop.clickedCardData.currencies)[0]?.name}</p>
              ) : (<p><b>Currencies:</b> N\A</p>)}

              <p><b>Languages:</b> {Object.entries(prop.clickedCardData.languages).map(([key, language], index, array) => (
                <span key={key}>{language}{index < array.length - 1 && ', '}</span>
              ))}</p>   
            </div>

            {prop.clickedCardData.borders ? (
              <Borders prop={prop} data={data} />
            ) : <p><b>Border Countries: </b> N\A</p>} 

          </section>              
        </div>
      </div>
    )
}
export default Country