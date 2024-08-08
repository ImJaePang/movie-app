import {useEffect, useState} from "react";
import Movies from "./Movies";

function Home(){

    const [loadng, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMoives = async() => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      );
  
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    };
      
    
    useEffect(() =>{
      getMoives();
    }, []);
  
    // console.log(movies);
  
    return (
      <div>
        {loadng
          ? <h1>Loading...</h1>
          : <div>
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                mediumCoverImage={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
            </div>
        }
      </div>
    ); 
}

export default Home;