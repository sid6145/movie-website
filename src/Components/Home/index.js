import React, {useState, useEffect} from 'react'
import Movie from '../Movie'
import axios from 'axios' 
import './style.css'

function Home (){
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearch] = useState("naruto");

    useEffect( async () => {
      
        var options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: `${searchValue}`},
            headers: {
              'x-rapidapi-key': '011970864emshdb968718f081befp19f279jsn8fdb609d3051',
              'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setMovies(response.data.d);
          }).catch(function (error) {
              console.error(error);
          });
      

    },[searchValue, movies]);

    console.log(movies)
    return (
    <div className="home-container">
        <input placeholder="search" className="search-box" type="text" onChange={(e) => setSearch(e.target.value)}/>
    <div className="home">  
        {
            movies.map((item) => (
                <Movie image={item.i.imageUrl} title={item.l} year={item.y  } id={item.imdbID} type={item.q}/>
            ))
        }
    </div>
    </div>

    )
}

export default Home