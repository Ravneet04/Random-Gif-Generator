import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const Random = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const[loading,setloading] = useState(false);
  const[gif,setgif] = useState('');
   async function fetchdata(){
      setloading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const{data} = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setgif(imageSource);
      setloading(false);
  }
  useEffect(() =>{
    fetchdata();
  },[])

  function clickHandler(){
    fetchdata();
  }
  return (
    <div>
      <h1>Random gifs</h1>
        {
          loading?(<spinner/>) : (<img src={gif}/>)
        }
      <button
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
       onClick={clickHandler}>
        Genrate
      </button>
    </div>
  )
}

export default Random