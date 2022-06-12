import React from "react";

export default function MovieCard(props) {
  const FavouriteComponent = props.Favourites;

  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex justify-content-start m-3 image-mov">
          <img  src={movie.Poster} alt="movie"></img>
          <div
            className="overlay d-flex align-items-center justify-content-center"
            onClick={() => props.FavouritesList(movie)}
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}
