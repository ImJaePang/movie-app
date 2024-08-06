import {useEffect, useState} from "react";

function App() {
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
            <div key={movie.id}>
              <h2>{movie.title}, rating: {movie.rating}</h2>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>
          ))}
          </div>
      }
    </div>
  );
}

export default App;
