import React,{useEffect, useState} from 'react'
import Movie from '../Movie'
import './style.css'

function Toprated (){
    const [movies, setMovies] = useState([]);

    useEffect( async () => {
      
        let res = await fetch(`http://www.omdbapi.com/?s=new&apikey=63fbfcb7`)
        let resJson = await res.json()
       
        if(resJson.Search){
            setMovies(resJson.Search)
        }
    },[]);



    return <div className="top-rated">
         {
            movies.map((item) => (
                <Movie image={item.Poster} title={item.Title} year={item.Year} id={item.imdbID} type={item.Type}/>
            ))
        }
    </div>
}

export default Toprated;