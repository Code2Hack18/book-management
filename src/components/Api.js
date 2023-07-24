import React, { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/ClipLoader";
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    // Define the API URL you want to fetch data from
    // const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
        const apiUrl = 'https://fakestoreapi.com/products/1';
    // Axios GET request to fetch data from the API
    axios
      .get(apiUrl)
      .then(response => {
        // Once data is fetched, update the state
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [1]);

  if (loading) {
    return 
    <div>Loading....</div>
  }

  return (
    <>
      <h1>Data from API:</h1>
      <h2> {data.id}</h2>
      <h2>{data.title}</h2>
      <h2> {data.price}</h2>
      <h2>{data.description}</h2>
    </>
  );
};

export default Api;
