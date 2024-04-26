import styles from './styles.module.scss'
import {FaMagnifyingGlass, FaArrowLeftLong} from 'react-icons/fa6'

const Search = ({ prop, data }) => {

    const handleInput = (event) => {
        const value = event.target.value;
        prop.setSearching(value);
    
        const filteredData = data.filter(item => item.name.common.toLowerCase().includes(value.toLowerCase()));
        prop.setSearchedData(filteredData);
    };

    const handleDropDown = (event) => {
        prop.setSearching('')
        const value = event.target.value;
        prop.setSelectedRegion(value);
        //console.log(value);
    };

    const handleBack = () => {
        prop.setClicked(!prop.clicked)
    }
    
    return (
        <div className={styles.container}>
            {!prop.clicked ? (
            <>
                <div className={styles.searchBox}>
                    <FaMagnifyingGlass/>
                    <input type="text" placeholder="Search for a country..." className={styles.input} onChange={handleInput}/>
                </div>

                <select className={styles.dropDown} onChange={handleDropDown}>
                    <option value="" hidden>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </>
            ) : (<button className={styles.backBtn} onClick={handleBack}><FaArrowLeftLong/> Back</button>)}
        </div>
    )
}
export default Search