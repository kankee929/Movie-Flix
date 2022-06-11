import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState, useEffect } from "react";
import Navbar from './Components/Navbar';
import MovieCard from './Components/MovieCard';

function App() {
  const [allMovies, setAllMovies] = useState([])

  

  const requestAPI = async () => {
    await fetch("http://www.omdbapi.com/?s=avengers&apikey=386f485c")
      .then(resp => resp.json())
      .then(data => setAllMovies(data.Search))

  }

  const MovieEl = allMovies.map(item =>
    <MovieCard
      key={item.imdbID}
      Title={item.Title}
      Year={item.Year}
      Poster={item.Poster}
    />
  )

  useEffect(() => {
    requestAPI()

  }, [])

  return (
    <div className="container-fluid movie-app">
      {/* <Navbar /> */}
      <div className='row'>
        {MovieEl}
      </div>
    </div>
  );
}

export default App;
