import React from "react";

export default function MovieCard(props) {

    return (
        <>
            <div className="d-flex justify-content-start m-3 image-mov">
                <img src={props.Poster} alt="movie"></img>
            </div>
        </>

    )

}