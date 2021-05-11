import React, {useState, useEffect} from 'react'
import Movie from '../Movie'
import Searchbox from '../SearchBox/index';

import './style.css'

function Home (){
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearch] = useState("naruto");

    useEffect( async () => {
      
        let res = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=63fbfcb7`)
        let resJson = await res.json()
       console.log(resJson.Search)
        if(resJson.Search){
            setMovies(resJson.Search)
        }
      

    },[searchValue]);


    return (
    <div className="home-container">
        <Searchbox searchValue={searchValue} setSearch={setSearch}/>
    <div className="home">  
        {
            movies.map((item) => (
                <Movie image={item.Poster} title={item.Title} year={item.Year} id={item.imdbID} type={item.Type}/>
            ))
        }
    </div>
    </div>

    )
}

export default Home