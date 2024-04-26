import styles from './styles.module.scss'
import {FaMagnifyingGlass, FaArrowLeftLong} from 'react-icons/fa6'

const Search = ({ prop }) => {

    const handleBack = () => {
        prop.setClicked(!prop.clicked)
    }
    
    return (
        <div className={styles.container}>
            {!prop.clicked ? (
            <>
                <div className={styles.searchBox}>
                    <FaMagnifyingGlass/>
                    <input type="text" placeholder="Search for a country..." className={styles.input}/>
                </div>

                <select className={styles.dropDown}>
                    <option value="" hidden>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </>
            ) : (<button className={styles.backBtn} onClick={handleBack}><FaArrowLeftLong/> Back</button>)}
        </div>
    )
}
export default Search