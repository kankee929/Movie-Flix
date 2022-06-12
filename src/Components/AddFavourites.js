import React from "react";

export const AddFavourites = () => {
  return (
    <>
      <span className="mr-2">Add To Favourites</span>
      {/* loaded from bootstrap - heart symbol */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        fill="red"
        className="bi bi-heart-fill"
        viewBox="0 0 16 12"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </>
  );
};
