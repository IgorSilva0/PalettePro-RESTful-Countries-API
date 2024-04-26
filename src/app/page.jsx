"use client"
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Search from "./components/search/search.jsx";
import Card from './components/card/card.jsx';
import Region from './components/region/region.jsx'
import { fetchData } from './util/data.ts';

export default function Home() {
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [clickedCardData, setClickedCardData] = useState(null);

  const prop = {
    clicked,
    setClicked,
    selectedRegion,
    setSelectedRegion,
    clickedCardData,
    setClickedCardData
  }

  useEffect(() => {
    const apiUrl = 'https://restcountries.com/v3.1/all';
    fetchData(apiUrl)
      .then((response) => {
        console.log('Data fetched successfully!');
        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={styles.main}>

      <Search prop={prop}/>

      {!selectedRegion && data ? <Card data={data} prop={prop} />
        : !selectedRegion ? <h4 className={styles.loading}>Loading...</h4>
        : <Region data={data} prop={prop} />}

    </div>
  );
}
