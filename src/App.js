import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import MovieHeader from "./Components/MovieHeader";
import { SearchBox } from "./Components/SearchBox";
import { AddFavourites } from "./Components/AddFavourites";
import { RemoveFavourites } from "./Components/RemoveFavourites";

function App() {
  const [allMovies, setAllMovies] = useState([]); //local state to store movie list received from API
  const [searchValue, setSearchValue] = useState(""); // local state to append search value into API query
  const [favourites, setFavourites] = useState([]); //local state to mantain a favourites list

  //Get movie list from API and store it in local state variable
  const requestAPI = async (searchValue) => {
    const Url = `http://www.omdbapi.com/?s=${searchValue}&apikey=386f485c`;
  
    const response = await fetch(Url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setAllMovies(responseJson.Search);
    }
  };

  //Add movie List to Local Storage
  const addToLocalStorage = (movieList) => {
    localStorage.setItem("FavMovie-List", JSON.stringify(movieList));
  };

  //Get data from Local Browser Storage
  const getFromLocalStorage=()=>{
    const favListLocal=JSON.parse(localStorage.getItem('FavMovie-List'))
    setFavourites(favListLocal)
  }

  //Add Movies to favourite List and call Local Storage function to store favourites list in browser storage
  const FavArr = (movie) => {
    let favouritesList;
    let inList = false; //Boolean value to restrict duplication in favourite list

    //if local state for favoruite is empty should add the item to block scope array i.e., favouritesList
    if (favourites.length === 0) {
      favouritesList = [...favourites, movie];
      setFavourites(favouritesList);
      addToLocalStorage(favouritesList);
    } else if (favourites.length > 0) {
      favourites.map((data) =>
        data.imdbID === movie.imdbID ? (inList = true) : (inList = false)
      );

      if (!inList) {
        favouritesList = [...favourites, movie];
        setFavourites(favouritesList);
        addToLocalStorage(favouritesList);
      }
    }
    
  };
  
  //Remove movies from the favourite list and local storage as well
  const RemoveFavArr = (movie) => {
    let favouritesList = [
      ...favourites.filter((data) => data.imdbID !== movie.imdbID),
    ];
    setFavourites(favouritesList);
    addToLocalStorage(favouritesList);
  };

  useEffect(() => {
    requestAPI(searchValue);
    getFromLocalStorage();
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeader header="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieCard
          movies={allMovies}
          Favourites={AddFavourites}
          FavouritesList={FavArr}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeader header="Favourites" />
      </div>
      <div className="row">
        <MovieCard
          movies={favourites}
          Favourites={RemoveFavourites}
          FavouritesList={RemoveFavArr}
        />
      </div>
    </div>
  );
}

export default App;
