import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RAPID_API_KEY } from '@env';
import axios from 'axios';

const rapidApiKey = RAPID_API_KEY;
console.log("🚀 ~ file: useFetch.js:6 ~ rapidApiKey:", rapidApiKey)

const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = useMemo(() => {
    return {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endPoint}`,
      headers: {
        'X-RapidAPI-Key': `${rapidApiKey}`,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
      params: { ...query },
    };
  }, []);
  console.log("🚀 ~ file: useFetch.js:24 ~ options ~ options:", options)

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      console.log("🚀 ~ file: useFetch.js:31 ~ fetchData ~ error:", error)
      setError(error);
      alert('there is some issue in data fetching');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
