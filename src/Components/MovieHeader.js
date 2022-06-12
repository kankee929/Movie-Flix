import React from "react";

export default function MovieHeader(props) {
  return (
    <div className="col">
      <h1>{props.header}</h1>
    </div>
  );
}
