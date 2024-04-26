"use client"
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Search from "./components/search/search.jsx";
import Card from './components/card/card.jsx';
import { fetchData } from './util/data.ts';

export default function Home() {
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);

  const prop = {
    clicked,
    setClicked
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

      {data ? <Card data={data} prop={prop}/> : <h4 className={styles.loading}>Loading...</h4>}

    </div>
  );
}
