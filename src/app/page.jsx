"use client"
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Header from "./components/header/header.jsx";
import Search from "./components/search/search.jsx";
import Card from './components/card/card.jsx';
import Region from './components/region/region.jsx'
import Result from './components/search/result/result.jsx'
import { fetchData } from './util/data.ts';

export default function Home() {
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [clickedCardData, setClickedCardData] = useState(null);
  const [searching, setSearching] = useState('');
  const [searchedData, setSearchedData] = useState(null);
  const [darkMode, setDarkMode] = useState(false)

  const prop = {
    clicked,
    setClicked,
    selectedRegion,
    setSelectedRegion,
    clickedCardData,
    setClickedCardData,
    searching,
    setSearching,
    searchedData,
    setSearchedData,
    darkMode,
    setDarkMode
  }

  useEffect(() => {
    const apiUrl = 'https://restcountries.com/v3.1/all';
    fetchData(apiUrl)
      .then((response) => {
        console.log('Data fetched successfully!');
        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching data: API is down... \nUsing another source!');
        setData(error)
      });
  }, []);

  return (
    <div className={!darkMode ? styles.content : styles.content2}>
      <Header prop={prop} />

      <div className={styles.main}>

        <Search prop={prop} data={data} />

        {!selectedRegion && data && searching.length < 1 ? <Card data={data} prop={prop} />
          : !selectedRegion && searching.length < 1 ? <h4 className={styles.loading}>Loading...</h4>
            : searching.length >= 1 ? <Result prop={prop} data={data} />
              : <Region data={data} prop={prop} />}

      </div>
    </div>
  );
}
