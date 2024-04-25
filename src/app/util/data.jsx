"use client"
import { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // empty dependency array means this effect runs only once after the initial render

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data){
    console.log(data)
  }
  return (
    <div>
      {/* Display your fetched data here */}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>Common Name: {data.common}</p>
          <p>Official Name: {data.official}</p>
          <p>Native Name: {data.nativeName}</p>
        </div>
      )}
    </div>
  );
}

export default Data;
