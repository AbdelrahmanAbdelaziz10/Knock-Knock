import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Domain = "https://dashboard.knock-knock.ae" ;
export const useFetch = (url) => {
    const [getdata,setGetData]=useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const getFetchFunction=async(url)=>{
        try {
            setLoading(true);
            const res = await axios.get(`${Domain}${url}`);
            setGetData(res.data);
        } catch (error) {
            setError(error);
            console.error("Error fetching data:", error);
            return null;
          } finally {
            setLoading(false);
          }
    }
    useEffect(()=>{
        getFetchFunction(url)
    },[url])
    return  { getdata, error, loading };


    }

export default useFetch