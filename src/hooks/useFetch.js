import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Domain = "https://dashboard.knock-knock.ae" ;
export const useFetch = (url) => {
    const [data,setData]=useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const getFetchFunction=async(url)=>{
        try {
            setLoading(true);
            const res = await axios.get(`${Domain}${url}`);
            setData(res.data);
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
    return  { data,setData, error, loading };


    }

export default useFetch