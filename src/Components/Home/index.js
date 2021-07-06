import React, {useState, useEffect} from 'react'
import Movie from '../Movie'
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
      

    },[searchValue, movies]);


    return (
    <div className="home-container">
        <input placeholder="search" className="search-box" type="text" onChange={(e) => setSearch(e.target.value)}/>
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